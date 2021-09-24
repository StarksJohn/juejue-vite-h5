/**
 * stringTools.js
 * 给 String.prototype上添加的方法和属性，名字别和 系统方法或系统变量的名字重名，否则 所有 其他库调到系统方法或变量时，就会调你自己重写的方法,导致BUG
 * http://www.cnblogs.com/lhyhappy65/p/6061143.html js中字符串的操作
 * concat  slice    substring  substr  split
 */

/**
 * 判断字符串emailAddr是否为合法的email格式
 * 主要判断'@'及'.'是否出现，以及两者的位置
 * @param emailAddr 输入的email地址
 * @return true/false。
 */
export function emailCheck (emailAddr) {
  if (emailAddr == null || emailAddr.length < 2) return false

  // 需出现'@',且不在首字符.
  const aPos = emailAddr.indexOf('@', 1)

  if (aPos < 0) {
    return false
  }

  // '@'后出现'.',且不紧跟其后.
  if (emailAddr.indexOf('.', aPos + 2) < 0) {
    return false
  }

  return true
}

/**
 * 判断 字符串是否为 空、空格、null
 * http://www.jb51.net/article/86543.htm
 * @param str
 */
export function isNull (str) {
  if (str instanceof Number) {
    console.log('stringTools.js ', str, ' 不是 字符串类型')
    str = str.toString()
    console.log('stringTools.js ', str, ' 已转成 字符串类型')
  }
  return (
    !str ||
    str.length === 0 ||
    str === '' ||
    str.replace(/(^s*)|(s*$)/g, '').length === 0 ||
    new RegExp('^[ ]+$').test(str) ||
    typeof str === 'null' ||
    typeof str === 'undefined'
  )
}

/**
 * 检测 字符串是否全是 数字,字符串里可有 小数点
 * @param text
 * @returns {boolean}
 */
export function isAllNum (str) {
  // let b = true
  // for (let i = 0; i < val.length; i++) {
  //   let a = val.charAt(i)
  //   if (isNaN(a)) {
  //     b = false
  //     break
  //   }
  // }
  // return b

  console.log('stringTools.js isAllNum str=', str)
  const n = Number(str)
  if (!isNaN(n)) {
    console.log('stringTools.js isAllNum ok')
    return true
  }
  console.log('stringTools.js isAllNum false')

  return false
}

/**
 * https://www.cnblogs.com/mouseleo/p/12891426.html
 * @param str
 */
export function regularMatchesTheNumbers (str) {
  const num = parseFloat(str.replace(/[^\d]/g, ' '))
  console.log(
    'stringTools.js regularMatchesTheNumbers str=',
    str,
    ' num=',
    num
  )
  return num
}

export function isContainChinese (val) {
  let b = false
  for (let i = 0; i < val.length; i++) {
    const a = val.charAt(i)
    if (a.match(/[^\x00-\xff]/gi) != null) {
      b = true
    }
  }
  return b
}

export function encodeStringContainingChinese (str) {
  let res = str
  if (!isNull(str) && isContainChinese(str)) {
    res = encodeURI(str)
  }
  return res
}

/**
 * str 里 包含 base 字符串的 起始下标，不包含时返回 -1
 * @param str
 * @param text
 */
export function search (str, text) {
  return str.search(text)
}

/**
 * str1里是否包含str2，外部 不要直接用此方法，而是用里边的正则
 * https://www.cnblogs.com/ooo0/p/7741651.html  建议用正则
 * @param str1
 * @param str2
 * @returns {boolean}
 */
export function contain (str1, str2) {
  // indexOf: str第一次在str1里出现的下标
  // return str1.indexOf(str2) > 0
  //
  const str = '123'
  const reg = RegExp(/3/)
  if (str.match(reg)) {
    // 包含
  }
}

/**
 * 判断字符串中是否存在子字符串(不区分大小写)
 * @param str
 * @param subStr
 * @returns {*}
 */
export function coverString (str, subStr) {
  const reg = eval('/' + subStr + '/ig')
  return reg.test(str)
}

// 16进制数转10进制
export function ex16hex (value) {
  value = stripscript(value)
  value = value.replace('0x', '')
  let arr = value.split('')
  arr = arr.reverse()
  const len = arr.length
  let res = 0
  arr.map((v, i, array) => {
    const num = hex_change(v)
    console.log(num)
    res += muti16(num, i)
  })
  return res
}

// 返回 v 乘以 n 个 16 的积
export function muti16 (v, n) {
  let temp = v
  for (let i = 0; i < n; i++) {
    temp *= 16
  }
  return temp
}

// 过滤所有特殊字符
export function stripscript (s) {
  const pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r\n]"
  )
  let rs = ''
  for (let i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '')
  }
  return rs
}

// 字符转16进制数字
export function hex_change (v) {
  let res
  switch (v) {
    case 'a':
      res = 10
      break
    case 'b':
      res = 11
      break
    case 'c':
      res = 12
      break
    case 'd':
      res = 13
      break
    case 'e':
      res = 14
      break
    case 'f':
      res = 15
      break
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      res = Number(v)
      break
    default:
      res = 0
      break
  }
  return res
}

/**
 * 获取 字符串长度,区分中文和英文
 * 把双字节的替换成两个单字节的然后再获得长度
 * 英文的长度1,中文是2,表情是5,中文标点符号是2,英文标点符号是1
 * @param str
 * @returns {number}
 */
export function getBLen (str) {
  if (str == null) return 0
  if (typeof str !== 'string') {
    str += ''
  }
  return str.replace(/[^\x00-\xff]/g, '01').length
}
