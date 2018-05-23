import { combineReducers } from 'redux'
import counter from './counter'
import news from './news'
import vcPage from './vc-page'
import homePage from './home-page'
import startupPage from './startup-page'
import actionsCom from './article'
import userInfo from './user-info'
import communicatedPage from './communicated'
import token from './token'

export default combineReducers({
  counter,
  news,
  actionsCom,
  vcPage,
  homePage,
  startupPage,
  userInfo,
  communicatedPage,
  token
})
