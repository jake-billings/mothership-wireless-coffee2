import {Component, OnInit} from '@angular/core';
import { Location } from '../location/location.class';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'wireless-coffee2-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: FirebaseListObservable<Location[]>;

  hideToggle: Boolean = true;

  constructor(af: AngularFire) {
    this.locations = af.database.list('/locations');
  }

  ngOnInit() {
  }

}
