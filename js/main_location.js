function success(position) {
  var s = document.querySelector('#status');
  if (s.className == 'success') {
    return;
  }
  s.innerHTML = "Found you!";
  s.className = 'success';

  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'mapcanvas';
  mapcanvas.style.height = '600px';
  mapcanvas.style.width = '600px';

  document.querySelector('article').appendChild(mapcanvas);

  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

  var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title:"You are here! (at least within a "+position.coords.accuracy+" metre radius)"
  });
}

function error(msg) {
  var s = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}

function showlocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
    callback(position.coords.latitude, position.coords.longitude);
  });
}

function callback(lat,lon) {
  document.getElementById('latitude').innerHTML = lat;
  document.getElementById('longitude').innerHTML = lon;

  document.getElementById('latitude1').value = lat;
  document.getElementById('longitude1').value = lon;

}
