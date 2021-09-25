import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '@/components/Header'
import s from './style.module.less'
import { useHistory } from 'react-router-dom'
import { RadarChart } from '@/components'
// import { Tabs } from 'zarm'
import 'zarm/dist/zarm.css'
import { Tabs } from 'antd-mobile'

const { Panel } = Tabs

const ResultsPage = props => {
  // const {} = props
  const history = useHistory()
  const [value, setValue] = useState(0)

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /* The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      console.log('ResultsPage componentDidMount,props=', props)

      // componentWillUnmount
      return () => {
        console.log('ResultsPage componentWillUnmount')
      }
    }, [])

  // render
  return <div className={s.page}>
    <Header title="问卷结果" />
    <div className={s.charts}>
      <RadarChart></RadarChart>
    </div>
     <div className={s.tabsDiv}>
       {/* <Tabs scrollable swipeable value={value} onChange={setValue}> */}
       {/*  <Panel title="选项卡1"> */}
       {/*    <div className={s.content}>选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡2"> */}
       {/*    <div className="content">选项卡2内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡3"> */}
       {/*    <div className="content">选项卡3内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡4"> */}
       {/*    <div className="content">选项卡4内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡5"> */}
       {/*    <div className="content">选项卡5内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡6"> */}
       {/*    <div className="content">选项卡6内容</div> */}
       {/*  </Panel> */}
       {/*  <Panel title="选项卡7"> */}
       {/*    <div className="content">选项卡7内容</div> */}
       {/*  </Panel> */}
       {/* </Tabs> */}
       <Tabs>
         <Tabs.TabPane title='超长的tab11111111' key='1'>
           <div className={s.content}>选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容 选项卡1内容</div>
         </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab22222' key='2'>
            <div className={s.content}>选项卡1内容 </div>
          </Tabs.TabPane>
          <Tabs.TabPane title='超长的tab3333' key='3'>
           3
          </Tabs.TabPane>
       </Tabs>
     </div>

  </div>
}

export default memo(ResultsPage)
