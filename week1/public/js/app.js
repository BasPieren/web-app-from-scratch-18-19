"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
------ */

(function(){

  var main = document.querySelector('main'),
      url = 'https://swapi.co/api/films/',
      request = new XMLHttpRequest();

  request.open('GET', url)
  request.onload = getData

  request.send()

  function getData() {
    var data = request.response,
        dataJSON = JSON.parse(data).results

    dataJSON.sort(function(a, b){
      return (a.episode_id) - (b.episode_id)
    })

    for (var i = 0; i < dataJSON.length; i++) {
      var article = document.createElement('article'),
          h2 = document.createElement('h2'),
          h3 = document.createElement('h3'),
          p = document.createElement('p')

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
