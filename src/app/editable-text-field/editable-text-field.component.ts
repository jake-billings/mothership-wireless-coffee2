import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wireless-coffee2-editable-text-field',
  templateUrl: './editable-text-field.component.html',
  styleUrls: ['./editable-text-field.component.css']
})
export class EditableTextFieldComponent implements OnInit {
  @Input() editing: Boolean;
  @Input() data: String;


  constructor() { }

  ngOnInit() {
  }

}
