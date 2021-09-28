import React, { useEffect, useRef, useState } from 'react'
import { Icon, Pull } from 'zarm'
import dayjs from 'dayjs'
import PopupType from '@/components/PopupType'
import PopupDate from '@/components/PopupDate'
import PopupAddBill from '@/components/PopupAddBill'
import Empty from '@/components/Empty'
import CustomIcon, { IconFont } from '@/components/CustomIcon'
import { get, REFRESH_STATE, LOAD_STATE, urls, getUserInfo } from '@/api'
import s from './style.module.less'
import cx from 'classnames'
import { useHistory } from 'react-router-dom'
import routes from '@/router'
import { tool } from '@/tools'
import constant from '@/constant/constant'

const Home = () => {
  const history = useHistory()
  const typeRef = useRef() // 账单类型 ref
  const monthRef = useRef() // 月份筛选 ref
  const addRef = useRef() // 添加账单 ref
  const [totalExpense, setTotalExpense] = useState(0) // 总支出
  const [totalIncome, setTotalIncome] = useState(0) // 总收入
  const [currentSelect, setCurrentSelect] = useState({}) // 当前筛选类型
  const [currentTime, setCurrentTime] = useState(dayjs().format('YYYY-MM')) // 当前筛选时间
  const [page, setPage] = useState(1) // 分页
  const [list, setList] = useState([
  ]) // 账单列表
  const [totalPage, setTotalPage] = useState(0) // 分页总数
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal) // 下拉刷新状态
  const [loading, setLoading] = useState(LOAD_STATE.normal) // 上拉加载状态
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    console.log('Home.jsx componentDidMount')

    getBillList().then() // 初始化

    getUserInfo().then((res) => {
      console.log('Home getUserInfo res=', res)
      setUserInfo(res)
    }).catch((e) => {
      console.log('Home getUserInfo e=', e)
    })//

    // componentWillUnmount
    return () => {
      console.log('Home.jsx componentWillUnmount')
    }
  }, [page, currentSelect, currentTime])

  const getBillList = async () => {
    // 下拉刷新，重制数据
    const [err, data] = await tool.to(get(urls.polls))
    // for (let i = 0; i < data.length; i++) {
    //   data[i].completed = false
    // }
    console.log('Home getBillList data=', data, ' err=', err)
    if (page === 1) {
      setList(data)
    } else {
      setList(list.concat(data))
    }
    // 上滑加载状态
    setLoading(LOAD_STATE.success)
    setRefreshing(REFRESH_STATE.success)
  }

  // 请求列表数据
  const refreshData = () => {
    setRefreshing(REFRESH_STATE.loading)
    if (page !== 1) {
      setPage(1)
    } else {
      getBillList()
    }
  }

  const loadData = () => {
    if (page < totalPage) {
      setLoading(LOAD_STATE.loading)
      setPage(page + 1)
    }
  }

  return <div className={s.home}>
    <div className={s.header} >
      请选择你要填写的问卷
      <IconFont
        iconClass={s.infoIcon}
        type={'icon-gerenxinxi'} onClick={(e) => {
          console.log('Home 个人信息按钮 onClick e=', e)
          history.push(routes.userinfo.path)
        }}/>
      <div className={s.divLine}></div>
    </div>
    <div className={s.contentWrap}>
      {
        list.length
          ? <Pull
            animationDuration={200}
            stayTime={400}
            refresh={{
              state: refreshing,
              handler: refreshData
            }}
            load={{
              state: loading,
              distance: 200,
              handler: loadData
            }}
          >
            {
              list.map(({
                completed = false,
                link = '',
                name = '',
                notes = '',
                order = 0,
                type = '',
                _id = '',
                questions = [],
                record = {}
              }, index) => {
                return <div key={index} className={s.cell} onClick={(e) => {
                  console.log('Home cell onClick e=', e, ' name=', name, ' userInfo=', userInfo, ' completed=', completed)
                  // if (constant.fakeData) {
                  //   history.push(`${routes.questionPage.path}?questions=${JSON.stringify(questions)}`)
                  // } else
                  if (!userInfo) {
                    history.push(`${routes.userinfo.path}?questions=${JSON.stringify(questions)}`)
                  } else {
                    !completed && history.push(`${routes.questionPage.path}?questions=${JSON.stringify(questions)}`)
                    completed && history.push(`${routes.resultsPage.path}?data=${JSON.stringify(record.result)}`)
                  }
                }}>
                    {/* <div className={s.img}></div> */}
                    <div className={s.midView}>
                      {/* title */}
                      <div className={cx({ [s.titleS]: completed, [s.titleW]: !completed })}
                      >
                        {name}
                      </div>
                      {/* text */}
                      <div className={cx({ [s.textS]: completed, [s.textW]: !completed })}
                      >
                        {notes}
                      </div>
                    </div>
                      {completed && <div className={s.doneView}>
                      <div className={s.doneText}>已完成
                         <IconFont
                          iconClass={s.doneIcon}
                          type={'icon-done'} />
                      </div>
                      </div>}
                     <div className={s.divLine}></div>
                  </div>
              }
              )
            }
          </Pull>
          : <Empty />
      }
      {userInfo && <div className={s.qrDiv}>
        <img className={s.qr} src={`/api/qr/${userInfo.userInfo.userIdentity}`} alt="" />
      </div>}

    </div>

  </div>
}

export default Home
