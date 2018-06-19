import { ATTENTION_TO_MY } from '../types/index'
import { createAction } from 'redux-actions'
export const attentionToMyData = createAction(ATTENTION_TO_MY, (res) => {
  return new Promise(resolve => resolve(res))
})
