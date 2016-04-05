import {Http, Headers} from 'angular2/http';

import {Global} from '../global';
import {User} from '../models/user.model';

import Service = require('../services/service');

export class Authentication
{
  static SERVICE = "Authentication";
  static USER: User;
}

export function signUp(http: Http, firstName: string, lastName: string, email: string, password: string, callback: (result: string) => any)
{
  var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signUp', {
    'email': email,
    'password': password,
    'firstName': firstName,
    'lastName': lastName
  });

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.API_URL, request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signUp()');

      callback(result);
    }
  );
}

export function signIn(http: Http, email: string, password: string, callback: (result: string) => any)
{
  var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signIn', {
    'email': email,
    'password': password
  });

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.API_URL, request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signIn()');

      callback(result);
    }
  );
}

export function signOut(http: Http, callback: (result: string) => any)
{
  var request = Service.requestServiceWithActionAndParameters(Authentication.SERVICE, 'signOut', null);

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.API_URL, request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signOut()');

      callback(result);
    }
  );
}
