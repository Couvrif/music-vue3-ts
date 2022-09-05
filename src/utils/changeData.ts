export function formatNumber(num: string | number) {
  console.log('ssssssssssssssss', num)

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
