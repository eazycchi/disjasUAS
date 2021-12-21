import Flightradar24Data from './flighradar24.js';

 async function renderData(){
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
    const data_details = await Flightradar24Data.getAirportDetails({iata:'WIOO'});
    const airport_name = document.getElementById('airport-name');
            airport_name.innerText = data_details.name;
}

document.addEventListener('DOMContentLoaded', renderData);


