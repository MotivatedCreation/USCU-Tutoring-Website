System.register(['angular2/http', '../global'], function(exports_1) {
    var http_1, global_1;
    function requestWithActionAndParameters(action, actionParameters) {
        var service = 'Authentication';
        var request = { 'service': service,
            'action': action,
            'parameters': actionParameters };
        return 'request=' + encodeURIComponent(JSON.stringify(request));
    }
    exports_1("requestWithActionAndParameters", requestWithActionAndParameters);
    function signUp(http, firstName, lastName, email, password, callback) {
        var request = this.requestWithActionAndParameters('signUp', {
            'email': email,
            'password': password,
            'firstName': firstName,
            'lastName': lastName
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.BASE_URL + '/app/php/api/api.php', request, { headers: headers })
            .subscribe(function (result) {
            console.log('[authentication.service] signUp()');
            callback(result);
        });
    }
    exports_1("signUp", signUp);
    function signIn(http, email, password, callback) {
        var request = this.requestWithActionAndParameters('signIn', {
            'email': email,
            'password': password
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.BASE_URL + '/app/php/api/api.php', request, { headers: headers })
            .subscribe(function (result) {
            console.log('[authentication.service] signIn()');
            callback(result);
        });
    }
    exports_1("signIn", signIn);
    function signOut(http, callback) {
        var request = this.requestWithActionAndParameters('signOut', null);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.BASE_URL + '/app/php/api/api.php', request, { headers: headers })
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
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=authentication.service.js.map