/**
 * startup数据获取类
 */
import base from './base'
import url from './url'
export default class startup extends base {
  static getInfo() {
    const _url = `${url.startup}`
    return this.get(_url).then(data => data)
  }
  static getInfoAll() {
    const _url = `${url.startupAll}`
    return this.get(_url)
  }
  static apply(param) {
    const _url = url.startup
    return this.post(_url, param)
  }
  static update(param) {
    const _url = url.startup
    return this.put(_url, param)
  }
}
