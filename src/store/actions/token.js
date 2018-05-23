import { TOKEN } from '../types/token'
import { createAction } from 'redux-actions'
export const asyncToken = createAction(TOKEN, (res) => {
  return new Promise(resolve => {
    resolve(res)
  })
})
