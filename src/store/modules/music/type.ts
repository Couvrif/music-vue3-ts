interface songInfo {
  id: number
  name: string
  picUrl: string
  [propNames: string]: any
}

interface songPerson {
  id: number
  name: string
}

export interface songList {
  al: songInfo
  ar: songPerson[]
  [propNames: string]: any
}
