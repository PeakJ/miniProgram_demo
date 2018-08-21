const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 *获取URL指定KEY的值
 * @param {string} url
 * @param {string} key
 */
const getQueryString = (url,key) => {
  var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
  var paramStr = url.substr(url.indexOf('?')+1);
  var r = paramStr.match(reg);
  if(r!=null){
      return  unescape(r[2]);
  }
  return null;
}

module.exports = {
  formatTime: formatTime,
  getQueryString
}
