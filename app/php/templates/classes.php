<div id="content-container" class="container-fluid">
  <!-- Classes Table -->
  <table id="classes-table" class="table table-bordered table-hover">
    <tr>
      <th>
        <label style="margin-top: 6px;">Classes</label>
        <div class="btn-group pull-right" role="group">
            <button id="add-class-button" type="button" class="btn btn-default btn-sm" (click)="showAddClassModal()">
              <div class="glyphicon glyphicon-plus"></div>
              </button>
        </div>
      </th>
    </tr>
  </table>
  <!-- Classes Table End -->

  <!-- Add Class Modal -->
  <div class="modal fade" id="add-class-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 id="add-class-modal-label">Add Class</h4>
        </div>
        <div class="modal-body">
          <div id="add-class-modal-content-container">
            <form id="add-class-form">
              <div class="form-group">
                <label for="class-name-label" class="control-label">Class Name:</label> <!-- text on the modal panel -->
                <input type="text" class="form-control" id="class-name-input" value="" placeholder="e.g. CSCI 540"> <!-- add class text box -->
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <div>
            <button id="cancel-add-class-modal-button" type="button" class="btn btn-default" (click)="cancelAddClass()">Cancel</button>
            <button id="add-class-modal-button" type="button" class="btn btn-primary" (click)="addClass()">Add Class</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Add Class Modal End -->

</div>
