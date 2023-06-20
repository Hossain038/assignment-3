function sendPostRequest() {
    var url = 'https://api.example.com/submit';
    var data = {
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
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
  
  // Call the function to send the POST request
  sendPostRequest();
  