<!-- Lightning Application extending slds -->
<aura:application extends="force:slds">
	<!-- Calling the container component -->
    <div class="slds-box">
        <div class="slds-text-heading_medium slds-text-align_center">Component Event Below</div>
        <c:LightningEventsCompContainer />
    </div>
    <!-- Calling the application event container components -->
    <div class="slds-box">
	    <div class="slds-text-heading_medium slds-text-align_center">Application Event Below</div>
        <c:LightningEventsAppContainer id="1" />
        <br />
        <c:LightningEventsAppContainer id="2" />    
    </div>
</aura:application>