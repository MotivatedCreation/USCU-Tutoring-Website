<!-- Navigationbar.php
The Navigation Bar at the top of each page.
-->
<nav id="navigationbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
  <!-- The Navigation Bar -->
  <div class="container-fluid">
    <!-- TutorMe label/button : Takes you to the index-->
    <div class="navbar-header pull-left">
      <a id="navigationbar-brand" class="navbar-brand">
        <span style="margin-right:10px;" class="glyphicon glyphicon-education" aria-hidden="true"></span>
        TutorMe
      </a>
    </div>

    <div class="navbar-header pull-right">
      <ul class="nav navbar-nav pull-left">
        <li>
          <label id="available-tutor-label" class="label label-danger">Available Tutor: N/A</label>
        </li>
      </ul>
      <button style="margin-left: 30px;" type="button" class="navbar-toggle btn btn-default" data-toggle="collapse" data-target="#navigationbar-collapse" aria-expanded="false">
        <span class="glyphicon glyphicon-th-large"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navigationbar-collapse">
      <ul class="nav navbar-nav pull-left">
        <li id="log-navigationbar-list-item">
          <a id="log-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-align-left"></div>
            Log
          </a>
        </li>
        <li id="schedule-navigationbar-list-item">
          <a id="schedule-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-calendar"></div>
            Schedule
          </a>
        </li>
        <li id="tutors-navigationbar-list-item">
          <a id="tutors-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-user"></div>
            Tutors
          </a>
        </li>
        <li id="assignments-navigationbar-list-item">
          <a id="assignments-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-file"></div>
            Assignments
          </a>
        </li>
        <li id="admin-navigationbar-list-item">
          <a id="admin-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-lock"></div>
            Admin
          </a>
        </li>
      </ul>

      <ul class="nav navbar-nav pull-right">
        <li class="dropdown">
          <a id="username-navigationbar-dropdown" class="dropdown-toggle" type="button" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
          <ul class="dropdown-menu">
            <li>
              <a id="profile-navigationbar-link">
                <div style="margin-right:10px;" class="glyphicon glyphicon-info-sign"></div>
                Account
              </a>
            </li>
            <li>
              <a id="check-in-navigationbar-link" href="#">
                <div style="margin-right:10px;" class="glyphicon glyphicon-check"></div>
                Check in
              </a>
            </li>
            <li>
              <a id="check-out-navigationbar-link" href="#">
                <div style="margin-right:10px;" class="glyphicon glyphicon-unchecked"></div>
                Check out
              </a>
            </li>
            <li>
              <a id="logout-navigationbar-link" href="http://localhost/TutorMe/index.php">
                <div style="margin-right:10px;" class="glyphicon glyphicon-log-out"></div>
                Logout
              </a>
            </li>
          </ul>
        </li>
        <li>
          <button id="login-or-signUp-navigationbar-button" type="button" class="btn btn-primary">Login or Sign Up</button>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div>
</nav>

<!-- Navbar Javascripts -->
<?php if (kCurrentFile == 'index.php'): ?>
  <script type="text/javascript" src="./app/views/NavigationbarView.js"></script>
<?php else: ?>
  <script type="text/javascript" src="../views/NavigationbarView.js"></script>
<?php endif; ?>

<script type="text/javascript">
$(function()
{
  var currentPage = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

  if (currentPage == 'Log.php') {
    $('#log-navigationbar-list-item').addClass('active');
  } else if (currentPage == 'Schedule.php') {
    $('#schedule-navigationbar-list-item').addClass('active');
  } else if (currentPage == 'Tutors.php') {
    $('#tutors-navigationbar-list-item').addClass('active');
  } else if (currentPage == 'Assignments.php') {
    $('#assignments-navigationbar-list-item').addClass('active');
  } else if (currentPage == 'Admin.php') {
    $('#admin-navigationbar-list-item').addClass('active');
  }

  if (currentPage == '' || currentPage == 'index.php')
  {
    $('#navigationbar-brand').attr('href', 'index.php');
    $('#log-navigationbar-link').attr('href', './app/php/Log.php');
    $('#schedule-navigationbar-link').attr('href', './app/php/Schedule.php');
    $('#tutors-navigationbar-link').attr('href', './app/php/Tutors.php');
    $('#assignments-navigationbar-link').attr('href', './app/php/Assignments.php');
    $('#admin-navigationbar-link').attr('href', './app/php/Admin.php');

    $('#profile-navigationbar-link').attr('href', './app/php/Profile.php');
  }
  else {
    $('#navigationbar-brand').attr('href', '../../index.php');
    $('#log-navigationbar-link').attr('href', './Log.php');
    $('#schedule-navigationbar-link').attr('href', './Schedule.php');
    $('#tutors-navigationbar-link').attr('href', './Tutors.php');
    $('#assignments-navigationbar-link').attr('href', './Assignments.php');
    $('#admin-navigationbar-link').attr('href', './Admin.php');

    $('#profile-navigationbar-link').attr('href', './Profile.php');
  }
});
</script>