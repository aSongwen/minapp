import base from './base'
import url from './url'
export default class vc extends base {
  static getVcInfo() {
    const _url = `${url.homeVc}`
    return this.get(_url)
  }
  static getTechInfo() {
    const _url = `${url.homeTech}`
    return this.get(_url)
  }
}
