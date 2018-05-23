import { handleActions } from 'redux-actions'
import { TOKEN } from '../types/token'
export default handleActions({
  [TOKEN](state, action) {
    console.dir(`修改token action`, action)
    return {
      ...state,
      token: action.payload
    }
  }
}, {
  token: ''
})
