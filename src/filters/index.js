import * as utils from '@/tools/Tool'
import moment from "moment";

/**
 * 定义一个全局过滤器实现日期格式化
 * 使用moment.js这个日期格式化类库实现日期的格式化功能
 */
/** 获取相对时间 如：5天前、1个月前 */
export const getMoment = date => {
  return moment(date).fromNow();
};

/** 获取相对时间 如：5天前、1个月前 */
export const getDateWithWeek = (date, format, prefix) => {
  let weekIndex = moment(date).format("E");
  switch (weekIndex) {
    case 1:
      return dateFormat(date, format) + prefix + '一'
    case 2:
      return dateFormat(date, format) + prefix + '二'
    case 3:
      return dateFormat(date, format) + prefix + '三'
    case 4:
      return dateFormat(date, format) + prefix + '四'
    case 5:
      return dateFormat(date, format) + prefix + '五'
    case 6:
      return dateFormat(date, format) + prefix + '六'
    case 7:
      return dateFormat(date, format) + prefix + '日'
  }
};

/** 添加多少秒 */
export const addSecond = (date, second, format) => {
  return moment(date)
    .add(second, "seconds")
    .format(format);
};

/** 减少多少秒 */
export const subtractSecond = (date, second, format) => {
  return moment(date)
    .subtract(second, "seconds")
    .format(format);
};

/** 添加多少天 */
export const addDay = (date, day, format) => {
  return moment(date)
    .add(day, "days")
    .format(format);
};

/** 减少多少天 */
export const subtractDay = (date, day, format) => {
  return moment(date)
    .subtract(day, "days")
    .format(format);
};

/** 添加多少月 */
export const addMonth = (date, month, format) => {
  return moment(date)
    .add(month, "months")
    .format(format);
};

/** 减少多少月 */
export const subtractMonth = (date, month, format) => {
  return moment(date)
    .subtract(month, "months")
    .format(format);
};

/** 添加多少年 */
export const addYear = (date, year, format) => {
  return moment(date)
    .add(year, "years")
    .format(format);
};

/** 减少多少年 */
export const subtractYear = (date, year, format) => {
  return moment(date)
    .subtract(year, "years")
    .format(format);
};

/** 格式化时间 */
export const dateFormat = (date, format) => {
  // 使用moment.js这个日期格式化类库实现日期的格式化功能
  return utils.defaultValue(date, false) ? moment(date).format(format) : "";
};

/** 将时间字符串转换为对象 */
export const getMomentObject = (date, format) => {
  return utils.defaultValue(date, false) ? moment(date, format) : null;
};

/** 涉及到业务的类型 枚举过滤器 开始 */

export const userType = (value) => {
  switch (value) {
    case "PERSON":
      return (value = "个人");
    case "ENTERPRISE":
      return (value = "企业");
    case "ORG":
      return (value = "社团");
    default:
      return (value = "-");
  }
}

export const idType = value => {
  switch (value) {
    case "JMSFZ":
      return (value = "居民身份证");
    case "GAJMLWDLTXZ":
      return (value = "港澳居民来往内地通行证");
    case "TWJMLWDLTXZ":
      return (value = "台湾居民来往大陆通行证");
    case "PASSPORT":
      return (value = "普通护照");
    case "WJHZ":
      return (value = "外交护照");
    case "GWHZ":
      return (value = "公务护照");
    case "YGPTHZ":
      return (value = "因公普通护照");
    case "TYXYDM":
      return (value = "社会统一信用代码");
    case "GATJZZ":
      return (value = "港澳台居住证");
    default:
      return (value = "-");
  }
}

/** 涉及到业务的类型 枚举过滤器 结束 */
