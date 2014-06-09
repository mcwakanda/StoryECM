
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'listView';
	// @endregion// @endlock
	// TODO: strange splitter behaviour when collapsed and size browser with side in Mac OSX 
	//You put funcitons in this area if you want to be able to call them "on" the component
	//in the rest of your code you need to use $comp12¡
	var savedSplitWidth = 400;
	var splitContainer = $$(getHtmlId('mainSplit'));
	var isCollapsed = false;

	this.expandSplit = function(width){
		isCollapsed = false;
		if(width == undefined){
			width = savedSplitWidth;
		}
		$comp.setSplitter(width);
		$$(getHtmlId('collapseImage')).show();
		$$(getHtmlId('expandImage')).hide();
	};
	this.collapseSplit = function(){
		isCollapsed = true;
		$comp.setSplitter(0);
		$$(getHtmlId('collapseImage')).hide();
		$$(getHtmlId('expandImage')).show();
	};
	this.setSplitter = function(width){
		//scenarios, forced width, new width, maintain width
		if(isCollapsed == true){
			width = 0;
		}
		var containerWidth = splitContainer.getWidth();
		splitContainer.setSplitPosition(containerWidth - width);
	};
	this.loadDetailComp = function(component, userData){
		$$(getHtmlId('detailComp')).loadComponent({path: '/components/detail' + component.type + '.waComponent', userData: userData});
		$$(APP.mainSplitComp).expandSplit();
	}
	
	
	///////
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var collapseImage = {};	// @image
	var expandImage = {};	// @image
	// @endregion// @endlock
	//load the appropriate list/detail based on user data
	$$(getHtmlId('listComp')).loadComponent('/components/' + data.userData.view + '.waComponent');
	
	//set up all the splitter functionality
//	var savedSplitWidth = 400;
//	var splitContainer = this.splitContainer; //get an accessible context to constructor var
	$comp.setSplitter(savedSplitWidth); //initialize the splitter position
	$(window).resize(function(){
		$comp.setSplitter(savedSplitWidth)
	});
	$('#waf-splitter-mainViewComp_mainSplit').mouseup(function(e){
		//update splitter position after drag
		savedSplitWidth = splitContainer.getWidth() - splitContainer.getSplitPosition();
	});
	// eventHandlers// @lock

	collapseImage.click = function collapseImage_click (event)// @startlock
	{// @endlock
		$comp.collapseSplit();
	};// @lock

	expandImage.click = function expandImage_click (event)// @startlock
	{// @endlock
		$comp.expandSplit(savedSplitWidth);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_collapseImage", "click", collapseImage.click, "WAF");
	WAF.addListener(this.id + "_expandImage", "click", expandImage.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
