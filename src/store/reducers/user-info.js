import { handleActions } from 'redux-actions'
import { SET_USER_INFO, SET_LOGINBOX_VISUAL, SET_ROLE } from '../types/user-info'
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
  },
  [SET_ROLE] (state, action) {
    return {
      ...state,
      role: action.payload
    }
  }
}, {
  detail: {},
  loginBoxVisual: 'visibility:visible',
  role: 0
})
