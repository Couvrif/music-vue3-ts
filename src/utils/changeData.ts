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
  const zsecond = Math.floor(num / 1000)
  const allTime = (zsecond / 60).toFixed(1).split('.')
  const newMinute = transformMinute(allTime[0])
  const newSecond = transformSecond(allTime[1])
  console.log(newMinute)
  return newMinute + ':' + newSecond
}

// 处理分钟
export function transformMinute(minute: string) {
  const ArrMin = minute.split('')
  if (ArrMin.length === 1) {
    if (minute === '0') {
      return '00'
    } else {
      return '0' + minute
    }
  } else {
    return minute
  }
}

// 处理秒
export function transformSecond(sec: string) {
  if (sec === '0') {
    return '00'
  } else {
    return String((Number(sec) * 60) / 10)
  }
}
