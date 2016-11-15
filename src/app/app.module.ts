import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app/app.component';
import { LocationComponent } from './location/location.component';
import { LocationsComponent } from './locations/locations.component';

import { AngularFireModule } from 'angularfire2';
import { EditableTextFieldComponent } from './editable-text-field/editable-text-field.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDg6jwEhNyVHC-E_A-ecD0MLf8YNGnWnfw',
  authDomain: 'mothership-wireless-coffee.firebaseio.com',
  databaseURL: 'mothership-wireless-coffee.firebaseio.com',
  storageBucket: 'mothership-wireless-coffee.firebaseio.com'
};


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    LocationsComponent,
    EditableTextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
