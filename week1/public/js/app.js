"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
------ */

(function(){
  var main = document.querySelector('main')
  var url = 'https://swapi.co/api/films/'
  var request = new XMLHttpRequest();

  request.open('GET', url)
  request.onload = getData

  request.send()

  function getData() {
    var data = request.response
    var dataJSON = JSON.parse(data).results

    dataJSON.sort(function(a, b){
      return parseFloat(a.episode_id) - parseFloat(b.episode_id)
    })

    for (var i = 0; i < dataJSON.length; i++) {
      var article = document.createElement('article')
      var h2 = document.createElement('h2')
      var h3 = document.createElement('h3')
      var p = document.createElement('p')

      h2.textContent = dataJSON[i].title
      h3.textContent = 'Episode ' + dataJSON[i].episode_id
      p.textContent = dataJSON[i].opening_crawl

      main.appendChild(article)

      article.appendChild(h3)
      article.appendChild(h2)
      article.appendChild(p)
    }

    console.log(dataJSON)
  }
})();
