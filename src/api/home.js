import base from './base'
import url from './url'
export default class vc extends base {
  static getInfo() {
    const _url = `${url.homeVc}`
    return this.get(_url)
  }
}
