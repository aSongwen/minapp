import { handleActions } from 'redux-actions'
import { NEWS } from '../types/news'
export default handleActions({
  [NEWS] (state) {
    return {
      ...state,
      num: state.num++
    }
  }
}, {
  num: 0
})
