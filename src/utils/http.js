import wepy from 'wepy'
import { getStore } from 'wepy-redux'
import { asyncToken } from '../store/actions/token'
// HTTP工具类
export default class http {
  static async request (method, url, data, loading = true) {
    const store = getStore()
    const state = store.getState()
    let storeToken = ''
    // 从store里取token
    if (state.token.token) {
      try {
        const token = await wepy.getStorage({key: 'token'})
        storeToken = token.data
        store.dispatch(asyncToken(token.data))
      } catch (err) {
        // 取出token失败执行
      }
    }

    const param = {
      url: url,
      method: method,
      data: data,
      header: {
        'authorization': `Bearer ${state.token.token || storeToken}`
      }
    }
    if (loading) {
      // Tips.loading();
    }
    console.info(`[http]request url=${url}`)
    const res = await wepy.request(param)
    return res.data
    // if (this.isSuccess(res)) {
    //   return res.data
    // } else {
    //   throw this.requestException(res)
    // }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const wxCode = res.statusCode
    const serverCode = res.data.code
    return wxCode === 200 && serverCode === 20000
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    if (serverData) {
      error.serverCode = wxData.code
      error.message = serverData.message
      error.serverData = serverData
    }
    return error
  }

  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }

  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }

  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }

  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
