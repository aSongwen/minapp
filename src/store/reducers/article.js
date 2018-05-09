import { handleActions } from 'redux-actions'
import { ARTICLE } from '../types/index'
export default handleActions({
  [ARTICLE](state, action) {
    return {
      ...state,
      articleData: action.payload
    }
  }
}, {
  articleData: []
})
