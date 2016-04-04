import {Component, View, Input} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';

import {Global} from '../global';

import Account = require('../services/account.service');

@Component({
  selector: 'profile',
})

@View({
  templateUrl: './app/php/templates/profile.php',
  styleUrls: ['./app/css/profile.css']
})

export class Profile
{
  private http: Http;

  public description: string;

  constructor(http: Http)
  {
    this.http = http;
  }

  ngOnInit()
  {
    $('#save-description-button').hide();
  }

  setDescription(description: string)
  {
    this.description = description;
  }

  public editDescription()
  {
    $('#edit-description-button').hide();
    $('#save-description-button').show();
    $('#profile-description-well').prop('readonly', false);
    $('#profile-description-well').css('background-color', 'white');
    $('#profile-description-well').focus();
  }

  public saveDescription()
  {
    $('#edit-description-button').show();
    $('#save-description-button').hide();
    $('#profile-description-well').prop('readonly', true);
    $('#profile-description-well').css('background-color', 'rgb(245, 245, 245)');

    if (this.description.length > 0)
    {
      Account.saveDescription(this.http, this.description, (result: string): void => {
        console.log('[profile.component] saveDescription()\n' + JSON.stringify(result, null, 4));
      });
    }
  }
}
