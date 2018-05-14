import { COMMUNICATED_DATA } from '../types/index'
import { createAction } from 'redux-actions'
export const communicatedData = createAction(COMMUNICATED_DATA, (res) => {
  const comData = [
    {
      id: 0,
      mid: 0,
      name: '',
      company: '嗯哈xxxxxx嗯哈xxxxxx',
      focusArea: ['TMT', 'TMT', 'TMT', 'TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮']
      // 面谈记录id，面谈人id，面谈人详情
    },
    {
      id: 1,
      mid: 1,
      name: '',
      company: '嗯哈xxxxxx',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮']
    },
    {
      id: 2,
      mid: 2,
      name: '',
      company: '嗯哈xxxxxx',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮']
    },
    {
      id: 3,
      mid: 3,
      name: '',
      company: '嗯哈xxxxxx',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮']
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comData)
    }, 1000)
  })
})
