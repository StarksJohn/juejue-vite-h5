import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom'
import { ConfigProvider } from 'zarm'
import routes from '@/router'
import NavBar from '@/components/NavBar'
import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'
import { useCookies } from 'react-cookie'
import cookie from 'react-cookies'
import Cookies from 'js-cookie'
import { get, typeMap } from '@/api'

const App = () => {
  const { pathname } = useLocation()// 获取当前路径
  const needNav = [routes.home.path, routes.statistics.path, routes.user.path] // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false) // 是否展示 Nav
  const [cookies, setCookie] = useCookies([''])
  const { access_token } = useSelector((state) => state.userModel)
  console.log('App.jsx access_token=', access_token)
  console.log('useCookies==', cookies)
  console.log('Cookies.get==', Cookies.get())
  console.log('document.cookie=', document.cookie)
  console.log('cookie.loadAll=', cookie.loadAll())

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /* The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      console.log('app.jsx componentDidMount')
      // 对单独的 axios 请求做处理
      // get('//localhost:3000', {
      //   withCredentials: true
      // }).then((data) => {
      //   console.log('app.jsx data=', data)
      // })

      // componentWillUnmount
      return () => {
        console.log('app.jsx componentWillUnmount')
      }
    }, [])

  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname]) // [] 内的参数若是变化，便会执行上述回调函数

  return <ConfigProvider primaryColor={'#007fff'} locale={zhCN}>
    <>
      <Switch>
        {
          Object.values(routes).map(route => <Route exact key={route.path} path={route.path}>
            <route.component />
          </Route>)
        }
      </Switch>
      {/* <NavBar showNav={showNav} /> */}
    </>
  </ConfigProvider>
}

export default App
