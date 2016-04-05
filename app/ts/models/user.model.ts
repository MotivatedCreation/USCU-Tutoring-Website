import {Component, View} from 'angular2/core';

export class User
{
  public userID;
  public accountType;
  public firstName: string;
  public lastName: string;
  public email: string;
  public description: string;

  public constructor(user)
  {
    this.userID = user['userID'];
    this.accountType = user['accountType'];
    this.firstName = user['firstName'];
    this.lastName = user['lastName'];
    this.email = user['email'];
    this.description = user['description'];
  }
}
