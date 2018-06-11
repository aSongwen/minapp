import { combineReducers } from 'redux'
import counter from './counter'
import news from './news'
import vcPage from './vc-page'
import homePage from './home-page'
import startupPage from './startup-page'
import actionsCom from './article'
import userInfo from './user-info'
import myAttentionPage from './myAttention'
import token from './token'
import attentionToMyPage from './attentionToMy'

export default combineReducers({
  counter,
  news,
  actionsCom,
  vcPage,
  homePage,
  startupPage,
  userInfo,
  myAttentionPage,
  token,
  attentionToMyPage
})
