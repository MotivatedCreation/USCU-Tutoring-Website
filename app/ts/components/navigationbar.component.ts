/// <reference path="../main.ts" />
/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

import {Global} from '../global'
import {AuthenticationModal} from './authentication-modal.component';

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

  signOut()
  {
    var service = 'Authentication';
    var action = 'signOut';

    var request = {'service': service,
                   'action': action};

    var parameters = 'request=' + encodeURIComponent(JSON.stringify(request));

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(Global.BASE_URL + '/app/php/api/api.php', parameters, { headers })
    .subscribe(
      (result: String) => {
        location.reload();
        console.log('[authentication-modal.component] signOut()\n' + JSON.stringify(result, null, 4));
      }
    );
  }
}
