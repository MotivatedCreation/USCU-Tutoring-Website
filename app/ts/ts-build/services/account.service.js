System.register(['angular2/http', '../global', '../services/service'], function(exports_1) {
    var http_1, global_1, Service;
    var Account;
    function saveDescription(http, description, callback) {
        var request = Service.requestServiceWithActionAndParameters(Account.SERVICE, 'saveDescription', {
            'description': description
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.post(global_1.Global.API_URL, request, { headers: headers })
            .subscribe(function (result) {
            console.log('[account.service] saveDescription()');
            callback(result);
        });
    }
    exports_1("saveDescription", saveDescription);
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
            Account = (function () {
                function Account() {
                }
                Account.SERVICE = "Account";
                return Account;
            })();
            exports_1("Account", Account);
        }
    }
});
//# sourceMappingURL=account.service.js.map