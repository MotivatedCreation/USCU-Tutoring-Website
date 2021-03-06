/// <reference path="../libraries/jquery.d.ts" />

import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from './profile.component';
import {Classes} from './classes.component';
import {Schedule} from './schedule.component';
import {TimeLog} from './time-log.component';

@RouteConfig([
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    useAsDefault: true
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/time-log',
    name: 'TimeLog',
    component: TimeLog
  }
])

@Component({
  selector: 'account',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/php/templates/account.php',
  styleUrls: ['./app/css/account.css']
})

export class Account
{
  public updateUI()
  {
    $('#account-menu-profile-button').removeClass('active');
    $('#account-menu-appointments-button').removeClass('active');
    $('#account-menu-assignments-button').removeClass('active');
    $('#account-menu-classes-button').removeClass('active');
    $('#account-menu-schedule-button').removeClass('active');
    $('#account-menu-timelog-button').removeClass('active');
  }

  public activateMenuItem(id: string)
  {
    this.updateUI();

    $('#' + id).addClass('active');
  }
}
