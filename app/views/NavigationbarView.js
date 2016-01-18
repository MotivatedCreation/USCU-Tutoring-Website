var NavigationbarView = {

  el: "#navigationbar",

  events: {
    'click #login-or-signUp-navigationbar-button' : 'showAuthenticationModal',
    'click #logout-navigationbar-link' : 'logOut',
    'click #check-in-navigationbar-link' : 'checkIn',
    'click #check-out-navigationbar-link' : 'checkOut'
  },

  initialize: function() {
    updateAuthenticationState();

    $('#check-out-navigationbar-link').hide();
  },

  handleError: function(error) {
    debugLog("[NavigationbarView] handleError");

    switch(error.code) {
      default: {
      }
      break;
    }
  },

  showAuthenticationModal: function() {
    debugLog('[NavigationbarView] showAuthenticationModal');

    $('#login-or-signUp-modal').modal('show');
  },

  logOut: function() {
    debugLog('[NavigationbarView] logOut');

    logOut();
  },

  toggleOnCheckInButton: function() {
    debugLog('[NavigationbarView] toggleOnCheckInButton');

    $('#check-in-navigationbar-link').show();
    $('#check-out-navigationbar-link').hide();
  },

  toggleOffCheckInButton: function() {
    debugLog('[NavigationbarView] toggleOffCheckInButton');

    $('#check-in-navigationbar-link').hide();
    $('#check-out-navigationbar-link').show();
  },

  checkIn: function() {
    debugLog('[NavigationbarView] checkIn');

    var self = this;

    checkIn().then(function(user) {
      debugLog("[NavigationbarView] checkIn success!");

      // Get the current cached user
      var currentUser = Parse.User.current();

      // Only toggle the check in button if the user is
      // of type tutor.
      if (currentUser.get('accountType') == 1)
        toggleOffCheckInButton();

    }, function(error) {
      if (error)
        self.handleError();
    });
  },

  checkOut: function() {
    debugLog('[NavigationbarView] checkOut');

    var self = this;

    checkOut().then(function(user) {
      debugLog("[NavigationbarView] checkOut success!");

      // Get the current cached user
      var currentUser = Parse.User.current();

      // Only toggle the check in button if the user is
      // of type tutor.
      if (currentUser.get('accountType') == 1)
        toggleOnCheckInButton();

    }, function(error) {
      if (error)
        self.handleError();
    });
  },

  updateAvailableTutorLabel: function() {
    debugLog('[NavigationbarView] updateAvailableTutorLabel');

    if (availableTutor
        && availableTutor.get('accountType') == 1
        && availableTutor.get('isCheckedIn')) {

        $('#available-tutor-label').removeClass('label-danger');
        $('#available-tutor-label').addClass('label-success');
        $('#available-tutor-label').text('Available Tutor: ' + availableTutor.get('firstName') + " " + availableTutor.get('lastName'));
    }
    else {
      $('#available-tutor-label').removeClass('label-success');
      $('#available-tutor-label').addClass('label-danger');
      $('#available-tutor-label').text('Available Tutor: N/A');
    }
  }
}

//Hides the checkin button if the user is not a tutor
function hideCheckIn() {
  var currentUser = Parse.User.current();
    if(currentUser.get('accountType') != 1) {
      $('#check-in-navigationbar-link').hide();
    }
}
