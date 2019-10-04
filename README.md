# Weather_app

## Function
### localization
#### Name
It shows a list of the localizations of the places with that name.  
Enter the command: `npm start -- localization --name="localization's name"`

#### Name and Index
It shows the time zone, temperature in ℃ and the raining probability in the city with the index given in the list.  
Enter the command: `npm start -- localization --name="madrid" --index="1"`

## APIs
### Dark Sky
[Darksky API](https://darksky.net/dev/docs) gives the weather information of a place giving the coordinates.

### Mapbox
[Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding) gives the coordinates og a place giving the name.