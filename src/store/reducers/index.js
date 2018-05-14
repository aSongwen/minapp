import { combineReducers } from 'redux'
import counter from './counter'
import news from './news'
import vcPage from './vc-page'
import homePage from './home-page'
import startupPage from './startup-page'
import actionsCom from './article'
import communicatedPage from './communicated'

export default combineReducers({
  counter,
  news,
  actionsCom,
  vcPage,
  homePage,
  startupPage,
  communicatedPage
})
