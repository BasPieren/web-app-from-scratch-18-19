import { overviewPage } from '/week3/public/js/template.js'
import { detailPage } from '/week3/public/js/template.js'

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
