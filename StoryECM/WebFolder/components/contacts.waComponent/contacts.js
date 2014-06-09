
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'contacts';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	// @region namespaceDeclaration// @startlock
	var personEvent = {};	// @dataSource
	var checkbox1 = {};	// @checkbox
	var checkbox2 = {};	// @checkbox
	var createdToInput = {};	// @textField
	var createdFromInput = {};	// @textField
	var addButton = {};	// @image
	var filterTextInput = {};	// @textField
	// @endregion// @endlock
	var applyFilter = function(){
		
	}
	if(sources.person.length == 0){
		$$(APP.mainSplitComp).collapseSplit();
	}
	// eventHandlers// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		//debugger; //comp level
		

	};// @lock

	checkbox1.change = function checkbox1_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	checkbox2.change = function checkbox2_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	createdToInput.change = function createdToInput_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	createdFromInput.change = function createdFromInput_change (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	addButton.click = function addButton_click (event)// @startlock
	{// @endlock
		//create a new prospect and open detail form
		sources.person.addNewElement();
		$$(APP.mainSplitComp).loadDetailComp({type: 'Contact'});
		
	};// @lock

	filterTextInput.keyup = function filterTextInput_keyup (event)// @startlock
	{// @endlock
		applyFilter();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener("person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_checkbox1", "change", checkbox1.change, "WAF");
	WAF.addListener(this.id + "_checkbox2", "change", checkbox2.change, "WAF");
	WAF.addListener(this.id + "_createdToInput", "change", createdToInput.change, "WAF");
	WAF.addListener(this.id + "_createdFromInput", "change", createdFromInput.change, "WAF");
	WAF.addListener(this.id + "_addButton", "click", addButton.click, "WAF");
	WAF.addListener(this.id + "_filterTextInput", "keyup", filterTextInput.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
