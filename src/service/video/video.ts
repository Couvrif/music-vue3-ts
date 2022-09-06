import myRequest from '..'

export function getTopMV(offset = 0, limit = 20) {
  return myRequest.get({
    url: '/top/mv',
    data: {
      limit,
      offset
    }
  })
}

export function getMVUrl(id: string) {
  return myRequest.get({
    url: '/mv/url',
    params: {
      id
    }
  })
}

export function getMVInfo(mvid: string) {
  return myRequest.get({
    url: '/mv/detail',
    params: {
      mvid
    }
  })
}

export function getMVRelated(id: string) {
  return myRequest.get({
    url: '/related/allvideo',
    params: {
      id
    }
  })
}
