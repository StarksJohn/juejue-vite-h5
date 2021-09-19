
/**
 * https://juejin.cn/book/6966551262766563328/section/6967228597979316262
 * 在 development 环境下，用 /api 这样的请求地址,为了代理请求
 * @type {string}
 */
const MODE = import.meta.env.MODE // 环境变量

export const baseUrl = MODE === 'development' ? '/api' : 'http://api.chennick.wang'
