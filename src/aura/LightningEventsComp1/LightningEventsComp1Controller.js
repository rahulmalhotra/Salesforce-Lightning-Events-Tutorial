({
	// Init handler used to initialize lightning:datatable
	doInit : function(component, event, helper) {
		// Defining the columns to be used in lightning:datatable
	    component.set('v.mycolumns', [
            {label: 'SNo.', fieldName: 'sno', type: 'number'},
            {label: 'Name of Source', fieldName: 'source', type: 'text'},
            {label: 'Amount', fieldName: 'amount', type: 'number'}
        ]);
        // Setting the incomes object with initial data to be included in datatable
        // Note tht fieldName in columns above are used as key values while inserting records
        component.set('v.incomes', [{
        	sno: 1,
        	source: 'Regular Job',
        	amount: 10000
        },
        {
        	sno: 2,
        	source: 'Part Time Job',
        	amount: 2000
        }]);
	},
	
	// Function to handle Lightning Event fired from this component itself.
	handleRegisteredComponentEvent: function(component, event, helper) {
		alert('Event handler at source component that fired the event.');
	},

	// Function to toggle Income Form visibility
	toggleIncomeForm: function(component, event, helper) {
		// Getting the income form reference
		var incomeForm = component.find('incomeForm');
		// Toggling the class of incomeForm to show/hide the form
		$A.util.toggleClass(incomeForm, 'hide');
	},

	// Function to add new income in the existing table data
	addIncome: function(component, event, helper) {
		// Getting all the income records currently present
		var incomes = component.get('v.incomes');
		// Forming a new income record by taking values from the income form
		var newIncome = {
			sno: incomes.length + 1,
			source: component.find('source').get('v.value'),
			amount: parseFloat(component.find('amount').get('v.value'))
		};
		// Check if the new income record has value in each field if yes, push it to the list of existing income records
		if(newIncome.source!='' && newIncome.amount!='' && newIncome.source!=null && newIncome.amount!=null)
			incomes.push(newIncome);
		// Set the income table records attribute with the new value
		component.set('v.incomes', incomes);
		// Empty the fields in the income form
		component.find('source').set('v.value','');
		component.find('amount').set('v.value','');
	},

	// This method is used to fire the income lightning event
	fireTotalIncomeComponentEvent: function(component, event, helper) {
		// Getting all the income records from the list
		var incomes = component.get('v.incomes');
		var totalIncome = 0;
		// Calculating the total income by adding the amount of each income record
		for(var i=0;i<incomes.length;i++) {
			totalIncome += incomes[i].amount;
		}
		/* Getting the event defined by using component.getEvent() and passing the
		same value as in the name attribute of registerEvent tag */
		var totalIncomeComponentEvent = component.getEvent('totalIncomeComponentEvent');
		// Setting the attribute of event using setParams()
		totalIncomeComponentEvent.setParams({
			totalIncome: totalIncome
		});
		// Firing the event
		totalIncomeComponentEvent.fire();
	}
})