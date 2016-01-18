<!-- Appointments.php
Page used for making appointments
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>TutorMe - Appointments</title>

  <?php include('./Global.php'); ?>

  <!-- Bootstrap -->
  <link href="../../bootstrap-3.3.5/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../bootstrap-3.3.5/css/bootstrap-datetimepicker.css" rel="stylesheet">

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
  <script src="../../bootstrap-3.3.5/js/bootstrap-datetimepicker.js"></script>

  <link href="../../css/Profile.css" rel="stylesheet">
  <link href="../../css/Appointments.css" rel="stylesheet">
  <link href="../../css/AddAppointment.css" rel="stylesheet">
  <link href="../../css/Global.css" rel="stylesheet">

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
  <script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.5.0.min.js"></script>
  <script type="text/javascript" src="../models/App.js"></script>
  <script type="text/javascript" src="../views/ProfileView.js"></script>
  <script type="text/javascript" src="../views/ActivityIndicatorView.js"></script>
  <script type="text/javascript" src="../views/UserLevel.js"></script>
</head>

<body onload="noTeacher()">
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
      <?php include('./AddAppointment.php'); ?>
      <?php include('./AccountMenu.php'); ?>

      <table id="appointment-table-header" class="table table-bordered">
        <tr>
          <th>
            <label style="margin: 6px; font-size: 16px;">Appointments</label>
            <div class="btn-group pull-right" role="group">
              <button id="add-appointment-button" type="button" class="btn btn-default btn-sm">
                <div class="glyphicon glyphicon-plus"></div>
              </button>
            </div>
          </th>
        </tr>
      </table>

      <!-- Appointment Table -->
      <table id="appointment-table" class="table table-bordered table-hover">
        <tr>
          <th>
            <label style="margin-top: 6px;">Student</label>
          </th>
          <th>
            <label style="margin-top: 6px;">Tutor</label>
          </th>
          <th>
            <label style="margin-top: 6px;">Date</label>
          </th>
          <th>
            <label style="margin-top: 6px;">Actions</label>
          </th>
        </tr>
      </table>
      <!-- Appointment Table End -->

      <!-- Appointment Entry Template -->
      <script type="text/template" id="appointment-entry-template">
        <td id="<%= objectId %>">
          <label id="studentName<%= objectId %>" style="font-weight: normal;"><%= studentName %></label>
        </td>
        <td id="<%= objectId %>">
          <label id="tutorName<%= objectId %>" style="font-weight: normal;"><%= tutorName %></label>
        </td>
        <td id="<%= objectId %>">
          <label id="dateRange<%= objectId %>" style="font-weight: normal;"><%= dateRange %></label>
        </td>
        <td>
          <button id="reschedule-appointment-button" type="button" class="btn btn-default btn-sm" value="<%= objectId %>">
            <div class="glyphicon glyphicon-repeat" style="padding-right: 5px;"></div>
            Reschedule
          </button>
          <button id="cancel-appointment-button" type="button" class="btn btn-default btn-sm" value="<%= objectId %>">
            <div class="glyphicon glyphicon-remove" style="padding-right: 5px;"></div>
            Cancel
          </button>
        </td>
      </script>
      <!-- Appointment Entry Template End -->

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
  <script type="text/javascript" src="../views/AppointmentsView.js"></script>
</body>
</html>
