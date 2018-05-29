/**
 * vc数据获取类
 */
import base from './base'
import url from './url'
export default class vc extends base {
  static getInfo() {
    const vcurl = `${url.vc}`
    return this.get(vcurl)
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
