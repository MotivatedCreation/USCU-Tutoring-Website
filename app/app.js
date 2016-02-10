var TutorMeApp = angular.module('TutorMeApp', []);

$(function() {
});

/** Variables **/

var availableTutor;
var navigationBarView;

/** Variables End **/

/** Global "Constants" **/

var kDebug = 1;
var kOpenAt = 8;
var kClosedAt = 19;

/** Global "Constants" End **/

/** Global "Enumerations" **/

var ErrorAction = Object.freeze({
  DisplayErrorAction: 0,
  IgnoreErrorAction: 1
});

/** Global "Enumerations" End **/

/*** Global Functions ***/

function debugLog(string) {
  if (kDebug)
    console.log(string);
}

function convertToTwelveHourTime(hour) {
  var time = "";

  if (hour < 12)
    time = hour + ":00 AM";
  else if (hour > 12)
    time = (hour - 12) + ":00 PM";
  else if (hour == 12)
    time = hour + ":00 PM";

  return time;
}

function updateAuthenticationState() {
  debugLog("[App] updateAuthenticationState");

  var currentUser;

  if (currentUser) {
    debugLog("[App] updateAuthenticationState - Logged in");

    $('#authenticated-user-menu-button').show();
    $('#login-or-signUp-navigationbar-button').hide();

    if (currentUser.get('accountType') == 1) {
      $('#assignments-navigationbar-list-item').show();
    }
    else {
      $('#assignments-navigationbar-list-item').hide();
    }

    if(currentUser.get('accountType') == 3)
    {
      $('#admin-navigationbar-list-item').show();
    }
    else {
      $('#admin-navigationbar-list-item').hide();
    }
  }
  else {
    $('#assignments-navigationbar-list-item').hide();
    $('#admin-navigationbar-list-item').hide();
    $('#authenticated-user-menu-button').hide();
    $('#login-or-signUp-navigationbar-button').show();
    $('#login-or-signUp-navigationbar-button').text('Login or Sign Up');
  }
}

function findAvailableTutor() {
}

function checkIn() {
}

function checkOut() {
}

function logIn(email, password) {
}

function logOut() {
}

function signUp(accountType, firstName, lastName, email, password) {
}

function requestPasswordResetForEmail(email) {
}

function handleError(error) {
}

/** Global Functions End **/
