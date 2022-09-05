interface songInfo {
  id: number
  name: string
  picUrl: string
  [propNames: string]: any
}

export interface songPerson {
  id: number
  name: string
}

export interface songList {
  name: string
  al: songInfo
  ar: songPerson[]
  [propNames: string]: any
}

export interface peakSongListType<T> {
  id: string
  peakName: string
  coverImgUrl: string
  playCount: string
  peakList: Array<T>
}

// 菜单类型
export interface menuType {
  coverImgUrl: string
  playCount: number
  name: string
  [propNames: string]: any
}
