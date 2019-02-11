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
      filterData(data)
    })
    .catch(error => console.error(error))
}

getData()

function filterData(f) {
  let allMovies = f.results

  let dataFiltered = allMovies.map(a =>{
    return{
      title: a.title,
      episode_id: 'Episode ' + a.episode_id,
      release_date: a.release_date,
      opening_crawl: a.opening_crawl
    }
  })

  renderData(dataFiltered)
}

function renderData(e) {

  const main = document.querySelector('main')

  e.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  const template = `
    <article>
      <h3 class="episode_id"></h2>
      <h2 class="title"></h3>
      <p class="opening_crawl"></p>
    </article>
  `

  main.innerHTML = template

  Transparency.render(main, e)

}
