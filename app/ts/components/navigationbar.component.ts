/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'navigationbar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/html/templates/navigationbar.html'
})

export class Navigationbar
{
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
    $('#login-or-signUp-modal').modal('show');
  }
}
