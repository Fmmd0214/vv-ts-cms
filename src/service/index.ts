import { BASE_URL, TIME_OUT } from './config'
import NETRequest from './request'

export const netRequest = new NETRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})
