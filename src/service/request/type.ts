// 针对AxiosRequestConfig配置进行扩展
import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 这里再次声明，单独使用的时候就没有限制了
interface NETInterceptors<T = AxiosResponse> {
  // requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig; // 这样有报错，不知原因
  requestSuccessFn?: (config: any) => any;
  requestFailureFn?: (err: any) => any;
  responseSuccessFn?: (res: T) => T;
  responseFailureFn?: (err: any) => any;
}

export interface NETRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: NETInterceptors<T>;
}
