import React, { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '@/components/Header'
import s from './style.module.less'
import { useHistory } from 'react-router-dom'
import { RadarChart } from '@/components'

const ResultsPage = props => {
  // const {} = props
  const history = useHistory()

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
  </div>
}

export default memo(ResultsPage)
