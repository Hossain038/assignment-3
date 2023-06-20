function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
  
    if (/opera|opr/i.test(userAgent)) {
      browserName = 'Opera';
      browserVersion = userAgent.match(/(opera|opr)[\s\/:]?([\d\.]+)/i)[2];
    } else if (/edge/i.test(userAgent)) {
      browserName = 'Microsoft Edge';
      browserVersion = userAgent.match(/edge\/([\d\.]+)/i)[1];
    } else if (/chrome/i.test(userAgent)) {
      browserName = 'Google Chrome';
      browserVersion = userAgent.match(/chrome\/([\d\.]+)/i)[1];
    } else if (/safari/i.test(userAgent)) {
      browserName = 'Safari';
      browserVersion = userAgent.match(/version\/([\d\.]+)/i)[1];
    } else if (/firefox/i.test(userAgent)) {
      browserName = 'Mozilla Firefox';
      browserVersion = userAgent.match(/firefox\/([\d\.]+)/i)[1];
    } else if (/trident/i.test(userAgent)) {
      browserName = 'Internet Explorer';
      browserVersion = userAgent.match(/trident\/([\d\.]+)/i)[1];
    } else {
      browserName = 'Unknown';
      browserVersion = 'Unknown';
    }
  
    return {
      name: browserName,
      version: browserVersion
    };
  }
  
  function displayBrowserInfo() {
    const browserInfo = getBrowserInfo();
    const message = `Browser Name: ${browserInfo.name+"<br>"}\nBrowser Version: ${browserInfo.version}`;
    document.write(message);
  }
  
  // Call the function to display the user's browser name and version
  displayBrowserInfo();
  