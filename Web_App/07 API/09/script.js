//Map and Google Places information
var map;
var coords;
var mapOptions;
var request;
var service;
var infowindow;
var infowindow2;
var place;
var shelterData;

//40.7370954, -73.9922812   CURRENT LOCATION COORDINATES - D12

function initialize() {

  //creating variable for current location div in 'Your Stats' section
  var loc = document.getElementById("currentLocation");
  var image = 'http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png';

  //checking user location through browser
  if(navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
    function showPosition(position)
  {

    var lat = position.coords.latitude;
  var latRound = lat.toFixed(4);
  var lon = position.coords.longitude;
  var lonRound = lon.toFixed(4);

  //showing current location coordinates in 'Your Stats' section
  loc.innerHTML = "latitude : " + latRound + " | Longitude : " + lonRound;

  //creating map centered on user location
  var coords = new google.maps.LatLng(latRound, lonRound);

  var image = 'source/zombie-outbreak.png';

  //map properties
  map = new google.maps.Map(document.getElementById('zero'), {
    scrollwheel: false,
    center: coords,
    zoom: 15
  });

  //info window for user location
  var infowindow = new google.maps.InfoWindow({
            map: map,
            position: coords,
            icon: image,
            content:'<p>You are here!</p>' });

  //request for store information
  var request = {
    location: coords,
    radius: 400,
    types: ['convenience_store']
  };

  //request for shelter information
  var request2 = {
    location: coords,
    radius: 400,
    types: ['library']
  };

  //info window for store request
  infowindow2 = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  //info window for shelter request
  infowindow3 = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request2, callback2);
  }
}

//showing results of the nearbySearch from Google Places
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker2(results[i]);
    }
  }
}

function callback2(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {

  //icon image url
  var image2 = 'source/bighouse.png';

  //creating variables for google places information
  var placeLoc = place.geometry.location;
  var placeName = place.name;
  var placeAdd = place.vicinity;
  var placeRate = place.rating;

  //creating markers
  var marker = new google.maps.Marker({
    map: map,
    icon: image2,
    position: place.geometry.location
  });

  //adding event listener for place request - when marker is clicked >> load information
  google.maps.event.addListener(marker, 'click', function() {
    infowindow3.setContent(place.name);
    infowindow3.open(map, this);
    document.getElementById('placeName1').innerHTML = placeName;
    document.getElementById('placeAdd1').innerHTML = placeAdd;

    if(placeRate < 4 && placeRate > 3) {
      document.getElementById('placeRate1').innerHTML = '&#10026; &#10026; &#10026; &#10026;';
    } else if (placeRate < 3 && placeRate > 2){
      document.getElementById('placeRate1').innerHTML = '&#10026; &#10026; &#10026;';
    } 
    else if (placeRate < 2 && placeRate > 1){
      document.getElementById('placeRate1').innerHTML = '&#10026; &#10026;';
    } else if (placeRate < 1 && placeRate > 0){
      document.getElementById('placeRate1').innerHTML = '&#10026; &#10026;';
    } else if (placeRate == undefined){
      document.getElementById('placeRate1').innerHTML = '&#10026;';
    }

  });

}

//creating a marker on the map
function createMarker2(store) {

  //icon image url
  var image3 = 'source/grocery.png';

  //creating variables for google places information
  var storeLoc = store.geometry.location;
  var storeName = store.name;
  var storeAdd = store.vicinity;
  var storeRate = store.rating;

  //creating markers
  var marker = new google.maps.Marker({
    map: map,
    icon: image3,
    position: store.geometry.location
  });

  //adding event listener for store request - when marker is clicked >> load information
  google.maps.event.addListener(marker, 'click', function() {
    infowindow2.setContent(store.name);
    infowindow2.open(map, this);
    document.getElementById('storeName1').innerHTML = storeName;
    document.getElementById('storeAdd1').innerHTML = storeAdd;

    if(storeRate < 4 && storeRate > 3) {
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026; &#10026; &#10026;';
    } else if (storeRate < 3 && storeRate > 2){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026; &#10026;';
    } 
    else if (storeRate < 2 && storeRate > 1){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026;';
    } else if (storeRate < 1 && storeRate > 0){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026;';
    } else if (storeRate == undefined){
      document.getElementById('storeRate1').innerHTML = '&#10026;';
    }
  });
}

//adding event listener  
document.addEventListener('marker', 'load', function() {  });

google.maps.event.addDomListener(window, 'load', initialize);

document.addEventListener('DOMContentLoaded', callback);
document.addEventListener('DOMContentLoaded', callback2);


//--------------------------------------------------------------------------------------------------------------------------------------------

//Current Location information

var displayNYWeather = function(response){

    //new york weather data
    var nyTemperature = Math.round(response.current_observation.temp_f) + "°";
    var nyIcon = response.current_observation.icon_url;

    $('#currentTemp1').text(nyTemperature);
}

var getNYWeather = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/NY/New_York.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayNYWeather(response);
        }
    }); 
};

var initialize = function(){
    getNYWeather();
};

//initializing temp when page loads
$(document).ready( function() {
    initialize();
});

//--------------------------------------------------------------------------------------------------------------------------------------------

//Countdown Clock using Flipclock.js

var clock;

$(document).ready(function() {

  // Grab the current date
  var currentDate = new Date();

  // Set some date in the future. In this case, it's always Jan 1
  var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
  clockFace: 'DailyCounter',
  countdown: true
  });

});





