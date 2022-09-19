// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// In the code block above:

// 1.) We're assigning the variable map to the object L.map(), 
// and we'll instantiate the object with the given string 'mapid'.
// 2.) The mapid will reference the id tag in our <div> element on the index.html file.
// 3.) The setView() method sets the view of the map with a geographical 
// center, where the first coordinate is latitude (40.7) and the second 
// is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.

// An alternative to using the setView() method is to modify 
// each attribute in the map object using the curly braces notation as follows:
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//    zoom: 4
//  });
// This method is useful when we need to add multiple tile layers, or a 
// background image of our map(s), which we will do later in this module.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Let's break down what's happening in this code block:

// 1.) We assign the tileLayer() method, as shown in the Quick Start 
// Guide's "Setting up the map" section to the variable streets. Leaflet 
// doesn't provide a tile layer. Instead, it offers various tile layer APIs.
// 2.) The following URLs appear in the parentheses of our tileLayer() method:
//      A.) The API URL with a reference to the accessToken
//      B.) The OpenStreetMap URL inside the curly braces of our tileLayer() method
// 3.) We add the maxZoom attribute and assign it a value of 18.
// 4.) We add the id attribute and assign it mapbox/streets-v11, which will 
// show the streets on the map.
// 5.) We add the accessToken attribute and assign it the value of our API_KEY.
// 6.) Finally, we call the addTo() function with our map object, map on our 
//  graymap object tile layer. The addTo() function will add the graymap object
//  tile layer to our let map.

// To change the map's style, change the map id using the list of Mapbox ids below:

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

// To use the Mapbox Styles API, edit the URL in the Leaflet tilelayer()method, 
// as detailed on the Leaflet website.