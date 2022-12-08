// 存放工具函数
// 判断是否是微信打开
function isWeixinBrowser() {
    let agent = navigator.userAgent.toLowerCase();
    if (agent.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  }

import { Message, MessageBox } from "element-ui";

/*
 * 判断str是否在data中
 */
export function isInArr(str, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == str) {
        return true;
        }
    }
    return false;
}

/*
   * 判断是否为undefined或者空
   * 若是，则返回true
   * 若不是，则返回false
   */
export function isEmpty(value) {
    if (value == undefined || value == "" || value == null) {
        return true;
    } else {
        return false;
    }
}
/*
* 判断是否为空或为0
*/
export function isEmptyOrZero(value) {
    if (value == undefined || value == "" || value == null || value === 0 || value === "0") {
        return true;
    } else {
        return false;
    }
}
/*
* 判断是否不为空
*/
export function isNotEmpty(value) {
    return !isEmpty(value);
}

/*
* 判断是否为undefined或者空
* 若是，则返回默认值""或null
* 若不是，则返回原值
*/
export function defaultValue(value, result) {
    if (value == undefined || value == "" || value == null) {
        return result;
    } else {
        return value;
    }
}


// 新窗口打开外链接
export function openBrowser(url) {
    window.open(url, "_blank");
}
/**
 * Message 方法封装
 */
export function success(message) {
    Message.closeAll();   //消息提示每次只出现一个
    // Message.success(message);
    Message.success({
        message: message,
        offset: 190,
        showClose: true,
        // duration: 0
    });
}
export function error(message) {
    Message.closeAll();
    // Message.error(message);
    Message.error({
        message: message,
        offset: 190,
        showClose: true,
        // duration: 0
    });
}
export function info(message) {
    Message.closeAll();
    // Message.info(message);
    Message.info({
        message: message,
        offset: 190,
        showClose: true,
        // duration: 0
    });
}
export function warning(message) {
    Message.closeAll();
    // Message.warning(message);
    Message.warning({
        message: message,
        offset: 190,
        showClose: true,
        // duration: 0
    });
}

/**
 * MessageBox confirm 方法封装
 */
