function formatMsgTime (timespan) {
  var dateTime = new Date(timespan)
  var year = dateTime.getFullYear() + ''
  var month = dateTime.getMonth() + 1 + ''
  var day = dateTime.getDate() + ''
  var hour = dateTime.getHours() + ''
  var minute = dateTime.getMinutes() + ''
  // 时间格式处理
  if (year.length === 1) {
    year = '0' + year
  }
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  if (hour.length === 1) {
    hour = '0' + hour
  }
  if (minute.length === 1) {
    minute = '0' + minute
  }
  //
  // var second = dateTime.getSeconds()
  var now = new Date()
  // var now_new = Date.parse(now.toDateString());  //typescript转换写法
  var nowNew = now.getTime()
  var milliseconds = 0
  var timeSpanStr

  milliseconds = nowNew - timespan
  // console.log("相差时间" +milliseconds, "now_new" + now_new + "timespan" + timespan);
  if (milliseconds <= 1000 * 60 * 1) {
    timeSpanStr = '刚刚'
  } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
    timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
  } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
  } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
    timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
  } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
    timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
  } else {
    timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
  }
  return timeSpanStr
}
module.exports = {
  formatMsgTime: formatMsgTime
}
