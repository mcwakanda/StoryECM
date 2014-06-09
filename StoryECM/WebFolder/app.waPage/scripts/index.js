
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var personEvent = {};	// @dataSource
	var adminMenu = {};	// @menuItem
	var contactsMenu = {};	// @menuItem
	var coursesMenu = {};	// @menuItem
	var studentsMenu = {};	// @menuItem
	var prospectsMenu = {};	// @menuItem
	var dashboardMenu = {};	// @menuItem
	var logoutButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock
var goToIndex = function(){
	window.location = '/';
};
var loadView = function(view){
	$$('mainViewComp').loadComponent('/components/' + view + '.waComponent');
}
var loadListView = function(view){
	$$('mainViewComp').loadComponent({path: '/components/listView.waComponent', userData:{view: view}});

}
// eventHandlers// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		//debugger; //app level

	};// @lock

	adminMenu.click = function adminMenu_click (event)// @startlock
	{// @endlock
		loadView('admin');
	};// @lock

	contactsMenu.click = function contactsMenu_click (event)// @startlock
	{// @endlock
		loadListView('contacts');
	};// @lock

	coursesMenu.click = function coursesMenu_click (event)// @startlock
	{// @endlock
		loadListView('courses');
	};// @lock

	studentsMenu.click = function studentsMenu_click (event)// @startlock
	{// @endlock
		loadListView('students');
	};// @lock

	prospectsMenu.click = function prospectsMenu_click (event)// @startlock
	{// @endlock
		loadListView('prospects');
	};// @lock

	dashboardMenu.click = function dashboardMenu_click (event)// @startlock
	{// @endlock
		loadView('dashboard');
	};// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		goToIndex();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() == null){
			goToIndex();
		} else {
			$$('loggedInAsText').setValue('Logged in as ' + WAF.directory.currentUser().fullName);
			$('#dashboardMenu').trigger('click');
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
	WAF.addListener("adminMenu", "click", adminMenu.click, "WAF");
	WAF.addListener("contactsMenu", "click", contactsMenu.click, "WAF");
	WAF.addListener("coursesMenu", "click", coursesMenu.click, "WAF");
	WAF.addListener("studentsMenu", "click", studentsMenu.click, "WAF");
	WAF.addListener("prospectsMenu", "click", prospectsMenu.click, "WAF");
	WAF.addListener("dashboardMenu", "click", dashboardMenu.click, "WAF");
	WAF.addListener("logoutButton", "click", logoutButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
