import wepy from 'wepy'
import base from './base'
export default class urlTest extends base {
  static async test(url) {
    try {
      const test = await wepy.request({url})
      if (test.statusCode === 404) {
        return false
      } else {
        return true
      }
    } catch (err) {
      return err
    }
  }
}
// `https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/woerma-tencent-1024x682-326x235.jpg`
