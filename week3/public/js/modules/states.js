export function loadingState() {
  const main = document.querySelector('main'),
        article = document.createElement('article'),
        loadingTemplate = `
          <p>Getting data from a galaxy far far away...</p>
          <img src="public/images/loading-gif.gif">
        `

  main.appendChild(article)

  article.innerHTML = loadingTemplate
}

export function error404() {
  const main = document.querySelector('main'),
        article = document.createElement('article'),
        errorTemplate = `
          <h2>404 Error</h2>
          <p>This is not the page your looking for</p>
          <img src="public/images/ben-kenobi.jpg">
          <a href="#allMovies">Back to all movies</a>
        `

  main.innerHTML = ''

  main.appendChild(article)

  article.innerHTML = errorTemplate
}
