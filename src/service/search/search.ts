import myRequest from '..'

export function getSearchHot(): any {
  return myRequest.get({
    url: '/search/hot'
  })
}

export function getSearchSuggest(keywords: any) {
  return myRequest.get({
    url: '/search/suggest',
    params: {
      keywords,
      type: 'mobile'
    }
  })
}

export function getSearchResult(keywords: any) {
  return myRequest.get({
    url: '/search',
    params: {
      keywords
    }
  })
}
