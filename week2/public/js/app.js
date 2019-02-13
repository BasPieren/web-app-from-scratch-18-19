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
      routie({
        'allMovies': () => {
          renderData(data)
        },
        'detailPage': () => {
          detailPage(data)
        }
      })
      // filterData(data)
    })
    .catch(error => console.error(error))
}
getData()

// Render overview page
function renderData(e) {
  console.log(e)
  let newObj = filterData(e),
      directives = {
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
            return this.detail_page
          }
        }
      }

  const main = document.querySelector('main'),
        template = `
        <article>
          <h3 class="episode_id">Episode </h2>
          <h2 class="title"></h3>
          <p class="opening_crawl"></p>
          <a class="detail_page">Details</a>
        </article>
        `

  newObj.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  main.innerHTML = template

  Transparency.render(main, newObj, directives)
}

function detailPage(e) {
  console.log('data')
}

function filterData(e) {
  let allMovies = e.results

  let dataFiltered = allMovies.map(a =>{
    return{
      title: a.title,
      episode_id: a.episode_id,
      release_date: a.release_date,
      opening_crawl: a.opening_crawl,
      detail_page: a.episode_id
    }
  })

  return dataFiltered
}

routie('allMovies')
