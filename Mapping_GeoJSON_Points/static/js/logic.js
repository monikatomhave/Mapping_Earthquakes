// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// note that the coordinates appear in reverse order [-122.375, 
// 37.61899948120117], compared to their order in the setView() 
// method. This is because the GeoJSON data coordinates are set 
// with the first parameter as X (longitude) and the second parameter 
// as Y (latitude).

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Our options to add data to a marker are to use the pointToLayer or 
// onEachFeature callback functions. With either of these functions, we 
// can add data to a map from each GeoJSON object. The major difference 
// between the two functions is that the pointToLayer callback function 
// adds markers to a map, whereas the onEachFeature callback function 
// allows you to add styling and bind data to a popup marker.

//L.geoJson(data, {
//    pointToLayer: function(feature, latlng) {
//      return L.marker(latlng);
//     }
//});

// Let's break down what is happening in the L.geoJSON() layer:

// 1.) We add two arguments: the data and the pointToLayer callback function.
// 2.) The data will be our sanFranAirport data.
// 3.) For the pointToLayer callback function, we are first going to call a 
    // function() where we pass each GeoJSON feature as feature, and its 
    // latitude and longitude as latlng.
// 4.) Then we add a marker for each feature with a latitude and longitude 
    // in the pointToLayer callback function argument by using return 
    // L.marker(latlng).
// Grabbing our GeoJSON data.
/* L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(feature);
      return L.circleMarker(latlng)
      .bindPopup("<h2>" + feature.properties.name + "<br>" + feature.properties.city + ", " + feature.properties.country + "</h2>");
    } */
// To add a popup marker, we need to use the bindPopup() method to the 
// pointToLayer callback function. This will add a popup marker for each 
// object in our GeoJSON data even though we only have one object in our 
// data, SFO.

//  }).addTo(map);

// When we use the onEachFeature callback function we can add a popup marker 
// for each feature and add data from the properties of the JavaScript object. 
// The basic syntax for adding functionality to a marker is as follows:

//L.geoJSON(data, {
//    onEachFeature: function(feature, layer) {
//      layer.bindPopup();
//     }
//});
//Let's break down what is happening in the L.geoJSON() layer:

// 1.) First, we add two arguments: the data and the onEachFeature callback 
// function.
// 2.) The data will be our sanFranAirport data.
// 3.) With the onEachFeature callback function we are first going to call 
// an anonymous function, function(), where we pass each GeoJSON feature as 
// feature, and any properties to the second argument, layer.

// Grabbing our GeoJSON data
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "<br>" + "Airport name: " + feature.properties.name + "</h2>");
     }
}).addTo(map);