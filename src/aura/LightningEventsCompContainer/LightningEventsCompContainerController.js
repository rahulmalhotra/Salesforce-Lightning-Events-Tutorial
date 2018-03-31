({
	handleTotalIncomeComponentEvent : function(component, event, helper) {
		var totalIncome = event.getParam('totalIncome');
		component.set('v.totalIncome', totalIncome);
	}
})