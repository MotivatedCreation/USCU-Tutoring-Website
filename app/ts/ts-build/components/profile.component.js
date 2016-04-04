System.register(['angular2/core', 'angular2/http', '../services/account.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Account;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Account_1) {
                Account = Account_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(http) {
                    this.http = http;
                }
                Profile.prototype.ngOnInit = function () {
                    $('#save-description-button').hide();
                };
                Profile.prototype.setDescription = function (description) {
                    this.description = description;
                };
                Profile.prototype.editDescription = function () {
                    $('#edit-description-button').hide();
                    $('#save-description-button').show();
                    $('#profile-description-well').prop('readonly', false);
                    $('#profile-description-well').css('background-color', 'white');
                    $('#profile-description-well').focus();
                };
                Profile.prototype.saveDescription = function () {
                    $('#edit-description-button').show();
                    $('#save-description-button').hide();
                    $('#profile-description-well').prop('readonly', true);
                    $('#profile-description-well').css('background-color', 'rgb(245, 245, 245)');
                    if (this.description.length > 0) {
                        Account.saveDescription(this.http, this.description, function (result) {
                            console.log('[profile.component] saveDescription()\n' + JSON.stringify(result, null, 4));
                        });
                    }
                };
                Profile = __decorate([
                    core_1.Component({
                        selector: 'profile',
                    }),
                    core_1.View({
                        templateUrl: './app/php/templates/profile.php',
                        styleUrls: ['./app/css/profile.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Profile);
                return Profile;
            })();
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.component.js.map