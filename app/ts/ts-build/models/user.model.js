System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(user) {
                    this.userID = user['userID'];
                    this.accountType = user['accountType'];
                    this.firstName = user['firstName'];
                    this.lastName = user['lastName'];
                    this.email = user['email'];
                    this.description = user['description'];
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.model.js.map