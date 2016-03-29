<?php session_start(); ?>

<div id="account-menu-content-container" class="list-group pull-left">
  <button [routerLink]="['Profile']" id="account-menu-profile-button" type="button" class="list-group-item active" (click)="activateMenuItem('account-menu-profile-button')">Profile</button>
  <button [routerLink]="['Appointments']" id="account-menu-appointments-button" type="button" class="list-group-item" (click)="activateMenuItem('account-menu-appointments-button')">Appointments</button>
  <?php if ($_SESSION['user']['accountType'] == 2): ?>
    <button [routerLink]="['Assignments']" id="account-menu-assignments-button" type="button" class="list-group-item" (click)="activateMenuItem('account-menu-assignments-button')">Assignments</button>
  <?php endif; ?>
  <button [routerLink]="['Classes']" id="account-menu-classes-button" type="button" class="list-group-item" (click)="activateMenuItem('account-menu-classes-button')">Classes</button>
  <?php if ($_SESSION['user']['accountType'] == 1): ?>
    <button [routerLink]="['Schedule']" id="account-menu-schedule-button" type="button" class="list-group-item" (click)="activateMenuItem('account-menu-schedule-button')">Schedule</button>
    <button [routerLink]="['TimeLog']" id="account-menu-timelog-button" type="button" class="list-group-item" (click)="activateMenuItem('account-menu-timelog-button')">Time Log</button>
  <?php endif; ?>
</div>

<router-outlet></router-outlet>
