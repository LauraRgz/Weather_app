import request from 'request';
import yargs from 'yargs';

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

const localization = function(argv){
    const baseURLMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const name = argv.name;
    const token = '?access_token=pk.eyJ1IjoibGF1cmFyZ3oiLCJhIjoiY2sxYW8xcG5uMTlldjNjbGw2aGNsYXZsNyJ9.yZNc4Be1agBMM6tVZ1uW-A';
    const urlMapbox = `${baseURLMapbox}${name}.json${token}`;
    


    request({ url: urlMapbox, json: true }, (error, response) => {
        if (argv.index == null){
            response.body.features.forEach((element,i) => {
                console.log(`${i}: ${response.body.features[i].place_name}`);
            });
        }
        else{
            const baseURLDarksky = 'https://api.darksky.net/';
            const tokenDarksky = 'af414fe762e5e219154cd7dd41438b01/';
            const lat = response.body.features[argv.index].geometry.coordinates[1];
            const long = response.body.features[argv.index].geometry.coordinates[0];
            const parameters = '?units=si&lang=es';
            const urlDarksky = `${baseURLDarksky}forecast/${tokenDarksky}${lat},${long}${parameters}`;
            console.log(lat + " " + long);
            request({ url: urlDarksky, json: true }, (error, response) => {
                console.log("Buenas tardes, estás en " + response.body.timezone);
                console.log("La temperatura es: " + response.body.currently.temperature); // La info siempre está en body
                console.log("La probabilidad de precipitación es: " + response.body.currently.precipProbability);
            });
        }
    });
}

yargs.command({
    command: 'localization',
    describe: ' ',
    builder: {
      name: {
        describe: 'place',
        demandOption: true,
        type: 'string',
      },
      index: {
        describe: 'index',
        demandOption: false, 
        type: 'string',
      },
    },  

    handler: localization,
  });

  yargs.parse();

