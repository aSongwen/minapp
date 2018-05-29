/**
 * startup数据获取类
 */
import base from './base'
import url from './url'
export default class startup extends base {
  static getInfo(id) {
    const _url = `${url.startup}/${id}`
    return this.get(_url).then(data => data)
  }
  static apply(param) {
    const _url = url.startup
    return this.post(_url, param)
  }
}
