System.register(['angular2/core', 'angular2/router', './home.component', './tutor-log.component', './tutor-schedule.component', './tutors.component', './assignments.component', './admin.component', './account.component', './navigationbar.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, tutor_log_component_1, tutor_schedule_component_1, tutors_component_1, assignments_component_1, admin_component_1, account_component_1, navigationbar_component_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (tutor_log_component_1_1) {
                tutor_log_component_1 = tutor_log_component_1_1;
            },
            function (tutor_schedule_component_1_1) {
                tutor_schedule_component_1 = tutor_schedule_component_1_1;
            },
            function (tutors_component_1_1) {
                tutors_component_1 = tutors_component_1_1;
            },
            function (assignments_component_1_1) {
                assignments_component_1 = assignments_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (navigationbar_component_1_1) {
                navigationbar_component_1 = navigationbar_component_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.Home
                        },
                        {
                            path: '/tutor-log',
                            name: 'TutorLog',
                            component: tutor_log_component_1.TutorLog
                        },
                        {
                            path: '/tutor_schedule',
                            name: 'TutorSchedule',
                            component: tutor_schedule_component_1.TutorSchedule
                        },
                        {
                            path: '/tutors',
                            name: 'Tutors',
                            component: tutors_component_1.Tutors
                        },
                        {
                            path: '/assignments',
                            name: 'Assignments',
                            component: assignments_component_1.Assignments
                        },
                        {
                            path: '/admin',
                            name: 'Admin',
                            component: admin_component_1.Admin
                        },
                        {
                            path: '/account/...',
                            name: 'Account',
                            component: account_component_1.Account
                        }
                    ]),
                    core_1.Component({
                        selector: 'app',
                        directives: [navigationbar_component_1.Navigationbar],
                        templateUrl: './app/php/templates/app.php'
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.component.js.map