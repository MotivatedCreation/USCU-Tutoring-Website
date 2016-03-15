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
  private baseURL = "http://tutor.local";
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

  setSignUpEmail(email: string)
  {
    this.signUpEmail = email;
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
      $('#signUp-first-name-input').focus();

      return false;
    }
    else if (!this.doesContainsOnlyCharacters(this.signUpLastName))
    {
      $('#signUp-last-name-input').focus();

      return false;
    }
    else if (!this.isUSCUpstateEmail(this.signUpEmail))
    {
      console.log(this.signUpEmail);

      $('#signUp-email-input').focus();

      return false;
    }
    else if (this.signUpPassword.length <= 0)
    {
      $('#signUp-password-input').focus();

      return false;
    }

    return true;
  }

  signUp()
  {
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

      this.http.post(this.baseURL + '/app/php/api/api.php', parameters, { headers })
      .subscribe(
        (result: String) => {
          this.clearInputs();
          $('#sign-in-or-signUp-modal').modal('hide');
          console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
        }
      );
    }
  }

  signInContainsValidData()
  {
    if (!this.isUSCUpstateEmail(this.signInEmail))
    {
      $('#sign-in-email-input').focus();

      return false;
    }
    else if (this.signInPassword.length <= 0)
    {
      $('#sign-in-password-input').focus();

      return false;
    }

    return true;
  }

  signIn()
  {
    if (this.signInContainsValidData())
    {
      var service = 'Authentication';
      var action = 'signIn';

      var request = {'service': service,
                     'action': action,
                     'parameters': {
                       'email': this.signInEmail,
                       'password': this.signInPassword
                     }
                    };

      var parameters = 'request=' + encodeURIComponent(JSON.stringify(request));

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(this.baseURL + '/app/php/api/api.php', parameters, { headers })
      .subscribe(
        (result: String) => {
          this.clearInputs();
          $('#sign-in-or-signUp-modal').modal('hide');
          console.log('[authentication-modal.component] signUp()\n' + JSON.stringify(result, null, 4));
        }
      );
    }
  }

  handleError(error: Object)
  {
    console.error('[authentication-modal.component] Error: ' + JSON.stringify(error, null, 4));
  }
}
