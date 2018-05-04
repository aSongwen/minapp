import { handleActions } from 'redux-actions'
import { NEWS, ASYNC_NEWS } from '../types/news'
export default handleActions({
  [NEWS] (state, action) {
    return {
      ...state,
      num: state.num + action.payload[0]
    }
  },
  [ASYNC_NEWS] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + +action.payload
    }
  }
}, {
  num: 0,
  asyncNum: 0
})
