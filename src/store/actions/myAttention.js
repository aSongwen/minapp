import { MYAttention } from '../types/index'
import { createAction } from 'redux-actions'
export const myAttentionData = createAction(MYAttention, (res) => {
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
      introduce: '这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目'
      // 面谈记录id，面谈人id，面谈人详情
    },
    {
      id: 1,
      uid: 1,
      company: '嗯哈xxxxxx嗯哈xxxxxx嗯哈xxxxxx嗯哈xxxxxx嗯哈xxxxxx',
      projectName: 'ofo',
      name: 'awen',
      tel: '18717126244',
      email: '961661773@qq.com',
      job: 'ceo',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮'],
      introduce: '这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目'
    },
    {
      id: 2,
      uid: 2,
      company: '嗯哈xxxxxx嗯哈xxxxxx',
      projectName: 'ofo',
      name: 'awen',
      tel: '18717126244',
      email: '961661773@qq.com',
      job: 'ceo',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮'],
      introduce: '这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目'
    },
    {
      id: 3,
      uid: 3,
      company: '嗯哈xxxxxx嗯哈xxxxxx',
      projectName: 'ofo',
      name: 'awen',
      tel: '18717126244',
      email: '961661773@qq.com',
      job: 'ceo',
      focusArea: ['TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮'],
      introduce: '这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目这是一个赚钱的项目'
    }
  ]
  return new Promise(resolve => resolve(comData))
})
