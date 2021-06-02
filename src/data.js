var mymap = L.map('mapid').setView([35.55, 129.29], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);

var marker = L.marker([35.55, 129.29]).addTo(mymap);


var circle = L.circle([35.55, 129.29], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var myData;
d3.json("owid-covid-data.json", function(err, data) {
  if (err){
    console.log("error occured", err);
  }else{
    myData = JSON.parse(data);
    console.log("Parsed data: ", myData);
    console.log("Loaded data: ", data);
  }
})


mymap.on('click', function(e){
  var lt = String(e.latlng.lat),
  lg = String(e.latlng.lng);

  const Http = new XMLHttpRequest();
  const url='http://api.geonames.org/findNearbyPlaceNameJSON?lat='+lt+'&lng='+lg+'&username=aziyatali';
  Http.open("GET", url);
  Http.send();

 Http.onreadystatechange = (ev) => {
  var countryData = JSON.parse(Http.responseText);
  console.log(countryData);
  var countryName = countryData.geonames[0].countryName;
  console.log("My requestL ", countryName);
  var popup = L.popup()
	.setLatLng(e.latlng)
	.setContent(countryName)
	.openOn(mymap);
}
  

});