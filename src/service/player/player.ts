import myRequest from '..'

export function getSongDetail(ids: string) {
  return myRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: string) {
  return myRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
