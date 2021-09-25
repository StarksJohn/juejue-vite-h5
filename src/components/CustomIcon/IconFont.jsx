import React, { useEffect, useRef, useState, useMemo, memo, useCallback, forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import CustomIcon from '@/components/CustomIcon'
import s from './style.module.less'

IconFont.propTypes = {
  iconClass: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func
}
//
// CustomIcon.defaultProps = {}

/**
 * import {IconFont} from '@/components/CustomIcon'
 * PureComponent
 * @param props
 * @param parentRef
 * @returns {*}
 * @constructor
 */
function IconFont ({
  iconClass, type, onClick
}, parentRef) {
  console.log('CustomIcon iconClass=', iconClass)
  console.log('CustomIcon type=', type)

  /**
   * componentDidMount && componentWillUnmount
   */
  useEffect(
    /* The async keyword cannot be added to the first parameter https://juejin.im/post/6844903985338400782#heading-27 */
    () => {
      // todo

      // componentWillUnmount
      return () => {
      }
    }, [])

  /**
   * Methods of child components that can be directly called by the parent component
   */
  // useImperativeHandle(parentRef, () => ({}), [])

  /*
  componentDidUpdate
  */
  useEffect(() => {
  })

  // render
  return <div className={iconClass}>
    <CustomIcon type={type} />
    {onClick && <div className={s.onClickDiv} onClick={(e) => {
      console.log('IconFont.jsx onclick e=', e)
      onClick(e)
    }}></div>}
  </div>
}

export default memo(IconFont)
