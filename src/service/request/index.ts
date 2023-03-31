import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// 拦截器：蒙版loading/token/修改配置

// 针对AxiosRequestConfig配置进行扩展
interface NETInterceptors {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig // 原先类型是用的是AxiosRequestConfig 但是有用什么Axios什么什么Header报错，使用这个就好了
  ) => InternalAxiosRequestConfig;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse;
  responseFailureFn?: (err: any) => any;
}

interface NETRequestConfig extends AxiosRequestConfig {
  interceptors?: NETInterceptors;
}

class NETRequest {
  instance: AxiosInstance;

  // request 实例 => axios的实例
  constructor(config: NETRequestConfig) {
    this.instance = axios.create(config); // config: 配置baseURL, timeout

    // 每个instance实例都添加拦截器
    // 请求
    this.instance.interceptors.request.use(
      config => {
        // 可以做loading， token
        console.log("全局请求成功拦截");

        return config;
      },
      err => {
        console.log("全局请求失败拦截");

        return err;
      }
    );
    // 响应
    this.instance.interceptors.response.use(
      res => {
        console.log("全局响应成功拦截");

        return res;
      },
      err => {
        console.log("全局响应失败拦截");

        return err;
      }
    );

    // 针对特定的ENTRequest实例添加拦截器
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors?.requestSuccessFn,
        config.interceptors?.responseSuccessFn
      );
      this.instance.interceptors.response.use(
        config.interceptors?.requestFailureFn,
        config.interceptors?.responseFailureFn
      );
    }
  }

  // 封装网络请求的方法(如果第三方库不在维护便于换其他库)
  request(config: NETRequestConfig) {
    return this.instance.request(config);
  }

  get() {}
  set() {}
}

export default NETRequest;
