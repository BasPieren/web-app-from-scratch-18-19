import * as template from './template.js'

export function routing(e) {
  routie({
    'allMovies': () => {
      template.overviewPage(e)
    },
    '/:episode': (episode) => {
      template.detailPage(episode, e)
    }
  })
}
