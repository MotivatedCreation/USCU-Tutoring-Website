<?php session_start(); ?>

<div id="content-container" class="container-fluid">

  <div id="profile-menu-content-container" class="list-group pull-left">
    <button id="profile-menu-profile-button" type="button" class="list-group-item active">Profile</button>
    <button id="profile-menu-appointments-button" type="button" class="list-group-item">Appointments</button>
    <?php if ($_SESSION['user']['accountType'] == 2): ?>
      <button id="profile-menu-teacherassignments-button" type="button" class="list-group-item">Assignments</button>
    <?php endif; ?>
    <button id="profile-menu-classes-button" type="button" class="list-group-item">Classes</button>
    <?php if ($_SESSION['user']['accountType'] == 1): ?>
      <button id="profile-menu-schedule-button" type="button" class="list-group-item">Schedule</button>
      <button id="profile-menu-timelog-button" type="button" class="list-group-item">Time Log</button>
    <?php endif; ?>
  </div>

  <div id="content-container" class="container-fluid">
    <div id="profile-media-content-container" class="media">
      <div class="media-left">
          <img id="profilePic" class="media-object" src="../../images/basic.jpg" >
      </div>
      <div id="profile-body" class="media-body">
        <h4 class="media-heading"></h4>
        <label id="full-name-label"><?php echo $_SESSION['user']['firstName'].' '.$_SESSION['user']['lastName']; ?></label>
        <br />
        <label id="account-type-label">Account Type</label>
        <br />
        <button id="edit-description-button" class="btn btn-primary btn-sm">Edit</button>
        <button id="save-description-button" class="btn btn-success btn-sm">Save</button>
        <br />
        <textarea id="profile-description-well" class="well well-sm" readonly="true">Add a description...</textarea>
      </div>
    </div>
  </div>

</div>
