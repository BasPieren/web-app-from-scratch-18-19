export function overviewPage() {
  const overviewMain = document.querySelector('main')
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
            return '#' + this.detail_page
          }
        }
      }

  overviewTemplate(overviewMain, filteredData, dataDirectives)
}

function overviewTemplate(container, data, dataDir) {
  container.innerHTML = ''

  data.forEach(a => {
    const article = document.createElement('article')
    let overviewTemplate = `
      <h3 class="episode_id">Episode </h3>
      <h2 class="title"></h2>
      <a class="detail_page">Details</a>
      `

    let template = container.appendChild(article)

    article.innerHTML += overviewTemplate

    Transparency.render(template, a, dataDir)
  })
}

export function detailPage(episode) {
  const detailMain = document.querySelector('main')
  let lStorage = localStorage.getItem('data'),
      checkData = (() => {
        let parseStorage = JSON.parse(lStorage),
            findMatch = parseStorage.find(d => d.episode_id == episode),
            dataDirectives = {
              episode_id: {
                text: function(params) { // Arrow function doesn't work?
                  return params.value + this.episode_id
                }
              },
              release_date: {
                text: function(params) { // Arrow function doesn't work?
                  return params.value + this.release_date
                }
              },
              producer: {
                text: function(params) { // Arrow function doesn't work?
                  return params.value + this.producer
                }
              }
            }
        if (episode && findMatch.episode_id) {
          detailTemplate(detailMain, findMatch, dataDirectives)
        } else {
          console.log('Fail')
        }
      })()
}

function detailTemplate(container, data, dataDir) {
  const main = document.createElement('article'),
        article = document.createElement('article')
  let detailTemplate = `
    <h3 class="episode_id">Episode </h3>
    <h2 class="title"></h2>
    <p class="opening_crawl"></p>
    <div>
      <p class="release_date">Release date: </p>
      <p class="producer">Producer: </p>
    </div>
    <a href="#allMovies">Terug</a>
  `

  container.innerHTML = ''

  let template = container.appendChild(article)

  article.innerHTML = detailTemplate

  Transparency.render(template, data, dataDir)
}
