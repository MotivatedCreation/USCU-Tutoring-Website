import {Injectable} from 'angular2/core';

@Injectable()
export class Global
{
  static BASE_URL = 'http://usc.local';
  static API_URL = Global.BASE_URL + '/app/php/api/api.php';
}
