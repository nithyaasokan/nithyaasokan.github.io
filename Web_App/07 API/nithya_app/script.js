
function success(position) {
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
          scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
            center: coords,
            zoom: 15,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
        var map = new google.maps.Map(document.getElementById('zero'), mapOptions);

        // var marker = new google.maps.Marker({ position: coords, map: map, title:"You are here!"});
    
        var infowindow = new google.maps.InfoWindow({
                map: map,
                position: coords,
                content:
                    '<h1>You are here!</h1>' 
                    // +
                    // '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
                    // '<h2>Longitude: ' + position.coords.longitude + '</h2>'
            });

    }
    
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

// var json = JSON.parse(data);
 
//   alert(json["name"]); //mkyong
//   alert(json.name);


var json = '{"result":true,"count":1}',
    obj = JSON.parse(json);
    console.log(json.length);

var shelterData = document.getElementById("shelterData");

for (i = 0; i < json.length; i++) {
  shelterData[i] = json.results[i].vicinity;
}



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

document.addEventListener('DOMContentLoaded');




