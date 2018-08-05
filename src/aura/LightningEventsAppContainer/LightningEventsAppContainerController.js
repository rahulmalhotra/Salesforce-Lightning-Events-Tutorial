({
	// Method to handle application event
	handleApplicationEvent : function(component, event, helper) {
		var id = component.get('v.id');
        alert('Application Event in container component '+id);
		component.set('v.message', event.getParam("message"));
	}
})