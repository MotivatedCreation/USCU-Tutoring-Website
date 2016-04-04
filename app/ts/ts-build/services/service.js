System.register([], function(exports_1) {
    function requestServiceWithActionAndParameters(service, action, actionParameters) {
        var request = { 'service': service,
            'action': action,
            'parameters': actionParameters };
        return 'request=' + encodeURIComponent(JSON.stringify(request));
    }
    exports_1("requestServiceWithActionAndParameters", requestServiceWithActionAndParameters);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=service.js.map