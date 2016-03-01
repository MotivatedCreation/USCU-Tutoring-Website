/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/bootstrap.d.ts" />

import {Component, View, ElementRef} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

@Component({
  viewProviders: [HTTP_PROVIDERS],
  selector: 'authentication-modal'
})

@View({
  templateUrl: './app/html/templates/authentication-modal.html'
})

export class AuthenticationModal
{
  private http: Http;
  private element: ElementRef;

  public signUpEmail = '';
  public signUpPassword = '';
  public signUpFirstName = '';
  public signUpLastName = '';

  public signInEmail = '';
  public signInPassword = '';

  constructor(element: ElementRef, http: Http)
  {
    this.element = element;
    this.http = http;
  }

  setSignUpEmail(email: HTMLElement)
  {
    this.signUpEmail = (<HTMLInputElement>email).value;
  }

  setSignUpPassword(password: string)
  {
    this.signUpPassword = password;
  }

  setSignUpFirstName(firstName: string)
  {
    this.signUpFirstName = firstName;
  }

  setSignUpLastName(lastName: string)
  {
    this.signUpLastName = lastName;
  }

  setSignInEmail(email: string)
  {
    this.signInEmail = email;
  }

  setSignInPassword(password: string)
  {
    this.signInPassword = password;
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
    if (!this.doesContainsOnlyCharacters(this.signUpFirstName))
    {
      $('#sign-in-or-signUp-modal').prepend($('#invalid-input-alert').html());
      $('#invalid-input-alert-label').text("Please enter a First Name.");
      $('#signUp-first-name-input').focus();

      return false;
    }
    else if (!this.doesContainsOnlyCharacters(this.signUpLastName))
    {
      $(this.element).prepend($("#invalid-input-alert-template").html());
      $('#invalid-input-alert-label').text("Please enter a Last Name.");
      $('#signUp-last-name-input').focus();

      return false;
    }
    else if (!this.isUSCUpstateEmail(this.signUpEmail))
    {
      $(this.element).prepend($("#invalid-input-alert-template").html());
      $('#invalid-input-alert-label').text("Please enter a valid Email.");
      $('#signUp-email-input').focus();

      return false;
    }
    else if (this.signUpPassword.length <= 0)
    {
      $(this.element).prepend($("#invalid-input-alert-template").html());
      $('#invalid-input-alert-label').text("Please enter a Password.");
      $('#signUp-password-input').focus();

      return false;
    }

    return true;
  }

  signUp()
  {
    $("#invalid-input-alert").remove();

    if (this.signUpContainsValidData())
    {
      var service = 'Authentication';
      var action = 'signUp';

      var request = {'service': service,
                     'action': action,
                     'parameters': {
                       'email': this.signUpEmail,
                       'password': this.signUpPassword,
                       'firstName': this.signUpFirstName,
                       'lastName': this.signUpLastName
                     }
                    };

      var parameters = 'request=' + encodeURIComponent(JSON.stringify(request));

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      $('#sign-in-or-signUp-modal').modal('hide');
      /*this.http.post('http://usc.local/app/php/api/api.php', parameters, { headers })
      .subscribe(
        (result: String) => {
          $('#login-or-signUp-modal').modal('hide');
          console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
        }
      );*/
    }
  }

  signIn()
  {

  }

  handleError(error: Object)
  {
    console.error('[authentication-modal.component] Error: ' + JSON.stringify(error, null, 4));
  }
}
