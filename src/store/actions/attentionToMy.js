import { ATTENTION_TO_MY } from '../types/index'
import { createAction } from 'redux-actions'
export const attentionToMyData = createAction(ATTENTION_TO_MY, (res) => {
  const comData = [
    {
      id: 0,
      uid: 0,
      company: '嗯哈xxxxxx嗯哈xxxxxx',
      projectName: 'ofo',
      name: 'awen',
      tel: '18717126244',
      email: '961661773@qq.com',
      job: 'ceo',
      focusArea: ['TMT', 'TMT', 'TMT', 'TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮'],
      introduce: '好好好'
      // 面谈记录id，面谈人id，面谈人详情
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comData)
    }, 1000)
  })
})
