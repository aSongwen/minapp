import base from './base'
// import Url from './url'
export default class login extends base {
  static login(code, user) {
    const url = `https://vcmeetup.technode.com/api/login`
    return this.post(url, {
      code,
      user
    })
  }
}
