$('#Btn1').click(function(){
     navigator.geolocation.getCurrentPosition(onSuccess, onError);
 });

 function Success (position) {
     alert('Latitude: '          + position.coords.latitude          + '\n' +
           'Longitude: '         + position.coords.longitude         + '\n' +
           'Accuracy: '          + position.coords.accuracy          + '\n' +

 };

 function onError(error) {
     alert('code: '    + error.code    + '\n' +
           'message: ' + error.message + '\n');
 }


 document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady() {
     console.log("navigator.geolocation works well");
 }

 // onSuccess Callback
 // This method accepts a Position object, which contains the
 // current GPS coordinates
 //
 function Success (position) {
     alert('Latitude: '          + position.coords.latitude          + '\n' +
           'Longitude: '         + position.coords.longitude         + '\n' +
           'Accuracy: '          + position.coords.accuracy          +"m");
 };

 function onError(error) {
     alert('code: '    + error.code    + '\n' +
           'message: ' + error.message + '\n');
 }

 navigator.geolocation.getCurrentPosition(onSuccess, onError);

 function showPosition(position)
{
   coords.lat = position.coords.latitude;
   coords.lon = position.coords.longitude;

   x.innerHTML="Latitude: " + coords.lat +
   "<br />Longitude: " + coords.lon;
}
