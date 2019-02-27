export function filterData(e) {
  let allMovies = e.results,
      dataFiltered = allMovies.map(a => {
        return{
          title: a.title,
          episode_id: a.episode_id,
          release_date: a.release_date,
          opening_crawl: a.opening_crawl,
          release_date: a.release_date,
          producer: a.producer,
          detail_page: a.episode_id
        }
      })
  dataFiltered.sort((a, b) => {
    return (a.episode_id) - (b.episode_id)
  })

  localStorage.setItem('data', JSON.stringify(dataFiltered))
}
