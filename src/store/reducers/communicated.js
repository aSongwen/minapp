import { handleActions } from 'redux-actions'
import { COMMUNICATED_DATA } from '../types/index'
export default handleActions({
  [COMMUNICATED_DATA] (state, action) {
    return {
      ...state,
      comData: action.payload
    }
  }
}, {
  comData: []
})
