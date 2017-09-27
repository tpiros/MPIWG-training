import { HttpClient } from 'aurelia-fetch-client';

let client = new HttpClient();
export class App {
  airports = [];
  constructor() {

    client.fetch('http://airportapi-tpiros1.rhcloud.com/airport/distance/45?lat=51.5072&lng=-0.1275&fields=name,iata_code&sort=iata_code&order=desc')
    .then(response => response.json())
    .then(data => this.airports = data);

    this.message = 'Aurelia example';
  }
}
