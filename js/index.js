class Flightradar24Data {
  static root_url = "https://flask-flight-radar-apps.azurewebsites.net";
  //details
  static async getAirportDetails({
    url = `${Flightradar24Data.root_url}`,
    iata = "WIOO",
    pages = 1,
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
    pages = 1,
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
    pages = 1,
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
    pages = 1,
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
    pages = 1,
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
    pages = 1,
  } = {}) {
    try {
      const response = await fetch(`${url}/${iata}/stat/${pages}`);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (err) {
      console.log(err);
    }
  }
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("");
}

async function renderData() {
  const date = new Date();
  const today_date = formatDate(date);
  const data_arrivals = await Flightradar24Data.getAirportArrivals();
  const data_departures = await Flightradar24Data.getAirportDepartures();
  console.log(
    data_departures.filter(
      (item) => item.flight.time.scheduled.arrival_date == today_date
    )
  );

  const arrivals = data_arrivals.filter(
    (item) => item.flight.time.scheduled.arrival_date == today_date
  ).length;
  document.getElementById("jmlArr").innerHTML = arrivals;

  const arrArrived = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "landed"
  ).length;
  document.getElementById("jmlLanded").innerHTML = arrArrived;

  const arrArrived1 = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "canceled"
  ).length;
  document.getElementById("jmlCanceled").innerHTML = arrArrived1;
  const arrArrived2 = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "scheduled"
  ).length;
  document.getElementById("jmlScheduled").innerHTML = arrArrived2;
  const arrArrived3 = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "unknown"
  ).length;
  document.getElementById("jmlUnknown").innerHTML = arrArrived3;
  const arrDelayed = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "delayed"
  ).length;
  document.getElementById("jmlDelayed1").innerHTML = arrDelayed;
  const arrEst = data_arrivals.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "estimated"
  ).length;
  document.getElementById("jmlEstimated").innerHTML = arrEst;

  const departures = data_departures.filter(
    (item) => item.flight.time.scheduled.arrival_date == today_date
  ).length;
  document.getElementById("jmlDep").innerHTML = departures;
  const depDeparted = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "departed"
  ).length;
  document.getElementById("jmlDeparted").innerHTML = depDeparted;
  const depSched = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "scheduled"
  ).length;
  document.getElementById("jmlScheduled2").innerHTML = depSched;
  const depCancel = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "canceled"
  ).length;
  document.getElementById("jmlCanceled2").innerHTML = depCancel;
  const depUnk = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "unknown"
  ).length;
  document.getElementById("jmlUnknown2").innerHTML = depUnk;
  const depDelayed = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "delayed"
  ).length;
  document.getElementById("jmlDelayed2").innerHTML = depDelayed;
  const depEst = data_departures.filter(
    (item) =>
      item.flight.time.scheduled.arrival_date == today_date &&
      item.flight.status.generic.status.text == "estimated"
  ).length;
  document.getElementById("jmlEstimated2").innerHTML = depEst;

  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Kedatangan", "Keberangkatan"],
      datasets: [
        {
          label: "Diagram Pie Kedatangan dan Keberangkatan",
          data: [arrivals, departures],
          backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 205, 86)"],
          hoverOffset: 3,
        },
      ],
    },
  });
}

document.addEventListener("DOMContentLoaded", renderData);
