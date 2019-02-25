import * as template from './template.js'

export function routing() {
  routie({
    'allMovies': () => {
      template.overviewPage()
    },
    '/:episode': (episode) => {
      template.detailPage(episode)
    }
  })

  routie('allMovies')
}
