/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View, ElementRef} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

import {Global} from '../global';

import Authentication = require('../services/authentication.service');

@Component({
  viewProviders: [HTTP_PROVIDERS],
  selector: 'authentication-modal'
})

@View({
  templateUrl: './app/php/templates/authentication-modal.php'
})

export class AuthenticationModal
{
  private http: Http;

  public firstName = '';
  public lastName = '';
  public email = '';
  public password = '';

  constructor(element: ElementRef, http: Http)
  {
    this.http = http;
  }

  setEmail(email: string)
  {
    this.email = email;
  }

  setPassword(password: string)
  {
    this.password = password;
  }

  setFirstName(firstName: string)
  {
    this.firstName = firstName;
  }

  setLastName(lastName: string)
  {
    this.lastName = lastName;
  }

  clearInputs()
  {
    $('#sign-in-email-input').val("");
    $('#sign-in-password-input').val("");

    $('#signUp-first-name-input').val("");
    $('#signUp-last-name-input').val("");
    $('#signUp-email-input').val("");
    $('#signUp-password-input').val("");
  }

  doesContainsOnlyCharacters(aString: string)
  {
    var pattern = new RegExp('^[(aA-zZ)(\')]+$');

    if (pattern.test(aString))
      return true;
    else
      return false;
  }

  isUSCUpstateEmail(email: string)
  {
    var pattern = new RegExp('^[(aA-zZ)(0-9)(\.)]+@email\.uscupstate\.edu$');

    if (pattern.test(email))
      return true;
    else
      return false;
  }

  signUpContainsValidData()
  {
    if (!this.doesContainsOnlyCharacters(this.firstName))
    {
      $('#signUp-first-name-input').focus();

      return false;
    }
    else if (!this.doesContainsOnlyCharacters(this.lastName))
    {
      $('#signUp-last-name-input').focus();

      return false;
    }
    else if (!this.isUSCUpstateEmail(this.email))
    {
      $('#signUp-email-input').focus();

      return false;
    }
    else if (this.password.length <= 0)
    {
      $('#signUp-password-input').focus();

      return false;
    }

    return true;
  }

  signInContainsValidData()
  {
    if (!this.isUSCUpstateEmail(this.email))
    {
      $('#sign-in-email-input').focus();

      return false;
    }
    else if (this.password.length <= 0)
    {
      $('#sign-in-password-input').focus();

      return false;
    }

    return true;
  }

  signUp()
  {
    if (this.signUpContainsValidData())
    {
      Authentication.signUp(this.http, this.firstName, this.lastName, this.email, this.password, (result: string): void => {
        console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));

        this.setEmail(this.email);
        this.setPassword(this.password);
        this.signIn(false);
      });
    }
  }

  signIn(shouldValidate: boolean = true)
  {
    if (!shouldValidate || this.signInContainsValidData())
    {
      Authentication.signIn(this.http, this.email, this.password, (result: string): void => {
        console.log('[authentication-modal.component] signIn()\n' + JSON.stringify(result, null, 4));

        this.clearInputs();
        location.href = Global.BASE_URL;
      });
    }
  }
}