export function confirm(title, callBack) {
    MessageBox.confirm(title, "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        callBack();
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * MessageBox confirm 方法封装
 * 消息内容可为html
 */
export function confirmHtml(title, callBack) {
    MessageBox.confirm(title, "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true
    }).then(() => {
        callBack();
    })
    .catch(error => {
        console.log(error);
    });
}

/**
 * 金额转换成人民币大写
 * @param {Object} currencyDigits
 * @return {val}
 */
export function convertCurrency(currencyDigits) {
    // Constants:
    var MAXIMUM_NUMBER = 99999999999.99;
    // Predefine the radix characters and currency symbols for output:
    var CN_ZERO = "零";
    var CN_ONE = "壹";
    var CN_TWO = "贰";
    var CN_THREE = "叁";
    var CN_FOUR = "肆";
    var CN_FIVE = "伍";
    var CN_SIX = "陆";
    var CN_SEVEN = "柒";
    var CN_EIGHT = "捌";
    var CN_NINE = "玖";
    var CN_TEN = "拾";
    var CN_HUNDRED = "佰";
    var CN_THOUSAND = "仟";
    var CN_TEN_THOUSAND = "万";
    var CN_HUNDRED_MILLION = "亿";
    var CN_DOLLAR = "元";
    var CN_TEN_CENT = "角";
    var CN_CENT = "分";
    var CN_INTEGER = "整";

    // Variables:
    var integral; // Represent integral part of digit number.
    var decimal; // Represent decimal part of digit number.
    var outputCharacters; // The output result.
    var parts;
    var digits, radices, bigRadices, decimals;
    var zeroCount;
    var i, p, d;
    var quotient, modulus;

    // Validate input string:
    if (isEmpty(currencyDigits)) {
        Message.warning("价格不能为空!");
        return "";
    }
    currencyDigits = currencyDigits.toString();
    if (currencyDigits.match(/[^,.\d]/) != null) {
        Message.warning("价格不能包含非法字符!");
        return "";
    }
    if (
        currencyDigits.match(
        /^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/
        ) == null
    ) {
        Message.warning("价格格式不正确!");
        return "";
    }

    // Normalize the format of input digits:
    currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
    currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
    // Assert the number is not greater than the maximum number.
    if (Number(currencyDigits) > MAXIMUM_NUMBER) {
        Message.warning("您的价格超出最大范围!");
        return "";
    }

    // Process the coversion from currency digits to characters:
    // Separate integral and decimal parts before processing coversion:
    parts = currencyDigits.split(".");
    if (parts.length > 1) {
        integral = parts[0];
        decimal = parts[1];
        // Cut down redundant decimal digits that are after the second.
        decimal = decimal.substr(0, 2);
    } else {
        integral = parts[0];
        decimal = "";
    }
    // Prepare the characters corresponding to the digits:
    digits = new Array(
        CN_ZERO,
        CN_ONE,
        CN_TWO,
        CN_THREE,
        CN_FOUR,
        CN_FIVE,
        CN_SIX,
        CN_SEVEN,
        CN_EIGHT,
        CN_NINE
    );
    radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
    bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
    decimals = new Array(CN_TEN_CENT, CN_CENT);
    // Start processing:
    outputCharacters = "";
    // Process integral part if it is larger than 0:
    if (Number(integral) > 0) {
        zeroCount = 0;
        for (i = 0; i < integral.length; i++) {
        p = integral.length - i - 1;
        d = integral.substr(i, 1);
        quotient = p / 4;
        modulus = p % 4;
        if (d == "0") {
            zeroCount++;
        } else {
            if (zeroCount > 0) {
            outputCharacters += digits[0];
            }
            zeroCount = 0;
            outputCharacters += digits[Number(d)] + radices[modulus];
        }
        if (modulus == 0 && zeroCount < 4) {
            outputCharacters += bigRadices[quotient];
        }
        }
        outputCharacters += CN_DOLLAR;
    }
    // Process decimal part if there is:
    if (decimal != "") {
        for (i = 0; i < decimal.length; i++) {
        d = decimal.substr(i, 1);
        if (d != "0") {
            outputCharacters += digits[Number(d)] + decimals[i];
        }
        }
    }
    // Confirm and return the final output string:
    if (outputCharacters == "") {
        outputCharacters = CN_ZERO + CN_DOLLAR;
    }
    if (decimal == "") {
        outputCharacters += CN_INTEGER;
    }
    return outputCharacters;
}



/**
 * moment 时间格式化方法封装 开始
 */
//引入 全局过滤器
import * as Filter from "@/filters/index";

/** 获取相对时间 如：5天前、1个月前 */
export function getMoment(date) {
    return Filter.getMoment(date);
}

/** 获取带星期几的日期字符串 */
export function getDateWithWeek(date, format, prefix) {
    return Filter.getDateWithWeek(date, format, prefix);
}

/** 添加多少秒 */
export function addSecond(date, second, format) {
return Filter.addSecond(date, second, format);
}
/** 减少多少秒 */
export function subtractSecond(date, second, format) {
return Filter.subtractSecond(date, second, format);
}
/** 添加多少天 */
export function addDay(date, day, format) {
return Filter.addDay(date, day, format);
}
/** 减少多少天 */
export function subtractDay(date, day, format) {
return Filter.subtractDay(date, day, format);
}

/** 添加多少月 */
export function addMonth(date, month, format) {
return Filter.addMonth(date, month, format);
}
/** 减少多少月 */
export function subtractMonth(date, month, format) {
return Filter.subtractMonth(date, month, format);
}

/** 添加多少年 */
export function addYear(date, year, format) {
return Filter.addYear(date, year, format);
}
/** 减少多少年 */
export function subtractYear(date, year, format) {
return Filter.subtractYear(date, year, format);
}

/** 格式化时间 */
export function dateFormat(date, format) {
return Filter.dateFormat(date, format);
}
/** 将时间字符串转换为对象 */
export function getMomentObject(date, format) {
return Filter.getMomentObject(date, format);
}
/**
 * moment 时间格式化方法封装 结束
 */
