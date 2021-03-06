<!-- Container -->
<div class="container-fluid">
  <div id="content-container" class="container-fluid">
    <!-- AdminMenu.php
    The Admin Menu side menu
  -->

  <div id="admin-menu-content-container" class="list-group pull-left">
    <button id="admin-menu-update-button" type="button" class="list-group-item">Update User Account</button>
    <button id="admin-menu-classes-button" type="button" class="list-group-item">Edit Classes</button>
  </div>

  <script type="text/javascript">
  $(function() {
    $('#admin-menu-update-button').click(function() {
      window.location.href = "./AdminUpdate.php";
    });
  });
  </script>

  <script type="text/javascript">
  $(function() {
    $('#admin-menu-classes-button').click(function() {
      window.location.href = "./AdminClasses.php";
    });
  });
  </script>

  </div>
</div>
