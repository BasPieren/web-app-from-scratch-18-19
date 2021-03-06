"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
https://codepen.io/joostf/pen/OQxpxx
------ */

function getData() {
  fetch('https://swapi.co/api/films/')
    .then(response => {
      return response.json()
    })
    .then(data => {
      renderData(data)
    })
    .catch(error => console.error(error))
}

getData()

function renderData(e) {

  const main = document.querySelector('main')

  e.results.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  e.results.forEach((a) => {
    const article = document.createElement('article'),
          h2 = document.createElement('h2'),
          h3 = document.createElement('h3'),
          p = document.createElement('p')

    h2.textContent = a.title
    h3.textContent = 'Episode ' + a.episode_id
    p.textContent = a.opening_crawl

    main.appendChild(article)

    article.appendChild(h3)
    article.appendChild(h2)
    article.appendChild(p)
  })
}
