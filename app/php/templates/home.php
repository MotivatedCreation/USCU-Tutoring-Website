<?php session_start(); ?>

<div id="content-container" class="container-fluid">

<?php if (isset($_SESSION['user']) && $_SESSION['user']['accountType'] >= 1): ?>
  <div id="post-editor" class="panel panel-default">
    <div class="panel-body">
      <textarea style="width: 100%;" class="well" placeholder="What's going on in the tutoring lab today?"></textarea>
      <div class="pull-right">
        <div class="btn-group" role="group">
          <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Normal
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Normal</a></li>
            <li><a href="#">Good News</a></li>
            <li><a href="#">Warning</a></li>
            <li><a href="#">Important</a></li>
            <li><a href="#">Note</a></li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary">Post</button>
      </div>
    </div>
  </div>
<?php endif; ?>

  <div id="post" class="panel panel-default">
    <div class="panel-body">
      <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object">
          </a>
        </div>
        <div class="media-body">
          <label id="post-tutor-name-label">Tutor Name</label><label id="post-date-label">, Date</label>
          <br />
          Post Content
        </div>
      </div>
    </div>
  </div>

  <div id="post" class="panel panel-success">
    <div class="panel-heading">
      <strong>Good News!</strong>
    </div>
    <div class="panel-body">
      <label id="post-date-label">Date</label>
      <br />
      News
    </div>
  </div>

  <div id="post" class="panel panel-warning">
    <div class="panel-heading">
      <strong>Warning!</strong>
    </div>
    <div class="panel-body">
      <label id="post-date-label">Date</label>
      <br />
      Warning
    </div>
  </div>

  <div id="post" class="panel panel-danger">
    <div class="panel-heading">
      <strong>Important!</strong>
    </div>
    <div class="panel-body">
      <label id="post-date-label">Date</label>
      <br />
      Important Information
    </div>
  </div>

  <div id="post" class="panel panel-primary">
    <div class="panel-heading">
      <strong>Note</strong>
    </div>
    <div class="panel-body">
      <label id="post-date-label">Date</label>
      <br />
      Note
    </div>
  </div>

</div>
