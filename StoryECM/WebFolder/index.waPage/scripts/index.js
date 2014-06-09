
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var loginButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() != null){
			window.location = '/app';
		}
	};// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		WAF.directory.loginByPassword($$('usernameInput').getValue(), $$('passwordInput').getValue(), {
			onSuccess: function(e){
				if(e.result == true){
					window.location = '/app';
				}
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
// @endregion
};// @endlock
