import request from 'request';
export {localization};

const localization = function(argv){
    //Mapbox URL
    const baseURLMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    const name = argv.name;
    const token = '?access_token=pk.eyJ1IjoibGF1cmFyZ3oiLCJhIjoiY2sxYW8xcG5uMTlldjNjbGw2aGNsYXZsNyJ9.yZNc4Be1agBMM6tVZ1uW-A';
    const urlMapbox = `${baseURLMapbox}${name}.json${token}`;

    request({ url: urlMapbox, json: true }, (error, response) => {
        if (argv.index == null){ //No index given
            response.body.features.forEach((element,i) => {
                console.log(`${i}: ${response.body.features[i].place_name}`);
            });
        }

        else{
            //Darksky URL
            const baseURLDarksky = 'https://api.darksky.net/';
            const tokenDarksky = 'af414fe762e5e219154cd7dd41438b01/';
            //lat and long taken from Mapbox
            const lat = response.body.features[argv.index].geometry.coordinates[1]; 
            const long = response.body.features[argv.index].geometry.coordinates[0];
            const parameters = '?units=si&lang=es';
            const urlDarksky = `${baseURLDarksky}forecast/${tokenDarksky}${lat},${long}${parameters}`;
            
            const localizacion = response.body.features[argv.index].place_name; //Used to show all the localization information of the chosen city
            
            request({ url: urlDarksky, json: true }, (error, response) => {
                console.log(`Temperatura y probabilidad de lluvia en: ${localizacion}`);
                console.log(`La temperatura es: ${response.body.currently.temperature} ℃`); // La info siempre está en body
                console.log(`La probabilidad de precipitación es: ${response.body.currently.precipProbability}`);
            });
        }
    });
}