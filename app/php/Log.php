<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>TutorMe - Log</title>

  <?php include('./Global.php'); ?>

  <!-- <script type="text/javascript" src="../models/App.js"></script> -->

  <link href="../../css/Log.css" rel="stylesheet">
  <link href="../../css/Global.css" rel="stylesheet">
  <link href="../../css/footer.css" rel="stylesheet">

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
  <script src="../../bootstrap-3.3.5/js/moment.js"></script>
  <script src="../../bootstrap-3.3.5/js/bootstrap.min.js"></script>
</head>

<body ng-controller="LogController">
  <!-- Container -->
  <div class="container-fluid">
    <!-- Navigation Content Container -->
    <div class="container-fluid">
      <!-- Navigationbar -->
      <?php include('./Navigationbar.php'); ?> <!-- includes the navigation bar -->
      <!-- Navigationbar end -->
    </div>
    <!-- Navigation Content Container End -->

    <!-- Content Container -->
    <div id="content-container" class="container-fluid">
      <!-- Action Container -->
      <div class="container-fluid">
        <!-- Alert Content -->
        <div id="alert-error" class="alert alert-danger" role="alert" style="display:none">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <label id="#alert-error-label"></label>
        </div>
        <!-- Alert Content End -->

        <!-- Action Content Group -->
<!-- THE SEARCH BAR -->
        <div id="action-content-group" class="input-group">
          <input id="searchbar" type="text" class="form-control" placeholder="Search">
          <div class="input-group-btn">
            <button id="search-button" class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
          </div>
        </div>
<!-- END -->
        <!-- Action Content Group End -->
      </div>
      <!-- Action Container End -->

<!-- THE ACTUAL LOG LIST -->
      <!-- Log Template -->
      <table id="log-table" class="table table-bordered table-hover">
        <tr>
          <th>Time</th>
          <th>Student Name</th>
          <th>Class</th>
          <th>Teacher</th>
          <th>Tutor</th>
        </tr>
        <tr>
          <td>{{tutor.tutorID}}</td>
          <td>{{tutor.firstName}}</td>
          <td>{{tutor.lastName}}</td>
        </tr>
      </table>
      <!-- Log Template End -->

    </div>
    <!-- Content Container End -->
  </div>
  <!-- Container End -->

  <!-- footer -->
  <?php include('./Footer.php'); ?>
  <!-- footer end -->

</body>

</html>
