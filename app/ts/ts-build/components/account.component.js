/// <reference path="../libraries/jquery.d.ts" />
System.register(['angular2/core', 'angular2/router', './profile.component', './classes.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_component_1, classes_component_1;
    var Account;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (classes_component_1_1) {
                classes_component_1 = classes_component_1_1;
            }],
        execute: function() {
            Account = (function () {
                function Account() {
                }
                Account.prototype.updateUI = function () {
                    $('#account-menu-profile-button').removeClass('active');
                    $('#account-menu-appointments-button').removeClass('active');
                    $('#account-menu-assignments-button').removeClass('active');
                    $('#account-menu-classes-button').removeClass('active');
                    $('#account-menu-schedule-button').removeClass('active');
                    $('#account-menu-timelog-button').removeClass('active');
                };
                Account.prototype.activateMenuItem = function (id) {
                    this.updateUI();
                    $('#' + id).addClass('active');
                };
                Account = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/profile',
                            name: 'Profile',
                            component: profile_component_1.Profile,
                            useAsDefault: true
                        },
                        {
                            path: '/classes',
                            name: 'Classes',
                            component: classes_component_1.Classes
                        }
                    ]),
                    core_1.Component({
                        selector: 'account',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: './app/php/templates/account.php',
                        styleUrls: ['./app/css/account.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], Account);
                return Account;
            })();
            exports_1("Account", Account);
        }
    }
});
//# sourceMappingURL=account.component.js.map