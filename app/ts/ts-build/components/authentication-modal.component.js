/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />
System.register(['angular2/core', 'angular2/http', '../global', '../services/authentication.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, global_1, Authentication;
    var AuthenticationModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (global_1_1) {
                global_1 = global_1_1;
            },
            function (Authentication_1) {
                Authentication = Authentication_1;
            }],
        execute: function() {
            AuthenticationModal = (function () {
                function AuthenticationModal(element, http) {
                    this.firstName = '';
                    this.lastName = '';
                    this.email = '';
                    this.password = '';
                    this.http = http;
                }
                AuthenticationModal.prototype.setEmail = function (email) {
                    this.email = email;
                };
                AuthenticationModal.prototype.setPassword = function (password) {
                    this.password = password;
                };
                AuthenticationModal.prototype.setFirstName = function (firstName) {
                    this.firstName = firstName;
                };
                AuthenticationModal.prototype.setLastName = function (lastName) {
                    this.lastName = lastName;
                };
                AuthenticationModal.prototype.clearInputs = function () {
                    $('#sign-in-email-input').val("");
                    $('#sign-in-password-input').val("");
                    $('#signUp-first-name-input').val("");
                    $('#signUp-last-name-input').val("");
                    $('#signUp-email-input').val("");
                    $('#signUp-password-input').val("");
                };
                AuthenticationModal.prototype.doesContainsOnlyCharacters = function (aString) {
                    var pattern = new RegExp('^[(aA-zZ)(\')]+$');
                    if (pattern.test(aString))
                        return true;
                    else
                        return false;
                };
                AuthenticationModal.prototype.isUSCUpstateEmail = function (email) {
                    var pattern = new RegExp('^[(aA-zZ)(0-9)(\.)]+@email\.uscupstate\.edu$');
                    if (pattern.test(email))
                        return true;
                    else
                        return false;
                };
                AuthenticationModal.prototype.signUpContainsValidData = function () {
                    if (!this.doesContainsOnlyCharacters(this.firstName)) {
                        $('#signUp-first-name-input').focus();
                        return false;
                    }
                    else if (!this.doesContainsOnlyCharacters(this.lastName)) {
                        $('#signUp-last-name-input').focus();
                        return false;
                    }
                    else if (!this.isUSCUpstateEmail(this.email)) {
                        $('#signUp-email-input').focus();
                        return false;
                    }
                    else if (this.password.length <= 0) {
                        $('#signUp-password-input').focus();
                        return false;
                    }
                    return true;
                };
                AuthenticationModal.prototype.signInContainsValidData = function () {
                    if (!this.isUSCUpstateEmail(this.email)) {
                        $('#sign-in-email-input').focus();
                        return false;
                    }
                    else if (this.password.length <= 0) {
                        $('#sign-in-password-input').focus();
                        return false;
                    }
                    return true;
                };
                AuthenticationModal.prototype.signUp = function () {
                    var _this = this;
                    if (this.signUpContainsValidData()) {
                        Authentication.signUp(this.http, this.firstName, this.lastName, this.email, this.password, function (result) {
                            console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
                            _this.setEmail(_this.email);
                            _this.setPassword(_this.password);
                            _this.signIn(false);
                        });
                    }
                };
                AuthenticationModal.prototype.signIn = function (shouldValidate) {
                    var _this = this;
                    if (shouldValidate === void 0) { shouldValidate = true; }
                    if (!shouldValidate || this.signInContainsValidData()) {
                        Authentication.signIn(this.http, this.email, this.password, function (result) {
                            console.log('[authentication-modal.component] signIn()\n' + JSON.stringify(result, null, 4));
                            _this.clearInputs();
                            location.href = global_1.Global.BASE_URL;
                        });
                    }
                };
                AuthenticationModal = __decorate([
                    core_1.Component({
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        selector: 'authentication-modal'
                    }),
                    core_1.View({
                        templateUrl: './app/php/templates/authentication-modal.php'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, http_1.Http])
                ], AuthenticationModal);
                return AuthenticationModal;
            })();
            exports_1("AuthenticationModal", AuthenticationModal);
        }
    }
});
//# sourceMappingURL=authentication-modal.component.js.map