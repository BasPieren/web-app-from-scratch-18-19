"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
https://codepen.io/joostf/pen/OQxpxx
------ */

import { filterData } from '/week3/public/js/filter.js'
import { routing } from '/week3/public/js/routing.js'

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
      routing(e)
    })
    .catch(error => console.error(error))
}
getData()

routie('allMovies')
