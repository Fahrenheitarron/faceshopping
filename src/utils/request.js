import axios from 'axios'
import { Toast } from 'cube-ui'
const ConfigBaseURL = 'http://118.89.215.148:8080'
let toast = null

// 使用create方法创建axios实例
export const Service = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
  toast = Toast.$create({
    txt: '加载中'
  })
  toast.show()
  return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
  toast.hide()
  return response.data
}, error => {
  const msg = error.Message !== undefined ? error.Message : ''
  toast = Toast.$create({
    txt: '网络错误' + msg,
    time: 2000
  })
  toast.hide()
  return Promise.reject(error)
})

export function getConfigsByProductId (type) {
  return Service({
    url: `api/v1/content/home/${type}`,
    method: 'get'
  })
}
