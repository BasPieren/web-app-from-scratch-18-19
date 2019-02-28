"use strict";

/* ------ SOURCES
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data
https://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
https://codepen.io/joostf/pen/OQxpxx
------ */

import { loadingState } from './modules/states.js'
import { filterData } from './modules/filter.js'
import { routing } from './modules/routing.js'

function getData() {
  const apiURL = 'https://swapi.co/api/films/'

  loadingState()

  fetch(apiURL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      return filterData(data)
    })
    .then(() => {
      routing()
    })
    .catch(error => console.error(error))
}
getData()
