/**
 * vc数据获取类
 */
import base from './base'
import url from './url'
export default class vc extends base {
  static getInfo() {
    const _url = `${url.vc}`
    return this.get(_url)
  }
  static getInfoAll() {
    const _url = `${url.vcAll}`
    return this.get(_url)
  }
  static apply(param) {
    const _url = url.vc
    return this.post(_url, param)
  }
  static update(param) {
    const _url = url.vc
    return this.put(_url, param)
  }
}
