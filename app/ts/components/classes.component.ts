import {Component, View} from 'angular2/core';

@Component({
  selector: 'classes',
})

@View({
  templateUrl: './app/php/templates/classes.php',
  styleUrls: ['./app/css/classes.css']
})

export class Classes
{
  showAddClassModal()
  {
    $("#add-class-modal").modal('show');
  }

  hideAddClassModal()
  {
    $('#add-class-modal').modal('hide');
  }

  addClass()
  {
    this.hideAddClassModal();
  }

  cancelAddClass()
  {
    this.hideAddClassModal();
  }
}
