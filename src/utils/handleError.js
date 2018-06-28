import wepy from 'wepy'
// import {
//   refreshToken
// } from './refreshToken'
import { getStore } from 'wepy-redux'
import {
  setRole
} from '../store/actions/user-info'
const store = getStore()
export default class {
  static handErr(code) {
    switch (code) {
      case 50001:
        try {
          wepy.clearStorageSync()
          console.log(`刷新token`, store)
          store.dispatch(setRole(0))
          // refreshToken()
        } catch (e) {
          console.log(e)
        }
        break
      case 50002:
        try {
          wepy.clearStorageSync()
          console.log(`刷新token`, store)
          store.dispatch(setRole(0))
          // refreshToken()
        } catch (e) {
          console.log(e)
        }
        break
    }
  }
}
