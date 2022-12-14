import myRequest from '..'

export function getMusicBanner(type = 0) {
  return myRequest.get({
    url: '/banner',
    data: {
      type
    }
  })
}

export function getPlaylistDetail(id: number) {
  return myRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getSongMenuList(cat = '全部', limit = 6, offset = 0): any {
  return myRequest.get({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongMenuTag() {
  return myRequest.get({
    url: '/playlist/hot'
  })
}
