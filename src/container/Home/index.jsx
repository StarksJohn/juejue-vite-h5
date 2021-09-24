import React, { useEffect, useRef, useState } from 'react'
import { Icon, Pull } from 'zarm'
import dayjs from 'dayjs'
import PopupType from '@/components/PopupType'
import PopupDate from '@/components/PopupDate'
import PopupAddBill from '@/components/PopupAddBill'
import Empty from '@/components/Empty'
import CustomIcon, { IconFont } from '@/components/CustomIcon'
import { get, REFRESH_STATE, LOAD_STATE, urls } from '@/api'
import s from './style.module.less'
import cx from 'classnames'
import { useHistory } from 'react-router-dom'
import routes from '@/router'

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
    {
      name: '问卷一',
      notes: '一个很厉害的问卷',
      type: 'link',
      link: 'https:\/\/www.baidu.com',
      completed: false// mathTools.randomNums(0, 1) === 1
    }
    // {
    //   name: '问卷二',
    //   notes: '一个很厉害的问卷',
    //   type: 'link',
    //   link: 'https:\/\/www.baidu.com'
    // },
    // {
    //   name: '问卷三',
    //   notes: '这个是一个表单问卷',
    //   type: 'form',
    //   id: 1,
    //   completed: true
    // }
  ]) // 账单列表
  const [totalPage, setTotalPage] = useState(0) // 分页总数
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal) // 下拉刷新状态
  const [loading, setLoading] = useState(LOAD_STATE.normal) // 上拉加载状态

  useEffect(() => {
    console.log('Home.jsx componentDidMount')

    getBillList().then() // 初始化

    // componentWillUnmount
    return () => {
      console.log('Home.jsx componentWillUnmount')
    }
  }, [page, currentSelect, currentTime])

  const getBillList = async () => {
    // const { data } = await get(`/api/bill/list?date=${currentTime}&type_id=${currentSelect.id || 'all'}&page=${page}&page_size=5`)
    // 下拉刷新，重制数据
    const { data } = await get(urls.polls)
    console.log('Home getBillList data=', data)
    if (page === 1) {
      setList(data)
    } else {
      setList(list.concat(data))
    }
    // setTotalExpense(data.totalExpense.toFixed(2))
    // setTotalIncome(data.totalIncome.toFixed(2))
    // setTotalPage(data.totalPage)
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

  // 添加账单弹窗
  const toggle = () => {
    typeRef.current && typeRef.current.show()
  }
  // 选择月份弹窗
  const monthToggle = () => {
    monthRef.current && monthRef.current.show()
  }
  // 添加账单弹窗
  const addToggle = () => {
    addRef.current && addRef.current.show()
  }

  // 筛选类型
  const select = (item) => {
    setRefreshing(REFRESH_STATE.loading)
    setPage(1)
    setCurrentSelect(item)
  }
  // 筛选月份
  const selectMonth = (item) => {
    setRefreshing(REFRESH_STATE.loading)
    setPage(1)
    setCurrentTime(item)
  }

  return <div className={s.home}>
    <div className={s.header}>
      请选择你要填写的问卷
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
                _id = ''
              }, index) => {
                return <div key={index} className={s.cell} onClick={(e) => {
                  console.log('Home cell onClick e=', e, ' name=', name)
                  history.push(routes.userinfo.path)
                }}>
                    <div className={s.img}></div>
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
    </div>
    {/* <div className={s.add} onClick={addToggle}><CustomIcon type='tianjia' /></div> */}
    <PopupType ref={typeRef} onSelect={select} />
    <PopupDate ref={monthRef} mode="month" onSelect={selectMonth} />
    <PopupAddBill ref={addRef} onReload={refreshData} />
  </div>
}

export default Home
