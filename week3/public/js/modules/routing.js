import { overviewPage } from './template.js'
import { detailPage } from './template.js'

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
