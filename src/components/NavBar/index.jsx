import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'zarm'
import { useHistory, useLocation } from 'react-router-dom'
import CustomIcon from '../CustomIcon'
import s from './style.module.less'
import routes from '@/router'

/**
 * 底部导航栏 https://juejin.cn/book/6966551262766563328/section/6967228178846711816
 * 导航栏可以用在很多地方，映射到 PC 网页就是左侧侧边导航，道理都是相通的。
 * @param showNav
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState(useLocation().pathname)
  const history = useHistory()// 拿到路由实例 history
  console.log('NavBar history=', history)

  const chnageTab = (path) => {
    console.log('NavBar chnageTab path=', path)

    setActiveKey(path)
    history.push(path)
  }

  return (
    <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={chnageTab}>
        <TabBar.Item
          itemKey={routes.home.path}
          title={routes.home.name}
          icon={<CustomIcon type="zhangdan" />}
        />
        <TabBar.Item
          itemKey={routes.statistics.path}
          title={routes.statistics.name}
          icon={<CustomIcon type="tongji" />}
        />
        <TabBar.Item
          itemKey={routes.user.path}
          title={routes.user.name}
          icon={<CustomIcon type="wode" />}
        />
      </TabBar>
  )
}

NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar
