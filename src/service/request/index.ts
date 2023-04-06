import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { NETRequestConfig } from './type'

// 拦截器：蒙版loading/token/修改配置
/**
 * 两个难点：
 * 1. 拦截器进行精细控制
 *  > 全局拦截器
 *  > 实例拦截器
 *  > 单词请求拦截器
 *
 * 2. 响应结果拦截器
 */

class NETRequest {
  instance: AxiosInstance

  // request 实例 => axios的实例
  constructor(config: NETRequestConfig) {
    this.instance = axios.create(config) // config: 配置baseURL, timeout

    // 每个instance实例都添加拦截器
    // 请求
    this.instance.interceptors.request.use(
      config => {
        // 可以做loading， token
        console.log('全局请求成功拦截')

        return config
      },
      err => {
        console.log('全局请求失败拦截')

        return err
      }
    )
    // 响应
    this.instance.interceptors.response.use(
      res => {
        console.log('全局响应成功拦截')

        return res
      },
      err => {
        console.log('全局响应失败拦截')

        return err
      }
    )

    // 针对特定的ENTRequest实例添加拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.requestFailureFn
      )
      this.instance.interceptors.response.use(
        config.interceptors?.responseSuccessFn,
        config.interceptors?.responseFailureFn
      )
    }
  }

  // 封装网络请求的方法(如果第三方库不在维护便于换其他库)
  request<T = any>(config: NETRequestConfig<T>) {
    // 在request定义数据类型
    // 单次的请求成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config) // 修改原来的config
    }

    // 返回的Promise
    return new Promise<T>((resolve, reject) => {
      // 这里的泛型约束， 在定义接口的时候去设置
      this.instance
        .request<any, T>(config)
        .then(res => {
          // 单次响应的成功的拦截器
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res) // 在NETInterceptors这个里面也需要进行泛型约束
          }
          // res as any as T 但这样子不好
          resolve(res) // 直接as T可能转不成功
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get<T = any>(config: NETRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: NETRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: NETRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: NETRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default NETRequest
