import { handleActions } from 'redux-actions'
import { ATTENTION_TO_MY } from '../types/index'
export default handleActions({
  [ATTENTION_TO_MY] (state, action) {
    return {
      ...state,
      comData: action.payload
    }
  }
}, {
  comData: []
})
