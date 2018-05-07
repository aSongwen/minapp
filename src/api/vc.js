/**
 * vc数据获取类
 */
import base from './base'
import Url from './url'
export default class vc extends base {
  static getInfo(id) {
    const url = `${Url.vc}/${id}`
    return this.get(url).then(data => data)
  }
}
