var displayTemp = function(response){

    //new york weather data
    var localTemp = Math.round(response.current_observation.temp_f) + "°";

    $('.temp').text(displayTemp);

}

var getTemp = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/NY/New_York.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayTemp(response);
            console.log(response);   
        }
    }); 
};

var initialize = function(){
    getTemp();
};

//running clock and weather functions when page loads

$(document).ready( function() {

    initialize();

});

//<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBi6UGfSTNyyv9_rJq0Q4s9vYiXQpApVQM&sensor=false">
//    </script> 