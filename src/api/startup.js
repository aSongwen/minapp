/**
 * startup数据获取类
 */
import base from './base'
import Url from './url'
export default class startup extends base {
  static getInfo(id) {
    const url = `${Url.startup}/${id}`
    return this.get(url).then(data => data)
  }
}
