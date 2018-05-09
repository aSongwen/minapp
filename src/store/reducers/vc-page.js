import { handleActions } from 'redux-actions'
import { ASYNC_VC_CATELIST, ASYNC_VC_DETAILLIST } from '../types/index'
export default handleActions({
  [ASYNC_VC_CATELIST] (state, action) {
    // console.log(action)
    return {
      ...state,
      vcCateList: action.payload
    }
  },
  [ASYNC_VC_DETAILLIST] (state, action) {
    // console.log(action)
    return {
      ...state,
      vcDetailList: action.payload
    }
  }
}, {
  vcCateList: [],
  vcDetailList: []
})
