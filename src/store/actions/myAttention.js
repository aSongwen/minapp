import { MYAttention } from '../types/index'
import { createAction } from 'redux-actions'
export const myAttentionData = createAction(MYAttention, (res) => {
  return new Promise(resolve => resolve(res))
})
