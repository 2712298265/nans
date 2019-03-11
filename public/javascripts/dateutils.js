
/**
 * 获取指定当前时间多少小时后的时间
 * @param {*} num 指定多少小时  获取当前时间两小时后  2
 * @return Date类型
 */
function getSpecifyTime(num){
    return new Date(new Date().getTime()+ (1000 * 60 * 60 * num));
}

/**
 * 毫秒转日期时间
 * @param {*} datetime 毫秒数
 * @return string 日期字符串 列如：2019-3-11 15:28:25
 */
function getdataTimeToString(datetime){
    let date = new Date(datetime);
    let min = parseInt(date.getMinutes()) < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = parseInt(date.getSeconds()) < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + min + ':' + sec;
}

/**
 * 毫秒转日期
 * @param {*} datetime 毫秒数
 * @return string 日期字符串 列如：2019-3-11
 */
function getdataToString(datetime){
    let date = new Date(datetime);
    let datetemp = parseInt(date.getDate()) < 10 ? '0' + date.getDate() : date.getDate() ;
    return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + datetemp ;
}

/**
 * 字符串转日期  yyyy-MM-dd
 * @param {*} dateString 日期字符串 列如：2019-3-11
 */
function convertDateFromString(dateString) {
    if (dateString) { 
    var date = new Date(dateString.replace(/-/,"/")) 
    return date;
    }
}

module.exports = {
    getSpecifyTime,getdataTimeToString
}
