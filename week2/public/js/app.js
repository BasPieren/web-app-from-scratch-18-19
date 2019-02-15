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
      // Routing
      routie({
        'allMovies': () => {
          renderData(data)
        },
        'movie/:episode': (episode) => {
          detailPage(episode, data)
        }
      })
    })
    .catch(error => console.error(error))
}
getData()

// Render overview page
function renderData(e) {
  let filteredData = filterData(e),
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
            return '#movie/' + this.detail_page
          }
        }
      }

  // To do: Give each template its own function
  const mainOverview = document.querySelector('main'),
        overviewTemplate = `
        <article>
          <h3 class="episode_id">Episode </h3>
          <h2 class="title"></h2>
          <p class="opening_crawl"></p>
          <a class="detail_page">Details</a>
        </article>
        `

  mainOverview.innerHTML = overviewTemplate

  Transparency.render(mainOverview, filteredData, dataDirectives)
}

// Render detail page
function detailPage(episode, data) {
  let newObj = filterData(data),
      findMatch = newObj.find(d => d.episode_id == episode),
      dataDirectives = {
        episode_id: {
          text: function(params) { // Arrow function doesn't work?
            return params.value + this.episode_id
          }
        }
      }

  // To do: Give each template its own function
  let body = document.querySelector('body'),
      mainDetail = document.querySelector('main'),
      detailTemplate = `
      <article>
        <h3 class="episode_id">Episode </h3>
        <h2 class="title"></h2>
        <p class="opening_crawl"></p>
      </article>
      `

    mainDetail.innerHTML = ''
    mainDetail.innerHTML = detailTemplate

    // To do: body container needs to become mainDetail
    Transparency.render(body, findMatch, dataDirectives)

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
