export function overviewPage() {
  const mainOverview = document.querySelector('main')

  let lStorage = localStorage.getItem('data'),
      filteredData = JSON.parse(lStorage),
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

export function detailPage(episode) {
  const mainDetail = document.querySelector('main')

  let lStorage = localStorage.getItem('data'),
      checkData = (() => {
        let parseStorage = JSON.parse(lStorage),
            findMatch = parseStorage.find(d => d.episode_id == episode),
            dataDirectives = {
              episode_id: {
                text: function(params) { // Arrow function doesn't work?
                  return params.value + this.episode_id
                }
              }
            }
        if (episode && findMatch.episode_id) {
          detailTemplate(mainDetail, findMatch, dataDirectives)
        } else {
          console.log('Fail')
        }
      })()
}

function detailTemplate(container, data, dataDir) {
  const article = document.createElement('article')
  let detailTemplate = `
    <h3 class="episode_id">Episode </h3>
    <h2 class="title"></h2>
    <p class="opening_crawl"></p>
    <a href="#allMovies">Terug</a>
  `

  article.innerHTML = detailTemplate

  Transparency.render(container, data, dataDir)
}
