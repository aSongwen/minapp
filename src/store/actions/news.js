import { ASYNC_NEWS } from '../types/news'
import { createAction } from 'redux-actions'
export const asyncNews = createAction(ASYNC_NEWS, (res) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(res)
    }, 1000)
  })
})
