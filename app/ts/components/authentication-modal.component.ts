/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  viewProviders: [HTTP_PROVIDERS],
  selector: 'authentication-modal'
})

@View({
  templateUrl: './app/html/templates/authentication-modal.html'
})

export class AuthenticationModal
{
  constructor(private http: Http)
  {
    this.http = http;
  }

  clearInputs()
  {
    $('#sign-in-email-input').val("");
    $('#sign-in-password-input').val("");

    $('#signUp-first-name-input').val("");
    $('#signUp-last-name-input').val("");
    $('#signUp-email-input').val("");
    $('#signUp-password-input').val("");

    $("#invalid-input-alert").remove();
    $("#success-alert").remove();
  }

  signUp()
  {

  }

  signIn()
  {

  }
}
