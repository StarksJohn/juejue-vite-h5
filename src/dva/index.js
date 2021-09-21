/**
 * import { dvaApp } from '@/dva'
 */
import { dvaApp as _dv } from 'react-cacheable-dva'
import _userModel from './userModel'

export const initDva = () => {
  console.log('dva initDva() ')
  return _dv([_userModel])
}

export const dvaApp = initDva()
export const userModel = _userModel
