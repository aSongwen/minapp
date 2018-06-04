import wepy from 'wepy'
export default class {
  static handErr(code) {
    switch (code) {
      case 50001:
        try {
          wepy.clearStorageSync()
        } catch (e) {
          console.log(e)
        }
        break
      case 50002:
        try {
          wepy.clearStorageSync()
        } catch (e) {
          console.log(e)
        }
        break
    }
  }
}
