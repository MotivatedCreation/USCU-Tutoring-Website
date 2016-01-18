<!-- Tutors.php
  A list of Tutors
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>TutorMe - Tutors</title>

  <?php include('./Global.php'); ?>

  <!-- Bootstrap -->
  <link href="../../bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
  <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="../../bootstrap-3.3.5/js/bootstrap.min.js"></script>

  <link href="../../css/Tutors.css" rel="stylesheet">
  <link href="../../css/Global.css" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">

  <script type="text/javascript" src="../models/App.js"></script>
  <script type="text/javascript" src="../views/picture.js"></script>

  <!-- Templates -->
  <!-- Tutor Template -->
  <script type="text/template" id="tutor-template">
      <!-- Tutor Content Container -->
      <div id="tutor-content-container" class="container-fluid">
        <div id="media-content-container" class="media">
          <div class="media-left">
              <img id="tutorPic" class="media-object" src="<%= url %>">
          </div>
          <div id="media-body" class="media-body">
            <h4 class="media-heading"></h4>
            <label id="full-name-label"><%= firstName %> <%= lastName %></label>
            <br />
            <textarea id="description-well" class="well well-sm" readonly="true"><%= description %></textarea>
          </div>
        </div>
      </div>
      <!-- Tutor Content Container End -->
  </script>
  <!-- Tutor Template End -->

  <script type="text/template" id="error-alert-template">
    <div id="error-alert" class="alert alert-danger">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      <label id="error-alert-label" class="text-center"></label>
   </div>
  </script>

  <script type="text/template" id="success-alert-template">
    <div id="success-alert" class="alert alert-success">
      <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
      <label id="success-alert-label"></label>
   </div>
  </script>
  <!-- Templates End -->

  <script type="text/javascript" src="../views/Tutors.js"></script>
</head>

<body>
  <!-- Container -->
  <div class="container-fluid">
    <?php include('../php/LoginOrSignUp.php'); ?>
    <!-- Navigation Content Container -->
    <div class="container-fluid">
      <!-- Navigationbar -->
      <?php include('./Navigationbar.php'); ?>
      <!-- Navigationbar end -->
    </div>
    <!-- Navigation Content Container -->

    <!-- Content Container -->
    <div id="content-container" class="container-fluid">

    </div>
    <!-- Content Container End -->
  </div>
  <!-- Container End -->

  <!-- footer -->
  <?php include('./Footer.php'); ?>
  <!-- footer end -->
</body>

</html>
