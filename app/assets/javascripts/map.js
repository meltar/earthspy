$(function(){
  function initialize() {

// Specify center of the map
var latLng = new google.maps.LatLng(51.781,-107.402);

// Customize map appearance
var mapOptions = {
    center: latLng,
    mapTypeControl: true,
    navigationControl: true,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL, position: google.maps.ControlPosition.TOP_RIGHT},
    zoom: 4
} // end mapOptions();

// Load the Google map into the #mapCanvas div
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

jQuery.get("../markers.xml", function(data) {
  jQuery(data).find("marker").each(function() {
    var eachMarker = jQuery(this);
    var markerCoords = new google.maps.LatLng(
        parseFloat(eachMarker.find("NumericLatitude").text()),
        parseFloat(eachMarker.find("NumericLongitude").text())
    );
    var name = eachMarker.find("Name").text();
    var image = eachMarker.find("ImageUrl512").text();
    var country = eachMarker.find("OpenMapsCountry").text();
    var html = "<p>"+ country +"</p><img src='"+ image + "'>";
    var marker = addMarker(html, markerCoords);

    });
  });
} // end initialize();

// Create a marker for each XML entry
function addMarker(html, markerCoords) {

// Place the new marker
var marker = new google.maps.Marker({
    animation: google.maps.Animation.DROP,
    map: map,
    position: markerCoords
}); // end place the new marker

// Add event listener. On marker click, close all open infoWindows open current infoWindow.
google.maps.event.addListener(marker, "click", function() {
    //if (infowindow) infowindow.close();
    infowindow = new google.maps.InfoWindow({content: html});
    infowindow.open(map, marker);
}); // end add event listener

// Display marker
return marker;

} // end addMarker();

// On page lod, initialize the map
      google.maps.event.addDomListener(window, 'load', initialize);

 });
