import { handleActions } from 'redux-actions'
import { TOKEN } from '../types/token'
export default handleActions({
  [TOKEN](state, action) {
    return {
      ...state,
      token: action.payload
    }
  }
}, {
  token: ''
})
