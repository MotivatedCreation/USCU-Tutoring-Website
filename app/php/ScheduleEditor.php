<!-- ScheduleEditor.php
  Edit Schedule idk how it works
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>TutorMe - Appointments</title>

  <?php include('./global.php'); ?>

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

  <link href="../../css/ScheduleEditor.css" rel="stylesheet">
  <link href="../../css/Global.css" rel="stylesheet">

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.5.0.min.js"></script>
  <script type="text/javascript" src="../models/App.js"></script>
  <script type="text/javascript" src="../views/ActivityIndicatorView.js"></script>
  <script type="text/javascript" src="../views/ScheduleEditorView.js"></script>
</head>

<body>
  <!-- Container -->
  <div class="container-fluid">
    <?php include('../php/LoginOrSignUp.php'); ?> <!-- Login or signup pop up NO POINT HIDDEN PAGE -->
    <!-- Navigation Content Container -->
    <div class="container-fluid">
      <!-- Navigationbar -->
      <?php include('./Navigationbar.php'); ?> <!-- Navbar -->
      <!-- Navigationbar end -->
    </div>
    <!-- Navigation Content Container -->

    <!-- Content Container -->
    <div id="content-container" class="container-fluid">

      <?php include('./AccountMenu.php'); ?>  <!-- Include account menu side menu -->

      <!-- Schedule Table -->
      <table id="schedule-table" class="table table-bordered table-hover">
        <tr>
          <th>Time</th>
          <th class="day" style="text-align:center;">Sunday</th>
          <th class="day" style="text-align:center;">Monday</th>
          <th class="day" style="text-align:center;">Tuesday</th>
          <th class="day" style="text-align:center;">Wednesday</th>
          <th class="day" style="text-align:center;">Thursday</th>
          <th class="day" style="text-align:center;">Friday</th>
          <th class="day" style="text-align:center;">Saturday</th>
        </tr>
      </table>
      <!-- Schedule Table End -->

      <!-- Schedule Entry Template -->
      <script type="text/template" id="schedule-entry-template">
          <td><label class="time-label" value=""></label></td>
          <td style="text-align:center;"><input id="sunday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="monday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="tuesday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="wednesday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="thursday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="friday-checkbox" class="time-checkbox" type="checkbox"></input></td>
          <td style="text-align:center;"><input id="saturday-checkbox" class="time-checkbox" type="checkbox"></input></td>
      </script>
      <!-- Schedule Entry Template End -->

      <button id="save-schedule-button" type="button" class="btn btn-success pull-right">Save</button>

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

    </div>
    <!-- Content Container End -->
  </div>
  <!-- Container End -->
</body>

</html>
