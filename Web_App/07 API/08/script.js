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

    if (navigator.geolocation)
   {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    function showPosition(position)
    {

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  map = new google.maps.Map(document.getElementById('zero'), {
    scrollwheel: false,
    center: coords,
    zoom: 15
  });

  var infowindow = new google.maps.InfoWindow({
            map: map,
            position: coords,
            content:'<p>You are here!</p>' });

  var request = {
    location: coords,
    radius: 300,
    types: ['convenience_store']
  };


  infowindow2 = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
  }
}
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var storeName = place.name;
  var storeAdd = place.vicinity;
  var storeRate = place.rating;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow2.setContent(place.name);
    infowindow2.open(map, this);
    document.getElementById('storeName1').innerHTML = storeName;
    document.getElementById('storeAdd1').innerHTML = storeAdd;

    if(storeRate == 4) {
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026; &#10026; &#10026;';
    } else if (storeRate == 3){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026; &#10026;';
    } 
    else if (storeRate == 2){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026;';
    } else if (storeRate == 1){
      document.getElementById('storeRate1').innerHTML = '&#10026; &#10026;';
    } else if (storeRate == undefined){
      document.getElementById('storeRate1').innerHTML = '&#10026;';
    }
  });
}

document.addEventListener('marker', 'load', function() {
    // document.getElementById('storeName1').innerHTML = storeName;
    // document.getElementById('storeAdd1').innerHTML = storeAdd;
    // document.getElementById('storeRate1').innerHTML = storeRate;
  });

google.maps.event.addDomListener(window, 'load', initialize);
















// var json = JSON.parse(data);
 
//   alert(json["name"]); //mkyong
//   alert(json.name);


// var json = '{"result":true,"count":1}',
//     //obj = JSON.parse(json);
//     //console.log(json.length);

// var shelterData = document.getElementById("shelterData");

// for (i = 0; i < json.length; i++) {
//   shelterData[i] = json.results[i].vicinity;
// }



// alert(obj.count);
// alert(json["name"]);
// alert(json.name);


// $.getJSON(url, function (json) {
//     alert(json.result);
//     $.each(json.list, function (i, fb) {
//         alert(fb.result);
//     });
// });

// function initialize () {
//   var shelter = document.getElementById('shelterData');

//   shelter.innerHTML = "position";

// }

document.addEventListener('DOMContentLoaded', callback);




