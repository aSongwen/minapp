import { handleActions } from 'redux-actions'
import { SET_USER_INFO, SET_LOGINBOX_VISUAL } from '../types/user-info'
export default handleActions({
  [SET_USER_INFO] (state, action) {
    return {
      ...state,
      detail: action.payload
    }
  },
  [SET_LOGINBOX_VISUAL] (state, action) {
    return {
      ...state,
      loginBoxVisual: action.payload
    }
  }
}, {
  detail: {},
  loginBoxVisual: 'visibility:visible'
})
