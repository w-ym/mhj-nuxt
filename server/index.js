import axios from 'axios'
import config from './config'

// if (process.server) {
//   config.baseURL = `https://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
// }
config.baseURL = process.env.baseUrl || 'http://localhost:8989/'
// @TODO
// config.baseURL = 'https://en-admin.goodvoice.com/'
// config.baseURL = 'http://47.111.123.34:18900/'
// config.baseURL = 'http://192.168.1.2:18888/'

const service = axios.create(config)

// POST 传参序列化
service.interceptors.request.use(
  (config) => {
    // if (config.method === 'post') config.data = qs.stringify(config.data)
    // request loading
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  (res) => {
    // store.dispatch('app/setLoading', false)
    return res.data
  },
  (error) => {
    // store.dispatch('app/setLoading', false)
    return Promise.reject(error)
  }
)

export default service
