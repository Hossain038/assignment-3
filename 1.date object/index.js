
function getDayOfWeek(dateString) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var dateParts = dateString.split('-');
  var year = parseInt(dateParts[0]);
  var month = parseInt(dateParts[1]) - 1; // Months in JavaScript are zero-based
  var day = parseInt(dateParts[2]);

  var date = new Date(year, month, day);
  var dayOfWeek = daysOfWeek[date.getDay()];

  return dayOfWeek;
}

// Example usage
var inputDate = "2023-06-19";
var dayOfWeek = getDayOfWeek(inputDate);
document.write("The day of the week for  " ,  inputDate, " is ", dayOfWeek+"<br>");
//a

function displayDayOfWeek() {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var currentDate = new Date();
  var dayOfWeek = daysOfWeek[currentDate.getDay()];
  document.write("Today is " + dayOfWeek+"<br>");
}

// Example usage
displayDayOfWeek();
//b

