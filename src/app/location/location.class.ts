export class PhysicalLocation {
  type: String;
  city: String;
  country: String;
  streets: String;
  state: String;
  zip: String;
};

export class Location {
  name: String;
  approved: boolean;
  password: String;
  ssid: String;
  location: PhysicalLocation;
}
