// Add console.log to check to see if our code is working.
console.log("working");

// Get the data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// zoom out a little to see all of the multiple lines
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// skill drill map 
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the line.
//let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790]
//  ];

  // Coordinates for each point to be used in the polyline.
//let line = [
//    [33.9416, -118.4085],  //LAX
//    [37.6213, -122.3790],  //SFO
//    [40.7899, -111.9791],  //SLC
//    [47.4502, -122.3088]   //SEA
//  ];

  // SKill drill :Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],  //SFO
    [38.8017, -104.7026],  //COS
    [30.1974, -97.6663],   //AUS
    [43.6777, -79.6216],   //YYZ
    [40.6417, -73.7809]    //JFK
  ];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//    color: "red"
//  }).addTo(map);

  // Create a polyline using the line coordinates and make the line yellow.
//L.polyline(line, {
//    color: "yellow"
// }).addTo(map);
 
// Create a polyline using the line coordinates and make the line blue dashed.
L.polyline(line, {
    color: "blue",
    weight: 4,
    //opacity: 0.5,
    fillOpacity: 0.5,
    dashArray: '5'
 }).addTo(map);
 


  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/dark-v10',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);