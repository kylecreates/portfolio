// URBAN
var content = document.getElementById("albumDisplay");
var btn = document.getElementById("urban");

btn.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.open('GET', '../XHRs/urban.json', true);
  request.onload = function () {
  var data = JSON.parse(this.response);
  renderHTML(data);
}

  request.send();
});


function renderHTML(data) {
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
     htmlString += ( '<li class="albumImages">' + data[i].image + '</li>');
    }
  content.insertAdjacentHTML('beforeend', htmlString)
}



//PRINTWORTHY
var content = document.getElementById("albumDisplay");
var btn = document.getElementById("printworthy");

btn.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.open('GET', '../XHRs/printworthy.json', true);
  request.onload = function () {
  var ourData = JSON.parse(this.response);
  renderHTML(ourData);
}

  request.send();
});


function renderHTML(data) {
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
     htmlString += ( '<li class="albumImages">' + data[i].image + '</li>');
    }
  content.insertAdjacentHTML('beforeend', htmlString)
}
