import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home.component';
import {TutorLog} from './tutor-log.component';
import {TutorSchedule} from './tutor-schedule.component';
import {Tutors} from './tutors.component';
import {Assignments} from './assignments.component';
import {Admin} from './admin.component';
import {Account} from './account.component';
import {Navigationbar} from './navigationbar.component';

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tutor-log',
    name: 'TutorLog',
    component: TutorLog
  },
  {
    path: '/tutor-schedule',
    name: 'TutorSchedule',
    component: TutorSchedule
  },
  {
    path: '/tutors',
    name: 'Tutors',
    component: Tutors
  },
  {
    path: '/assignments',
    name: 'Assignments',
    component: Assignments
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/account/...',
    name: 'Account',
    component: Account
  }
])

@Component({
  selector: 'app',
  directives: [Navigationbar],
  templateUrl: './app/php/templates/app.php'
})

export class App
{
}
