import base from './base'
import url from './url'
export default class login extends base {
  static login(code, user) {
    const loginurl = url.login
    return this.post(loginurl, {
      code,
      user
    })
  }
}
