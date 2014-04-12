$(function(){
  function initialize() {
        var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
        var mapOptions = {
          zoom: 4,
          center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
        });

        //var contentString = "http://www.space-photos.info/ISSPhotos/512_IP0201303271735394157S07155W.jpg"
        var infowindow = new google.maps.InfoWindow({
          content: "<img src='http://www.space-photos.info/ISSPhotos/512_IP0201303271735394157S07155W.jpg' alt='image in infowindow'>"
        });

        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);
      
  });

