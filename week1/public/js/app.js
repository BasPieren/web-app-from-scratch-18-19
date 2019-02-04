"use strict";

var main = document.querySelector('main')
var url = 'https://swapi.co/api/films/'
var request = new XMLHttpRequest();

request.open('GET', url)
request.onload = getData

request.send()

function getData() {
  var data = request.response
  var json = JSON.parse(data)

  for (var i = 0; i < json.results.length; i++) {
    var h2 = document.createElement('h2')
    var p = document.createElement('p')

    h2.textContent = json.results[i].title
    p.textContent = json.results[i].opening_crawl

    main.appendChild(h2)
    main.appendChild(p)
  }

  console.log(json.results)
}
