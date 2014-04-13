$(function(){
  function initialize() {

    var markers = [];

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
        var datetime = eachMarker.find("ImageDateTime").text();
        datetime = moment(datetime).format('MMM DD YYYY, hh:mm:ss a');
        var html = "<p><strong>Location: </strong>"+ country + "</p><p><strong>Taken at: </strong>" + datetime +"</p><img src='"+ image + "'>";
        var marker = addMarker(html, markerCoords);

        });
      });

    var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    google.maps.event.addListener(searchBox, 'places_changed', function() {
        var places = searchBox.getPlaces();

        for (var i = 0, marker; marker = markers[i]; i++) {
          marker.setMap(null);
        }

        markers = [];

        var bounds = new google.maps.LatLngBounds();

        for (var i = 0, place; place = places[i]; i++) {
          var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
          };

          // Create a marker for each place.
          // var marker = new google.maps.Marker({
          //   map: map,
          //   icon: image,
          //   title: place.name,
          //   position: place.geometry.location
          // });

          // markers.push(marker);

          bounds.extend(place.geometry.location);
        }
       
        // bounds.extend(place.geometry.location);
         
        // console.log(bounds);
        map.fitBounds(bounds);
        map.setZoom(4);
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
    // Create the search box and link it to the UI element.

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
