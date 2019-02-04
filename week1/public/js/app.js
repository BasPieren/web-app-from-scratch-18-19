"use strict";

var paragraph = document.querySelector('p')
var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
var request = new XMLHttpRequest();

request.open('GET', url)
request.onload = getData

request.send()

function getData() {
  var data = request.response
  var json = JSON.parse(data)

  paragraph.textContent = json.message

  console.log(JSON.parse(data))
}
