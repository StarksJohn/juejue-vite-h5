// router/index.js
import Home from '@/container/Home'
import Data from '@/container/Data'
import User from '@/container/User'
import Login from '@/container/Login'
import Detail from '@/container/Detail'
import Account from '@/container/Account'
import About from '@/container/About'
import UserInfo from '@/container/UserInfo'
import QuestionPage from '@/container/QuestionPage/QuestionPage'

/**
 * import routes from '@/router'
 */
const routes = {
  home: {
    path: '/',
    component: Home,
    name: '账单'
  },
  statistics: {
    path: '/data',
    component: Data,
    name: '统计'
  },
  user: {
    path: '/user',
    component: User,
    name: '我的'
  },
  login: {
    path: '/login',
    component: Login
  },
  detail: {
    path: '/detail',
    component: Detail
  },
  account: {
    path: '/account',
    component: Account
  },
  about: {
    path: '/about',
    component: About
  },
  userinfo: {
    path: '/userinfo',
    component: UserInfo
  },
  questionPage: {
    path: '/questionPage',
    component: QuestionPage
  }

}

export default routes
