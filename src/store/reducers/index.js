import { combineReducers } from 'redux'
import counter from './counter'
import news from './news'
import vcPage from './vc-page'

export default combineReducers({
  counter,
  news,
  vcPage
})
