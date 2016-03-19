import {Http, Headers} from 'angular2/http';

import {Global} from '../global'

export function requestWithActionAndParameters(action: string, actionParameters: {})
{
  var service = 'Authentication';

  var request = {'service': service,
                 'action': action,
                 'parameters': actionParameters};

  return 'request=' + encodeURIComponent(JSON.stringify(request));
}

export function signUp(http: Http, firstName: string, lastName: string, email: string, password: string, callback: (result: string) => any)
{
  var request = this.requestWithActionAndParameters('signUp', {
    'email': email,
    'password': password,
    'firstName': firstName,
    'lastName': lastName
  });

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.BASE_URL + '/app/php/api/api.php', request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signUp()');

      callback(result);
    }
  );
}

export function signIn(http: Http, email: string, password: string, callback: (result: string) => any)
{
  var request = this.requestWithActionAndParameters('signIn', {
    'email': email,
    'password': password
  });

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.BASE_URL + '/app/php/api/api.php', request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signIn()');

      callback(result);
    }
  );
}

export function signOut(http: Http, callback: (result: string) => any)
{
  var request = this.requestWithActionAndParameters('signOut', null);

  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  http.post(Global.BASE_URL + '/app/php/api/api.php', request, { headers })
  .subscribe(
    (result: string) => {
      console.log('[authentication.service] signOut()');

      callback(result);
    }
  );
}
