import axios from 'axios'
import { Toast } from 'zarm'

/**
 * https://juejin.cn/book/6966551262766563328/section/6967228597979316262 二次封装 axios
 * @type {string}
 */

/**
 * MODE 是一个环境变量，通过 Vite 构建的项目中，环境变量在项目中，可以通过 import.meta.env.MODE 获取，环境变量的作用就是判断当前代码运行在开发环境还是生产环境。
 * @type {string}
 */
const MODE = import.meta.env.MODE
export const baseURL = MODE === 'development' ? 'https://che.medi-plus.com.cn' : ''

/**
 * baseURL 是 axios 的配置项，它的作用就是设置请求的基础路径，后续我们会在项目实战中有所体现。配置基础路径的好处就是，当请求地址修改的时候，可以在此统一配置。
 * 用 /api 这样的请求地址。其实它就是为了 代理请求 而配置的。
 * @type {string}
 */
axios.defaults.baseURL = baseURL
/**
 * https://www.ruanyifeng.com/blog/2016/04/cors.html
 * 对所有 axios 请求做处理,是否让请求中携带 cookie
 * 指示是否应使用凭据发出跨站点访问控制请求
 * 当前请求为跨域类型时是否在请求中协带cookie,前端设置credentials属性后，要通知后端做允许，否则请求失败，状态200黑色
 */
axios.defaults.withCredentials = true

/**
 * 请求头的设置
 * @type {string}
 */
/**
 * https://www.ruanyifeng.com/blog/2016/04/cors.html
 * 是否允许发送Cookie
 * @type {boolean}
 */
// axios.defaults.headers['Access-Control-Allow-Credentials'] = true 貌似是后端设置此字段
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
/**
 * https://www.ruanyifeng.com/blog/2016/04/cors.html
 * 它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
 * 表示接受任意域名的请求
 * 如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。
 * https://blog.csdn.net/weixin_39605278/article/details/112329169 跨域请求携带cookie
 * @type {string}
 */
// axios.defaults.headers['Access-Control-Allow-Origin'] = 'https://che.medi-plus.com.cn'貌似是后端设置此字段

// Authorization 是我们在服务端鉴权的时候用到的，我们在前端设置好 token，服务端通过获取请求头中的 token 去验证每一次请求是否合法
// axios.defaults.headers.Authorization = `${localStorage.getItem('token') || null}`

// 配置 post 请求时，使用的请求体
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use((config) => {
  console.log('axios.js request config=', config)
  return config
}, error => {
  // Do something with request error
  console.log('axios.ts interceptors.request error=', error)
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  console.log('axios.js response res=', res)
  if (typeof res.data !== 'object') {
    // Toast.show('服务端异常！')
    return Promise.reject(res)
  }
  if (res.data.code !== 200) {
    if (res.data.msg) Toast.show(res.data.msg)
    if (res.data.code === 401) {
      // window.location.href = '/login'
    }
    if (res.data.code === 413) {
      Toast.show('图片不得超过 50kb')
    }
    return Promise.reject(res.data)
  }

  return res.data
}, (error) => {
  console.log('axios.js response error=', error)
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('')
})

export default axios
