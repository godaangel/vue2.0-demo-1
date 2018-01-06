/**
 * 主要放置一些常用js处理库
 */

/**
 * 时间戳转日期
 * @Author   Warrenyang
 * @DateTime 2018-01-06
 * @param    {[type]}   value [时间戳]
 * @return   {[type]}         [日期]
 */
var timestampToDate = function(value){
  let now = new Date(parseInt(value));
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  if (month < 10) {
      month = "0" + month;
  }
  let date = now.getDate();
  if (date < 10) {
      date = "0" + date;
  }
  let hour = now.getHours();
  if (hour < 10) {
      hour = "0" + hour;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
      minute = "0" + minute;
  }
  let second = now.getSeconds();
  if (second < 10) {
      second = "0" + second;
  }
  return year + "-" + month + "-" + date + " " + hour + ":" + minute;
}

export default {
  timestampToDate
}