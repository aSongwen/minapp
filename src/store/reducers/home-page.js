import { handleActions } from 'redux-actions'
import { ASYNC_HOME_SLIDERIMG, ASYNC_HOME_VCIMG } from '../types/index'
export default handleActions({
  [ASYNC_HOME_SLIDERIMG] (state, action) {
    // console.log(action)
    return {
      ...state,
      sliderImg: action.payload
    }
  },
  [ASYNC_HOME_VCIMG] (state, action) {
    return {
      ...state,
      vcImg: action.payload
    }
  }
}, {
  sliderImg: [],
  vcImg: []
})
