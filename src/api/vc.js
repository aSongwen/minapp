/**
 * vc数据获取类
 */
import base from './base'
import url from './url'
export default class vc extends base {
  static getInfo(id) {
    const vcurl = `${url.vc}/${id}`
    return this.get(vcurl).then(data => data)
  }
  static apply(param) {
    const vcurl = url.vc
    return this.post(vcurl, param)
  }
}
