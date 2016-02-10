System.register(['angular2/platform/browser', './components/navigationbar.component'], function(exports_1) {
    var browser_1, navigationbar_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (navigationbar_component_1_1) {
                navigationbar_component_1 = navigationbar_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(navigationbar_component_1.Navigationbar);
        }
    }
});
//# sourceMappingURL=main.js.map