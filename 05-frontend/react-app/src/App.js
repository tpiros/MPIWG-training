import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airports: []
    };
  }
  componentDidMount() {
    fetch('http://airportapi-tpiros1.rhcloud.com/airport/distance/45?lat=51.5072&lng=-0.1275&fields=name,iata_code&sort=iata_code&order=desc')
    .then(response => response.json())
    .then(data => {
      const airports = data;
      this.setState({ airports });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Example</h2>
        </div>
        <ul>
          { this.state.airports.map(airport =>
          <li key={airport.iata_code}>{ airport.name } (IATA code: { airport.iata_code })</li> )}
        </ul>

      </div>
    );
  }
}

export default App;
