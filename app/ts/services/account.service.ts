import {Http, Headers} from 'angular2/http';

import {Global} from '../global'

import Service = require('../services/service');

export class Account
{
  static SERVICE = "Account";
}

export function saveDescription(http: Http, description: string, callback: (result: string) => any)
{
  var request = Service.requestServiceWithActionAndParameters(Account.SERVICE, 'saveDescription', {
    'description': description
  });

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.API_URL, request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[account.service] saveDescription()');

      callback(result);
    }
  );
}
