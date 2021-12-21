class Flightradar24Data {
  static root_url = "https://flask-flight-radar-apps.azurewebsites.net";
  //details
  static async getAirportDetails({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/details/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
  //arrivals
  static async getAirportArrivals({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/arrivals/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
  //departures
  static async getAirportDepartures({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/departures/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
  //onground
  static async getAirportOnground({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/onground/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
  //weather
  static async getAirportWeather({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/weather/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
  //stat
  static async getAirportStat({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 0,
  } = {}) {
    try {
      const response = await fetch(
        `${url}/${iata}/stat/${pages}`,
        (iata = "WIOO"),
        (pages = 0)
      );
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
}

async function renderData() {
  //     try{
  //             const response = await fetch('https://flask-flight-radar-apps.azurewebsites.net/WIOO/details/1');
  //             const responseJson = await response.json();
  //             const airport_name = document.getElementById('airport-name');
  //             airport_name.innerText = responseJson.name;
  //             const airport_code = document.getElementById('airport-code');
  //             airport_code.innerText = responseJson.code.iata;
  //             console.log(responseJson);
  // } catch(err){
  //         console.log(err);
  //     }

  //memasukkan nama airport menggunakan data response
  const data_details = await Flightradar24Data.getAirportDetails({
    iata: "WIOO",
  });
  const airport_name = document.getElementById("airport-name");
  airport_name.innerText = data_details.name;
}

document.addEventListener("DOMContentLoaded", renderData);
