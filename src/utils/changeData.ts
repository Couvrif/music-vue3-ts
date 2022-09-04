export function formatNumber(num: number) {
  num = Number(num)
  if (num == 0) {
    return num + ''
  } else if (num > 1 && num < 10000) {
    return num + ''
  } else {
    return (num / 10000).toFixed(1) + '万'
  }
}
