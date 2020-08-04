
var API_KEY = "AIzaSyAenocerebZN6FNQCmbSGeob3BCCBjfKx4";

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

//  var queryURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDqN5Ux_i_Gqnt2tPy0Xv0StfabuMVbqMs&callback=initMap";
//  console.log(queryURL);
// $.ajax({
//     url: queryURL,
//     headers: "Access-Control-Allow-Origin",
//     method: "GET"
// }).then(function(response){
//     console.log(response);
// })

