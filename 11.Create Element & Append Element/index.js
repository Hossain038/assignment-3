var myList = document.getElementById('myList');

for (var i = 1; i <= 5; i++) {
  var listItem = document.createElement('li');
  listItem.textContent = i;
  myList.appendChild(listItem);
}
