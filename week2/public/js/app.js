"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
https://codepen.io/joostf/pen/OQxpxx
------ */

// Fetch data from the API
function getData() {
  const apiURL = 'https://swapi.co/api/films/'

  fetch(apiURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return filterData(data)
    })
    .then((e) => {
      // Routing
      routie({
        'allMovies': () => {
          overviewPage(e)
        },
        '/:episode': (episode) => {
          detailPage(episode, e)
        }
      })
    })
    .catch(error => console.error(error))
}
getData()

// Render overview page
function overviewPage(e) {
  const mainOverview = document.querySelector('main')

  let filteredData = e,
      dataDirectives = {
        episode_id: {
          text: function(params) { // Arrow function doesn't work?
            return params.value + this.episode_id
          }
        },
        detail_page: {
          text: (params) => {
            return params.value
          },
          href: function() { // Arrow function doesn't work?
            return '#/' + this.detail_page
          }
        }
      }

  overviewTemplate(mainOverview, filteredData, dataDirectives)
}

// Render detail page
function detailPage(episode, data) {
  const mainDetail = document.querySelector('main')

  let findMatch = data.find(d => d.episode_id == episode),
      dataDirectives = {
        episode_id: {
          text: function(params) { // Arrow function doesn't work?
            return params.value + this.episode_id
          }
        }
      }

  detailTemplate(mainDetail, findMatch, dataDirectives)
}

// Overview page template
function overviewTemplate(container, data, dataDir) {
  const article = document.createElement('article')
  let overviewTemplate = `
    <h3 class="episode_id">Episode </h3>
    <h2 class="title"></h2>
    <p class="opening_crawl"></p>
    <a class="detail_page">Details</a>
  `

  container.appendChild(article)

  article.innerHTML = overviewTemplate

  Transparency.render(container, data, dataDir)
}

// Detail page template
function detailTemplate(container, data, dataDir) {
  const article = document.createElement('article')
  let detailTemplate = `
    <h3 class="episode_id">Episode </h3>
    <h2 class="title"></h2>
    <p class="opening_crawl"></p>
    <a href="#allMovies">Terug</a>
  `

  article.innerHTML = detailTemplate

  // To do: body container needs to become mainDetail
  Transparency.render(container, data, dataDir)
}

// Filter the data
function filterData(e) {
  let allMovies = e.results

  let dataFiltered = allMovies.map(a => {
    return{
      title: a.title,
      episode_id: a.episode_id,
      release_date: a.release_date,
      opening_crawl: a.opening_crawl,
      detail_page: a.episode_id
    }
  })

  dataFiltered.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  return dataFiltered
}

routie('allMovies')
