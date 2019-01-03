import Mock from 'mockjs';

// 配置mock路径
require.config({
    paths: {
        mock: '/mock'
    }
});

Mock.mock('/api/dynamic_data', {
    'age|1-100': 100
});

/**
 * Mock
 * https://github.com/nuysoft/Mock/wiki/Syntax-Specification
 *
 * 数据模板：
 * '属性名name|生成规则rule': 属性值value
 * 属性名 和 生成规则 之间用竖线 | 分隔。
 * 生成规则是可选的，有7种格式：生成规则的含义需要依赖属性值的类型才能确定
 * i. 'name|min-max': value
 * ii. 'name|count': value
 * iii. 'name|min-max.dmin-dmax': value
 * iv. 'name|min-max.dcount': value
 * v. 'name|count.dmin-dmax': value
 * vi. 'name|count.dcount': value
 * vii. 'name|+step': value
 * 属性值中可以含有@占位符
 * 属性值 还指定了最终值的初始值和类型。
 *
 * Mock.mock(rurl?, rtype?, template|function(options))
 * rurl:可选。表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。
 * rtype:可选。表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等。
 * template:可选。表示数据模板，可以是对象或字符串。
 * function(options):可选。表示用于生成响应数据的函数。
 *
 * Mock.setup(settings)
 * 配置拦截 Ajax 请求时的行为。支持的配置项有：timeout。
 *
 * Mock.Random 是一个工具类，用于生成各种随机数据。
 * Basic: boolean, natural, integer, float, character, string, range, date, time, datetime, now
 * Image: image, dataImage
 * Color: color, hex, rgb, rgba, hsl
 * Text: paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
 * Name: first, last, name, cfirst, clast, cname
 * Web: url, protocol, domain, email, ip, tld
 * Address: region, province, city, county, zip
 * Helper: capitalize, upper, lower, pick, shuffle
 * Miscellaneous: guid, id, increment
 *
 */

 /**
  * 生成规则和示例：
  * 1. 属性值是字符串 String
  * 'name|min-max': string 通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
  * 'name|count': string 通过重复 string 生成一个字符串，重复次数等于 count。
  * 2. 属性值是数字 Number
  * 'name|+1': number 属性值自动加 1，初始值为 number。
  * 'name|min-max': number 生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。
  * 'name|min-max.dmin-dmax': number 生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
  * 3. 属性值是布尔型 Boolean
  * 'name|1': boolean 随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2
  * 'name|min-max': value 随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。
  * 4. 属性值是对象 Object
  * 'name|count': object 从属性值 object 中随机选取 count 个属性。
  * 'name|min-max': object 从属性值 object 中随机选取 min 到 max 个属性。
  * 5. 属性值是数组 Array
  * 'name|1': array 从属性值 array 中随机选取 1 个元素，作为最终值。
  * 'name|+1': array 从属性值 array 中顺序选取 1 个元素，作为最终值。
  * 'name|min-max': array 通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
  * 'name|count': array 通过重复属性值 array 生成一个新数组，重复次数为 count。
  * 6. 属性值是函数 Function
  * 'name': function 执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
  * 7. 属性值是正则表达式 RegExp
  * 'name': regexp 根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。
  */
