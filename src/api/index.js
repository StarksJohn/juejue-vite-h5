import axios from './axios'
import { baseUrl } from '@/config'
import urls from './urls'
import { tool } from '@/tools'
import { Toast } from 'zarm'

const MODE = import.meta.env.MODE // 环境变量
export const get = axios.get
export const post = axios.post
export {
  urls
}

export const getUserInfo = async () => {
  // const { data } = await get(urls.userInfo)
  const [err, data] = await tool.to(get(urls.userInfo))
  console.log('api getUserInfo=', data, ' err=', err)
  return JSON.stringify(data) === '{}' ? Promise.reject(Error('无数据')) : Promise.resolve(data)
}

export const postUserInfo = async (payload) => {
  const p = { ...{ name: '', sex: '男', birthday: 'xxxx-xx-xx', height: 170, weight: 70, nationality: '汉族', marrital: '在婚', education: '本科', industry: '', familyMemberCount: 0, familyIncome: '5到10万元', local: '否' }, ...payload }
  console.log('api postUserInfo p=', p)
  // const { data } = await post(urls.userInfo, p)
  const [err, data] = await tool.to(post(urls.userInfo, p))
  console.log('api postUserInfo data=', data)
  Toast.show('修改成功')
  return JSON.stringify(data) === '{}' ? Promise.reject(Error('无数据')) : Promise.resolve(data)
}

/**
 * 提交问卷
 * @param payload :{
 *   id:问卷id
 *   data:{
 *     questionid: value // questionid: 每道题的_id ; value:每道题的options里的 某个选项的 value (1 | 2| 3 ...)
 *   }
 * }
 */
export const postPolls = async (payload) => {
  const [err, data] = await tool.to(post(`${urls.polls}/${payload.id}`, payload.data))
  console.log('api postPolls data=', data, 'err=', err)
  return JSON.stringify(data) === '{}' ? Promise.reject(Error('无数据')) : Promise.resolve(data)
}

/**
 *  import { get,post, typeMap ,urls} from '@/api'
 */
export const typeMap = {
  1: {
    icon: 'canyin'
  },
  2: {
    icon: 'fushi'
  },
  3: {
    icon: 'jiaotong'
  },
  4: {
    icon: 'riyong'
  },
  5: {
    icon: 'gouwu'
  },
  6: {
    icon: 'xuexi'
  },
  7: {
    icon: 'yiliao'
  },
  8: {
    icon: 'lvxing'
  },
  9: {
    icon: 'renqing'
  },
  10: {
    icon: 'qita'
  },
  11: {
    icon: 'gongzi'
  },
  12: {
    icon: 'jiangjin'
  },
  13: {
    icon: 'zhuanzhang'
  },
  14: {
    icon: 'licai'
  },
  15: {
    icon: 'tuikuang'
  },
  16: {
    icon: 'qita'
  }
}

export const REFRESH_STATE = {
  normal: 0, // 普通
  pull: 1, // 下拉刷新（未满足刷新条件）
  drop: 2, // 释放立即刷新（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5 // 加载失败
}

export const LOAD_STATE = {
  normal: 0, // 普通
  abort: 1, // 中止
  loading: 2, // 加载中
  success: 3, // 加载成功
  failure: 4, // 加载失败
  complete: 5 // 加载完成（无新数据）
}

export const imgUrlTrans = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `${MODE === 'development' ? 'http://localhost:7002' : baseUrl}${url}`
    return url
  }
}
