
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'filter';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	// @region namespaceDeclaration// @startlock
	var textFilterInput = {};	// @textField
	// @endregion// @endlock
	var filterType = data.userData.target;
	// TODO: build a filter based on the target
	// eventHandlers// @lock

	textFilterInput.mouseup = function textFilterInput_mouseup (event)// @startlock
	{// @endlock
//		$$(APP.listComp).doFilter({
//			text: $$(getHtmlId('textFilterInput')).getValue
//		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textFilterInput", "mouseup", textFilterInput.mouseup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
