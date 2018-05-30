import { ASYNC_VC_DETAILLIST, ASYNC_VC_CATELIST } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncVcCateList = createAction(ASYNC_VC_CATELIST, (res) => {
  return new Promise(resolve => {
    resolve(res)
  })
})

export const asyncDetailList = createAction(ASYNC_VC_DETAILLIST, (res) => {
  console.log(`vcDetail`, res)
  return new Promise(resolve => {
    resolve(res)
  })
})
