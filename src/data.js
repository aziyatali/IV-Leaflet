var mymap = L.map('mapid').setView([35.55, 129.29], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);

var marker = L.marker([35.55, 129.29]).addTo(mymap);


var circle = L.circle([35.55, 129.29], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [35.55, 129.29]
//     }
// };
// L.geoJSON(geojsonFeature).addTo(mymap);
