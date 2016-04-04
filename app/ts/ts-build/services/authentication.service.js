System.register(['angular2/http', '../global', '../services/service'], function(exports_1) {
    var http_1, global_1, Service;
    var Authentication;
    function signUp(http, firstName, lastName, email, password, callback) {
        var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signUp', {
            'email': email,
            'password': password,
            'firstName': firstName,
            'lastName': lastName
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.API_URL, request, { headers: headers })
            .subscribe(function (result) {
            console.log('[authentication.service] signUp()');
            callback(result);
        });
    }
    exports_1("signUp", signUp);
    function signIn(http, email, password, callback) {
        var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signIn', {
            'email': email,
            'password': password
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.API_URL, request, { headers: headers })
            .subscribe(function (result) {
            console.log('[authentication.service] signIn()');
            callback(result);
        });
    }
    exports_1("signIn", signIn);
    function signOut(http, callback) {
        var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signOut', null);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.API_URL, request, { headers: headers })
            .subscribe(function (result) {
            console.log('[authentication.service] signOut()');
            callback(result);
        });
    }
    exports_1("signOut", signOut);
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (global_1_1) {
                global_1 = global_1_1;
            },
            function (Service_1) {
                Service = Service_1;
            }],
        execute: function() {
            Authentication = (function () {
                function Authentication() {
                }
                Authentication.SERVICE = "Authentication";
                return Authentication;
            })();
            exports_1("Authentication", Authentication);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map