import wepy from 'wepy'
import {
  getStore
} from 'wepy-redux'
import login from '../api/login'
import { asyncToken } from '../store/actions'
async function refreshToken() {
  const store = getStore()
  try {
    const code = (await wepy.login()).code
    console.log(code)
    try {
      const user = await wepy.getStorage({key: 'userInfo'})
      const userInfo = user.data
      const result = await login.login(code, { ...userInfo })
      console.log(`token`, result.data.jwt)
      await store.dispatch(asyncToken(result.data.jwt))
      wepy.setStorage({
        key: 'token',
        data: result.data.jwt
      })
    } catch (err) {
      console.log(`err`, err)
    }
  } catch (err) {
    console.log('登录失败！', err)
  }
}

module.exports = {
  refreshToken
}
