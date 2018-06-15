/**
 * 用户数据获取类
 */
import base from './base'
import url from './url'
export default class user extends base {
  static focusUser(uid) {
    const _url = `${url.focusUser}`
    return this.post(_url, { uid }).then(data => data)
  }
}
