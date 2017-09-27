new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    airports: [],
    errors: []
  },

  created() {
    axios.get('http://airportapi-tpiros1.rhcloud.com/airport/distance/45?lat=51.5072&lng=-0.1275&fields=name,iata_code&sort=iata_code&order=desc')
    .then(response => {
      this.airports = response.data
      console.log(this.airports);
    })
    .catch(e => {
      this.errors.push(e)
    });
  }

});