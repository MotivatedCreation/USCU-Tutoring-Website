<authentication-modal></authentication-modal>

<?php session_start(); ?>

<nav id="navigationbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
  <!-- The Navigation Bar -->
  <div class="container-fluid">
    <!-- TutorMe label/button : Takes you to the index-->
    <div class="navbar-header pull-left">
      <a [routerLink]="['Home']" id="navigationbar-brand" class="navbar-brand" (click)="updateUI()">
        <span style="margin-right:10px;" class="glyphicon glyphicon-education" aria-hidden="true"></span>
        TutorMe
      </a>
    </div>

    <ul class="nav navbar-nav pull-left">
      <li id="tutor-log-navigationbar-list-item" (click)="activateListItem('tutor-log-navigationbar-list-item')">
        <a [routerLink]="['TutorLog']" id="tutor-log-navigationbar-link">
          <div style="margin-right:10px;" class="glyphicon glyphicon-align-left"></div>
          Log
        </a>
      </li>
      <li id="tutor-schedule-navigationbar-list-item" (click)="activateListItem('tutor-schedule-navigationbar-list-item')">
        <a [routerLink]="['TutorSchedule']" id="tutor-schedule-navigationbar-link">
          <div style="margin-right:10px;" class="glyphicon glyphicon-calendar"></div>
          Schedule
        </a>
      </li>
      <li id="tutors-navigationbar-list-item" (click)="activateListItem('tutors-navigationbar-list-item')">
        <a [routerLink]="['Tutors']" id="tutors-navigationbar-link">
          <div style="margin-right:10px;" class="glyphicon glyphicon-user"></div>
          Tutors
        </a>
      </li>
      <?php if (isset($_SESSION['user']) && $_SESSION['user']['accountType'] == 1): ?>
        <li id="assignments-navigationbar-list-item" (click)="activateListItem('assignments-navigationbar-list-item')">
          <a [routerLink]="['Assignments']" id="assignments-navigationbar-link">
            <div style="margin-right:10px;" class="glyphicon glyphicon-file"></div>
            Assignments
          </a>
        </li>
      <?php elseif (isset($_SESSION['user']) && $_SESSION['user']['accountType'] == 3): ?>
        <li id="admin-navigationbar-list-item" (click)="activateListItem('admin-navigationbar-list-item')">
          <a [routerLink]="['Admin']" id="admin-navigationbar-link">
            <div style="margin-right: 10px;" class="glyphicon glyphicon-lock"></div>
            Admin
          </a>
        </li>
      <?php endif ?>
    </ul>

    <div class="nav navbar-nav pull-right">
      <?php if (isset($_SESSION['user'])): ?>
        <div class="dropdown pull-right">
          <button style="margin-top: 8px;" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="glyphicon glyphicon-th-large"></span>
          </button>
          <a id="username-navigationbar-dropdown" class="dropdown-toggle" type="button" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
          <ul class="dropdown-menu">
            <li>
              <a [routerLink]="['Account']" id="profile-navigationbar-link" href="#">
                <div style="margin-right:10px;" class="glyphicon glyphicon-info-sign"></div>
                Account
              </a>
            </li>
            <li>
              <a [routerLink]="['Home']" id="logout-navigationbar-link" href="#" (click)="signOut()">
                <div style="margin-right:10px;" class="glyphicon glyphicon-log-out"></div>
                Logout
              </a>
            </li>
          </ul>
        </div>
      <?php else: ?>
        <button id="login-or-signUp-navigationbar-button" type="button" class="btn btn-primary" (click)="showAuthenticationModal()">Login or Sign Up</button>
      <?php endif ?>
    </div>
  </div>
</nav>

<div id="available-tutor-alert" class="alert alert-danger" role="alert"><strong>Available Tutor:</strong> N/A</div>

<router-outlet></router-outlet>
