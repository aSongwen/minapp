import { COMMUNICATED_DATA } from '../types/index'
import { createAction } from 'redux-actions'
export const communicatedData = createAction(COMMUNICATED_DATA, (res) => {
  const comData = [
    {
      id: 0,
      comName: '嗯哈xxxxxx',
      comMsg: '领域:TMT'
    },
    {
      id: 1,
      comName: '嗯哈xxxxxx',
      comMsg: '领域:TMT'
    },
    {
      id: 2,
      comName: '嗯哈xxxxxx',
      comMsg: '领域:TMT'
    },
    {
      id: 3,
      comName: '嗯哈xxxxxx',
      comMsg: '领域:TMT'
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comData)
    }, 1000)
  })
})
