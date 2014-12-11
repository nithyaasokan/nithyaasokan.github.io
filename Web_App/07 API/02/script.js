
// MAP IN INFOGRAPHIC
//lat: 40.737043899999996, lng: -73.9922805
// function initialize() {
//         var mapOptions = {
//         	scrollwheel: false,
//     		navigationControl: false,
//     		mapTypeControl: false,
//     		scaleControl: false,
//     		draggable: false,
//           	center: {lat: 40.737043899999996, lng: -73.9922805},
//           	zoom: 12
//         };
//         var map = new google.maps.Map(document.getElementById('zero'),
//             mapOptions);
//       }

// google.maps.event.addDomListener(window, 'load', initialize);

// //GEOLOCATION
// function getLocation(){

//    if(navigator.geolocation){
//       // timeout at 60000 milliseconds (60 seconds)
//       var options = {timeout:60000};
//       navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
//    }else{
//       alert("Sorry, browser does not support geolocation!");
//    }
// }

// //latlng
//var position = getCurrentPosition(showPosition);

// function initialize() {
// 	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         var mapOptions = {
//           center: latlng,
//           zoom: 12
//         };
//         var map = new google.maps.Map(document.getElementById('zero'),
//             mapOptions);
//       }

// google.maps.event.addDomListener(window, 'load', initialize);

// var marker = new google.maps.Marker({
//       position: latlng, 
//       map: map, 
//       title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
//   });



// AUTOCOMPLETE FUNCTION 01
// var location = { 'location' };
// function initialize() {
//   // Create the autocomplete object, restricting the search
//   // to geographical location types.
//   autocomplete = new google.maps.places.Autocomplete(
//       /** @type {HTMLInputElement} */(document.getElementById('location')),
//       { types: ['geocode'] });
//   // When the user selects an address from the dropdown,
//   // populate the address fields in the form.
//   google.maps.event.addListener(location, 'place_changed', function() {
//     fillInAddress();
//   });
// }

// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   var place = autocomplete.getPlace();

//   for (var component in componentForm) {
//     document.getElementById(component).value = '';
//     document.getElementById(component).disabled = false;
//   }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  // for (var i = 0; i < place.address_components.length; i++) {
  //   var addressType = place.address_components[i].types[0];
  //   if (componentForm[addressType]) {
  //     var val = place.address_components[i][componentForm[addressType]];
  //     document.getElementById(addressType).value = val;
  //   }
  // }
// }



// AUTOCOMPLETE FUNCTION 02
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
// function geolocate() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var geolocation = new google.maps.LatLng(
//           position.coords.latitude, position.coords.longitude);
//       autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
//           geolocation));
//     });
//   }
// }



// TO GET USER LOCATION
// var x = document.getElementById("location");

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else { 
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;  
// }




// 1. to autocomplete location in input box
// var input = document.getElementById('locationInput');
// var autocomplete = new google.maps.places.Autocomplete(input, options);

// autocomplete.bindTo('location', map);

 // google.maps.event.addListener(autocomplete, 'location', function() {
 //      var place = autocomplete.getPlace();
 //      if (place.geometry.viewport) {
 //        map.fitBounds(place.geometry.viewport);
 //      } else {
 //        map.setCenter(place.geometry.location);
 //        map.setZoom(16);
 //      }


// 2. to autocomplete location in input box
// function findComponent(result, type) {
//   var component = _.find(result.address_components, function(component) {
//     return _.include(component.types, type);
//   });
//   return component && component.short_name;
// }
 
  
// google.maps.event.addListener(autocomplete, 'place_changed', function() {
//     var place = autocomplete.getPlace();
//     $('input[name="location_lat"]').val(place.geometry.location.lat());
//     $('input[name="location_lng"]').val(place.geometry.location.lng());
//     $('input[name="location_country"]').val(findComponent(place, 'country')); 
//     $('input[name="location_state"]').val(findComponent(place, 'administrative_area_level_1')); 
//     $('input[name="location_city"]').val(findComponent(place, 'administrative_area_level_3') || findComponent(place, 'locality')); 
// });








