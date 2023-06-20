function openWindow(url, width, height) {
    // Calculate the left and top positions for centering the window
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
  
    // Open the new window with the specified URL, dimensions, and position
    window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
  }
  openWindow("https://www.example.com", 800, 600);
  