import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '@/components/Header'
import s from './style.module.less'
import { useHistory, useLocation } from 'react-router-dom'
import { Collapse, Cell, Radio } from 'zarm'
import qs from 'query-string'

const QuestionPage = props => {
  // const {} = props
  const history = useHistory()
  const [activeKey, setActiveKey] = useState('1')
  const location = useLocation()
  const { questions } = qs.parse(location.search)
  console.log('QuestionPage.jsx questions=', JSON.parse(questions))

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /* The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      console.log('QuestionPage componentDidMount,props=', props)

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
        中医学历来重视人的体质状态，在防病治病上，从具体的人出发，权衡干预措施，体现以人为本，因人制宜的思想。①所谓体质，是指人体生命过程中，在先天禀赋和后天获得的基础上所形成的形态结构、生理功能和心理状态方面综合的、相对稳定的固有特质，但同时具有动态可调性。②体质辨识即以人的体质为认知对象，从体质状态及不同体质分类的特性，把握其健康与疾病的整体要素与个体差异，制定防治原则，选择相应的治疗、预防、养生方法，从而进行“因人制宜”的干预，体质辨识是中医“治未病”的抓手，可为“治未病”提供方法工具和评估体系。
        体质分类：中医常见体质分九种，一种为平和，八种为偏颇，如：气虚质、阳虚质、阴虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质。
      </Collapse.Item>
    </Collapse>
     <Cell className={s.cell}>
      <Radio.Group>
        <div>发无法无法服务服务</div>
        <Radio value="0">选项一大钱大钱我</Radio>
        <Radio value="1">选项二带我去的</Radio>
        <Radio value="2">选项三授权定位群</Radio>
        <Radio value="2">选项三多少钱多少钱无所多群无</Radio>
      </Radio.Group>
     </Cell>
    <Cell className={s.cell}>
      <Radio.Group>
        <div>发无法无法服务服务</div>
        <Radio value="0">选项一大钱大钱我</Radio>
        <Radio value="1">选项二带我去的</Radio>
        <Radio value="2">选项三授权定位群</Radio>
        <Radio value="2">选项三多少钱多少钱无所多群无</Radio>
      </Radio.Group>
    </Cell>
  </div>
}

export default memo(QuestionPage)
