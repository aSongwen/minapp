import { handleActions } from 'redux-actions'
import { MYAttention } from '../types/index'
export default handleActions({
  [MYAttention] (state, action) {
    return {
      ...state,
      comData: action.payload
    }
  }
}, {
  comData: []
})
