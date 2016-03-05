/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />
System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var AuthenticationModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AuthenticationModal = (function () {
                function AuthenticationModal(element, http) {
                    this.signUpEmail = '';
                    this.signUpPassword = '';
                    this.signUpFirstName = '';
                    this.signUpLastName = '';
                    this.signInEmail = '';
                    this.signInPassword = '';
                    this.element = element;
                    this.http = http;
                }
                AuthenticationModal.prototype.setSignUpEmail = function (email) {
                    this.signUpEmail = email.value;
                };
                AuthenticationModal.prototype.setSignUpPassword = function (password) {
                    this.signUpPassword = password;
                };
                AuthenticationModal.prototype.setSignUpFirstName = function (firstName) {
                    this.signUpFirstName = firstName;
                };
                AuthenticationModal.prototype.setSignUpLastName = function (lastName) {
                    this.signUpLastName = lastName;
                };
                AuthenticationModal.prototype.setSignInEmail = function (email) {
                    this.signInEmail = email;
                };
                AuthenticationModal.prototype.setSignInPassword = function (password) {
                    this.signInPassword = password;
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
                    if (!this.doesContainsOnlyCharacters(this.signUpFirstName)) {
                        $('#signUp-first-name-input').focus();
                        return false;
                    }
                    else if (!this.doesContainsOnlyCharacters(this.signUpLastName)) {
                        $('#signUp-last-name-input').focus();
                        return false;
                    }
                    else if (!this.isUSCUpstateEmail(this.signUpEmail)) {
                        $('#signUp-email-input').focus();
                        return false;
                    }
                    else if (this.signUpPassword.length <= 0) {
                        $('#signUp-password-input').focus();
                        return false;
                    }
                    return true;
                };
                AuthenticationModal.prototype.signUp = function () {
                    var _this = this;
                    if (this.signUpContainsValidData()) {
                        var service = 'Authentication';
                        var action = 'signUp';
                        var request = { 'service': service,
                            'action': action,
                            'parameters': {
                                'email': this.signUpEmail,
                                'password': this.signUpPassword,
                                'firstName': this.signUpFirstName,
                                'lastName': this.signUpLastName
                            }
                        };
                        var parameters = 'request=' + encodeURIComponent(JSON.stringify(request));
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        this.http.post('http://usc.local/app/php/api/api.php', parameters, { headers: headers })
                            .subscribe(function (result) {
                            _this.clearInputs();
                            $('#sign-in-or-signUp-modal').modal('hide');
                            console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
                        });
                    }
                };
                AuthenticationModal.prototype.signInContainsValidData = function () {
                    if (!this.isUSCUpstateEmail(this.signInEmail)) {
                        $('#sign-in-email-input').focus();
                        return false;
                    }
                    else if (this.signInPassword.length <= 0) {
                        $('#sign-in-password-input').focus();
                        return false;
                    }
                    return true;
                };
                AuthenticationModal.prototype.signIn = function () {
                    var _this = this;
                    if (this.signInContainsValidData()) {
                        var service = 'Authentication';
                        var action = 'signIn';
                        var request = { 'service': service,
                            'action': action,
                            'parameters': {
                                'email': this.signInEmail,
                                'password': this.signInPassword
                            }
                        };
                        var parameters = 'request=' + encodeURIComponent(JSON.stringify(request));
                        var headers = new http_1.Headers();
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        this.http.post('http://usc.local/app/php/api/api.php', parameters, { headers: headers })
                            .subscribe(function (result) {
                            _this.clearInputs();
                            $('#sign-in-or-signUp-modal').modal('hide');
                            console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
                        });
                    }
                };
                AuthenticationModal.prototype.handleError = function (error) {
                    console.error('[authentication-modal.component] Error: ' + JSON.stringify(error, null, 4));
                };
                AuthenticationModal = __decorate([
                    core_1.Component({
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        selector: 'authentication-modal'
                    }),
                    core_1.View({
                        templateUrl: './app/html/templates/authentication-modal.html'
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