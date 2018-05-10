import { handleActions } from 'redux-actions'
import { ASYNC_STARTUP_CATELIST, ASYNC_STARTUP_DETAILLIST } from '../types/index'
export default handleActions({
  [ASYNC_STARTUP_CATELIST] (state, action) {
    return {
      ...state,
      startupCateList: action.payload
    }
  },
  [ASYNC_STARTUP_DETAILLIST] (state, action) {
    return {
      ...state,
      startupDetailList: action.payload
    }
  }
}, {
  startupCateList: [],
  startupDetailList: []
})
