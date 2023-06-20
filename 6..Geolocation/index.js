function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          document.write('Latitude:', latitude+"<br>");
          document.write('Longitude:', longitude+"<br>");
        },
        function(error) {
            document.write('Error:', error.message);
        }
      );
    } else {
      document.write('Geolocation is not supported by this browser.');
    }
  }
  getCurrentLocation();
  