export function formatNumber(num: string | number) {
  num = Number(num)
  if (num == 0) {
    return num + ''
  } else if (num > 1 && num < 10000) {
    return num + ''
  } else if (num > 10000 && num < 10000000) {
    return (num / 10000).toFixed(1) + '万'
  } else {
    return (num / 10000000).toFixed(1) + '亿'
  }
}

export function formatDuration(num: number) {
  // 将毫秒转成秒
  num = num / 1000
  const minute = Math.floor(num / 60)
  const second = Math.floor(num) % 60
  return transformMinute(minute) + ':' + transformMinute(second)
}

// 处理时间格式
export function transformMinute(minute: number) {
  return ('00' + String(minute)).slice(String(minute).length)
}

// 歌词处理
const timeRule = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/g
export function transformWord(word: string) {
  const wordArr = word.split('\n')
  const newWordArr: any[] = []

  for (const item of wordArr) {
    const gtime = timeRule.exec(item) as Array<any>
    if (!gtime) continue
    const minute = gtime[1] * 60 * 1000
    const second = gtime[2] * 1000
    const msecond = gtime[3].length === 2 ? gtime[3] * 10 : gtime[3] * 1

    const time = minute + second + msecond
    const text = item.replaceAll(timeRule, '')
    newWordArr.push({ time, text })
  }
  return newWordArr
}

// 歌词匹配
export interface wordType {
  word?: string
  index?: string
}

export function matchWord(time: number, wordList: Array<any>): wordType {
  let word = wordList[wordList.length - 1].text
  let wordObj = {}
  for (const index in wordList) {
    if (wordList[index].time > time) {
      if (Number(index) === 0) {
        word = wordList[index].text
        wordObj = { word, index: 0 }
      } else {
        word = wordList[Number(index) - 1].text
        wordObj = { word, index: Number(index) - 1 }
      }

      break
    }
  }
  return wordObj
}
