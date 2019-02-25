import { overviewPage } from '/public/js/template.js'
import { detailPage } from '/public/js/template.js'

export function routing(e) {
  routie({
    'allMovies': () => {
      overviewPage(e)
    },
    '/:episode': (episode) => {
      detailPage(episode, e)
    }
  })
}
