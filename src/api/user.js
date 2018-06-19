/**
 * 用户数据获取类
 */
import base from './base'
import url from './url'
export default class user extends base {
  // 关注别人
  static focusUser(uid) {
    const _url = `${url.focusUser}`
    return this.post(_url, { uid }).then(data => data)
  }
  static detailForUser(uid) {
    const _url = `${url.userDetail}`
    return this.get(_url, { uid }).then(data => data)
  }
  // 获取我关注的
  static myFocus() {
    const _url = `${url.myFocus}`
    return this.get(_url).then(data => data)
  }
  // 获取关注我的
  static focus() {
    const _url = `${url.focusUser}`
    return this.get(_url).then(data => data)
  }
}
