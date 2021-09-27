import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '@/components/Header'
import s from './style.module.less'
import { useHistory, useLocation } from 'react-router-dom'
import { Collapse, Cell, Radio, Pull } from 'zarm'
import qs from 'query-string'
import routes from '@/router'
import cx from 'classnames'
import { IconFont } from '@/components/CustomIcon'
import Empty from '@/components/Empty'
import { LOAD_STATE, REFRESH_STATE } from '@/api'
import { stringTools } from '@/tools'

const QuestionPage = props => {
  // const {} = props
  const history = useHistory()
  const [activeKey, setActiveKey] = useState('1')
  const location = useLocation()
  const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal) // 下拉刷新状态
  const [loading, setLoading] = useState(LOAD_STATE.normal) // 上拉加载状态
  const [list, setList] = useState([])
  const { questions } = qs.parse(location.search)
  console.log('QuestionPage.jsx questions=', JSON.parse(questions))

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /* The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      const sex = localStorage.getItem('sex')

      console.log('QuestionPage componentDidMount,props=', props, ' sex=', sex)
      const arr = []
      for (const arrKey in JSON.parse(questions)) {
        const item = JSON.parse(questions)[arrKey]
        if (!stringTools.isNull(item.sex) && item.sex === sex) {
          arr.push(item)
        } else if (stringTools.isNull(item.sex)) {
          arr.push(item)
        }
      }
      console.log('QuestionPage componentDidMount arr=', arr)
      setList(arr)

      // componentWillUnmount
      return () => {
        console.log('QuestionPage componentWillUnmount')
      }
    }, [])

  // render
  return <div className={s.page}>
    <Header title="问卷页" />
    <Collapse
      disabled
      activeKey={activeKey}
      animated={true}
      multiple={false}
      onChange={(activeKey) => {
        console.log('QuestionPage.jsx onChange activeKey=', activeKey)
        setActiveKey(`${activeKey}`)
      }}
    >
      <Collapse.Item key="1" title="中医体质分析">
        <div className={s.p1}>1
          中医学历来重视人的体质状态，在防病治病上，从具体的人出发，权衡干预措施，体现以人为本，因人制宜的思想。①所谓体质，是指人体生命过程中，在先天禀赋和后天获得的基础上所形成的形态结构、生理功能和心理状态方面综合的、相对稳定的固有特质，但同时具有动态可调性。②体质辨识即以人的体质为认知对象，从体质状态及不同体质分类的特性，把握其健康与疾病的整体要素与个体差异，制定防治原则，选择相应的治疗、预防、养生方法，从而进行“因人制宜”的干预，体质辨识是中医“治未病”的抓手，可为“治未病”提供方法工具和评估体系。
        </div>
        <div className={s.p1}> 2 体质分类：中医常见体质分九种，一种为平和，八种为偏颇，如：气虚质、阳虚质、阴虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质。</div>
      </Collapse.Item>
    </Collapse>
    <div className={s.contentWrap}>
      {
        list.length
          ? <Pull
            animationDuration={200}
            stayTime={400}
            refresh={{
              state: refreshing,
              handler: null
            }}
            load={{
              state: loading,
              distance: 200,
              handler: null
            }}
          >
            {
              list.map(({ question, options }, index) => {
                return (<Cell className={s.cell} key={index}>

                  <Radio.Group>
                     <div className={s.qusTitle}>{index + 1}: {question}</div>
                    {
                        Object.keys(options)?.length && Object.keys(options).map(
                          (value, index, array) => {
                            return <Radio key={`${question}+${index}`} value={`${question}+${index}`}>{value} </Radio>
                          }
                        )
                      }
                    </Radio.Group>
                  </Cell>)
              }
              )
            }
          </Pull>
          : <Empty />
      }
    </div>
  </div>
}

export default memo(QuestionPage)
