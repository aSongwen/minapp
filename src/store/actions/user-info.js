import { SET_USER_INFO, SET_LOGINBOX_VISUAL } from '../types/index'
import { createAction } from 'redux-actions'

export const setUserInfo = createAction(SET_USER_INFO, (res) => {
  return new Promise(resolve => {
    resolve(res)
  })
})

export const setLoginBoxVisual = createAction(SET_LOGINBOX_VISUAL, (res) => {
  return new Promise(resolve => {
    resolve(res)
  })
})
