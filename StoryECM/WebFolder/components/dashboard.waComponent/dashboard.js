
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'dashboard';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var reportingMenu = {};	// @menuItem
	var overviewMenu = {};	// @menuItem
	// @endregion// @endlock
	//$('#' + getHtmlId('overviewMenu')).trigger('click'); //TODO:preferred technique, not working
	$$(getHtmlId('dashboardComp')).loadComponent('/components/dashboardOverview.waComponent');
	// eventHandlers// @lock

	reportingMenu.click = function reportingMenu_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('dashboardComp')).loadComponent('/components/dashboardReports.waComponent')
	};// @lock

	overviewMenu.click = function overviewMenu_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('dashboardComp')).loadComponent('/components/dashboardOverview.waComponent')
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_reportingMenu", "click", reportingMenu.click, "WAF");
	WAF.addListener(this.id + "_overviewMenu", "click", overviewMenu.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
