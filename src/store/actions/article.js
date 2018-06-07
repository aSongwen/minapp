import { ARTICLE } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncArticle = createAction(ARTICLE, (res) => {
  return new Promise(resolve => resolve(res))
})
