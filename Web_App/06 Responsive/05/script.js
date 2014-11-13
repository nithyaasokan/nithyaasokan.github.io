



//to get user geolocation
// var x = document.getElementById("submit");

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
var input = document.getElementById('location');
var autocomplete = new google.maps.places.Autocomplete(input, options);


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








