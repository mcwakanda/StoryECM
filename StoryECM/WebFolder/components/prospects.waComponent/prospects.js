
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'prospects';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var addButton = {};	// @image
	var leadEvent = {};	// @dataSource
	// @endregion// @endlock
	var doFilter = function(){
		//creates the collection based on filter elements
		$comp.sources.lead.all();
	}
	
	$$(getHtmlId('filterComp')).loadComponent({path: '/components/filter.waComponent', userData: {target: 'prospects'}});
	doFilter();
	// eventHandlers// @lock

	addButton.click = function addButton_click (event)// @startlock
	{// @endlock
		//create a new prospect and open detail form
		$$(APP.mainSplitComp).loadDetailComp({type: 'Prospect'});
	};// @lock

	leadEvent.onCurrentElementChange = function leadEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if($comp.sources.lead.length == 0){
			
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_addButton", "click", addButton.click, "WAF");
	WAF.addListener(this.id + "_lead", "onCurrentElementChange", leadEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
