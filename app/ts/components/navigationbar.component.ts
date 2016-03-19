/// <reference path="../main.ts" />
/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {Global} from '../global';
import {AuthenticationModal} from './authentication-modal.component';

import Authentication = require('../services/authentication.service');

@Component({
  selector: 'navigationbar',
  directives: [ROUTER_DIRECTIVES, AuthenticationModal],
  templateUrl: './app/php/templates/navigationbar.php'
})

export class Navigationbar
{
  private http: Http;

  constructor(http: Http)
  {
    this.http = http;
  }

  public updateUI()
  {
    $('#tutor-log-navigationbar-list-item').removeClass('active');
    $('#tutor-schedule-navigationbar-list-item').removeClass('active');
    $('#tutors-navigationbar-list-item').removeClass('active');
    $('#assignments-navigationbar-list-item').removeClass('active');
    $('#admin-navigationbar-list-item').removeClass('active');
  }

  public activateListItem(id: string)
  {
    this.updateUI();

    $('#' + id).addClass('active');
  }

  public showAuthenticationModal()
  {
    $('#sign-in-or-signUp-modal').modal('show');
  }

  public signOut()
  {
    Authentication.signOut(this.http, (result: string): void => {
      location.href = Global.BASE_URL;
    });
  }
}
