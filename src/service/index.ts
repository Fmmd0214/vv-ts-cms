import { BASE_URL, TIME_OUT } from './config'
import NETRequest from './request'

export const netRequest = new NETRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

// 自定义路由拦截的
export const netRequest2 = new NETRequest({
  // 该对象是config
  baseURL: '8080',
  timeout: 2000,

  interceptors: {
    requestSuccessFn: config => {
      console.log('针对自定义路由请求成功拦截接口')
      return config
    },
    requestFailureFn: err => {
      console.log('针对自定义路由请求失败拦截接口')
      return err
    },
    responseSuccessFn: res => {
      console.log('针对自定义路由响应成功拦截接口')
      return res
    },
    responseFailureFn: err => {
      console.log('针对自定义路由响应失败拦截接口')
      return err
    },
  },
})
