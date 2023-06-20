function sendGetRequest() {
    fetch('https://api.example.com/data')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(function(data) {
        document.write(data);
        // Process the received data here
      })
      .catch(function(error) {
        document.write('Error:', error.message);
      });
  }
  
  // Call the function to send the GET request
  sendGetRequest();
  