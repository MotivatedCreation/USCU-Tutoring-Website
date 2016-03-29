<?php session_start(); ?>

<div id="content-container" class="container-fluid">
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
