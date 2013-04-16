/**
 * CloakingDevice namespace.
 */
if ("undefined" == typeof(CloakingDevice)) {
  var CloakingDevice = {};
};

/**
 * Controls the browser overlay for the Cloaking Device.
 */
CloakingDevice.BrowserOverlay = {
	openIpad : function(aEvent) {
		// let stringBundle = document.getElementById("cloakingdevice-string-bundle");
		// let message = stringBundle.getString("cloakingdevice.greeting.label");
		// window.alert(message);
		window.open("chrome://cloakingdevice/content/iPad.xul", "cloakingdevice-ipad-window", "chrome, centerscreen");
	},
	openIphone4 : function(aEvent) {
		window.open("chrome://cloakingdevice/content/iPhone4.xul", "cloakingdevice-iphone-window", "chrome, centerscreen, resizable, scrollbars, status");
	},
	openIphone : function(aEvent) {
		//lets try and find the general branch
		var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("general.useragent.");
		prefs.setCharPref('override','Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16');
		//open that iphone window finally. 
		window.open("chrome://cloakingdevice/content/iPhone.xul", "cloakingdevice-iphone-window", "chrome, centerscreen, resizable, scrollbars, status");
	}
}
