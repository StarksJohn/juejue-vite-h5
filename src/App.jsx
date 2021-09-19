import React, { useEffect, useState } from 'react'
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

const App = () => {
  const { pathname } = useLocation()// 获取当前路径
  const needNav = [routes.home.path, routes.statistics.path, routes.user.path] // 需要底部导航栏的路径
  const [showNav, setShowNav] = useState(false) // 是否展示 Nav

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
      <NavBar showNav={showNav} />
    </>
  </ConfigProvider>
}

export default App
