import request from 'request';

/*const url = 'https://api.darksky.net/forecast/af414fe762e5e219154cd7dd41438b01/40.39,-3.66?units=si&lang=es';


request({ url: url, json: true }, (error, response) => {
    console.log("Buenas tardes, estás en " + response.body.timezone);
    console.log("La temperatura es: " + response.body.currently.temperature); // La info siempre está en body
    console.log("La probabilidad de precipitación es: " + response.body.currently.precipProbability);
});*/
 
// const baseURLDarksky = 'https://api.darksky.net/';
// const tokenDarksky = 'af414fe762e5e219154cd7dd41438b01/';

// const lat = 40.39;
// const long = -3.66;
// const parameters = '?units=si&lang=es';

// const urlDarksky = `${baseURLDarksky}forecast/${tokenDarksky}${lat},${long}${parameters}`;

// request({ url: urlDarksky, json: true }, (error, response) => {
//     console.log("Buenas tardes, estás en " + response.body.timezone);
//     console.log("La temperatura es: " + response.body.currently.temperature); // La info siempre está en body
//     console.log("La probabilidad de precipitación es: " + response.body.currently.precipProbability);
// });

//https://api.mapbox.com/geocoding/v5/mapbox.places/vallecas.json?access_token=pk.eyJ1IjoibGF1cmFyZ3oiLCJhIjoiY2sxYW8xcG5uMTlldjNjbGw2aGNsYXZsNyJ9.yZNc4Be1agBMM6tVZ1uW-A

//const coordenadas = function(){
    const baseURLMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const sitio = 'vallecas';
    const token = '?access_token=pk.eyJ1IjoibGF1cmFyZ3oiLCJhIjoiY2sxYW8xcG5uMTlldjNjbGw2aGNsYXZsNyJ9.yZNc4Be1agBMM6tVZ1uW-A';
    const urlMapbox = `${baseURLMapbox}${sitio}.json${token}`;
    
    request({ url: urlMapbox, json: true }, (error, response) => {
        response.body.features.forEach((element,i) => {
            console.log(`${i}: ${response.body.features[i].place_name}`);
        });
    });
//}

