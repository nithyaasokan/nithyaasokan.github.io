var map;
var coords;
var mapOptions;
var request;
var service;
var infowindow;
var infowindow2;
var place;
var shelterData;

// function success(position) {
//     var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

//       var mapOptions = {
//         scrollwheel: false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//         draggable: false,
//         center: coords,
//         zoom: 15,
//         navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}, mapTypeId: google.maps.MapTypeId.ROADMAP
//       };
//         var map = new google.maps.Map(document.getElementById('zero'), mapOptions);

//         // var marker = new google.maps.Marker({ position: coords, map: map, title:"You are here!"});
    
//         var infowindow = new google.maps.InfoWindow({
//             map: map,
//             position: coords,
//             content:'<h1>You are here!</h1>' });
//     }
    
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(success);
//     } else {
//         error('Geo Location is not supported');
//     }

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
            content:'<h1>You are here!</h1>' });

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
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow2.setContent(place.name);
    infowindow2.open(map, this);
    document.getElementById('a').innerHTML = '<p>Currently dragging marker...</p>';

  });
}

// if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(initialize) {
//             var latitude = position.coords.latitude;
//             var longitude = position.coords.longitude;
//         });
//     } else {
//         error('Geo Location is not supported');
//     }

// console.log(position.coords);

google.maps.event.addDomListener(window, 'load', initialize);


// var map;
// var service;
// var infowindow;

// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });

//   var request = {
//     location: pyrmont,
//     radius: '500',
//     types: ['store']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }















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




