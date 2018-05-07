import base from './base'
class Url extends base {
  static vc = `${this.baseUrl}/vc`
  static startup = `${this.baseUrl}/startup`
}
export default new Url()
