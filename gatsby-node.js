exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/news/)) {
    page.matchPath = `/news/*`
    createPage(page)
  }

  if (page.path.match(/^\/news-search/)) {
    page.matchPath = `/news-search/*`
    createPage(page)
  }
}


// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions
//   if (page.path.match(/^\/news-search/)) {
//     page.matchPath = `/news-search/*`
//     createPage(page)
//   }
// }