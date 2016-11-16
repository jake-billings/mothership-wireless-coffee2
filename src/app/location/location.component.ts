import {Component, Input, OnInit} from '@angular/core';
import {Location} from './location.class';

@Component({
  selector: 'wireless-coffee2-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() location: Location;
  @Input() showToggle: Boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
