({
	doInit : function(component, event, helper) {
	    component.set('v.mycolumns', [
            {label: 'SNo.', fieldName: 'sno', type: 'number'},
            {label: 'Name of Source', fieldName: 'source', type: 'text'},
            {label: 'Amount', fieldName: 'amount', type: 'number'}
        ]);
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
	
	handleTotalIncomeComponentEvent: function(component, event, helper) {
		alert('Event handler at source component that fired the event.');
	},

	toggleIncomeForm: function(component, event, helper) {
		var incomeForm = component.find('incomeForm');
		$A.util.toggleClass(incomeForm, 'hide');
	},

	addIncome: function(component, event, helper) {
		var incomes = component.get('v.incomes');
		var newIncome = {
			sno: incomes.length + 1,
			source: component.find('source').get('v.value'),
			amount: parseFloat(component.find('amount').get('v.value'))
		};
		if(newIncome.source!='' && newIncome.amount!='' && newIncome.source!=null && newIncome.amount!=null)
			incomes.push(newIncome);
		component.set('v.incomes', incomes);
		component.find('source').set('v.value','');
		component.find('amount').set('v.value','');
	},

	fireTotalIncomeComponentEvent: function(component, event, helper) {
		var incomes = component.get('v.incomes');
		var totalIncome = 0;
		for(var i=0;i<incomes.length;i++) {
			totalIncome += incomes[i].amount;
		}
		var totalIncomeComponentEvent = component.getEvent('totalIncomeComponentEvent');
		totalIncomeComponentEvent.setParams({
			totalIncome: totalIncome
		});
		totalIncomeComponentEvent.fire();
	}
})