/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />
System.register(['angular2/core', 'angular2/router', './authentication-modal.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, authentication_modal_component_1;
    var Navigationbar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_modal_component_1_1) {
                authentication_modal_component_1 = authentication_modal_component_1_1;
            }],
        execute: function() {
            Navigationbar = (function () {
                function Navigationbar() {
                }
                Navigationbar.prototype.updateUI = function () {
                    $('#tutor-log-navigationbar-list-item').removeClass('active');
                    $('#tutor-schedule-navigationbar-list-item').removeClass('active');
                    $('#tutors-navigationbar-list-item').removeClass('active');
                    $('#assignments-navigationbar-list-item').removeClass('active');
                    $('#admin-navigationbar-list-item').removeClass('active');
                };
                Navigationbar.prototype.activateListItem = function (id) {
                    this.updateUI();
                    $('#' + id).addClass('active');
                };
                Navigationbar.prototype.showAuthenticationModal = function () {
                    $('#sign-in-or-signUp-modal').modal('show');
                };
                Navigationbar = __decorate([
                    core_1.Component({
                        selector: 'navigationbar',
                        directives: [router_1.ROUTER_DIRECTIVES, authentication_modal_component_1.AuthenticationModal],
                        templateUrl: './app/php/templates/navigationbar.php'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Navigationbar);
                return Navigationbar;
            })();
            exports_1("Navigationbar", Navigationbar);
        }
    }
});
//# sourceMappingURL=navigationbar.component.js.map