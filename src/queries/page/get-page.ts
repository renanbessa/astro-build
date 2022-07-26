export const GET_PAGE = `
  query GET_PAGE($uri: String) {
    page: pageBy(uri: $uri) {
      content
    }
  }
`
