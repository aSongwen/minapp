import { handleActions } from 'redux-actions'
import { ATTENTION_TO_MY } from '../types/index'
export default handleActions({
  [ATTENTION_TO_MY] (state, action) {
    return {
      ...state,
      comData: action.payload
    }
  }
}, {
  comData: [
    {
      id: 0,
      uid: 0,
      name: '',
      company: '嗯哈xxxxxx嗯哈xxxxxx',
      focusArea: ['TMT', 'TMT', 'TMT', 'TMT', 'TMT', 'TMT'],
      rounds: ['种子轮', 'D轮', 'D轮']
      // 面谈记录id，面谈人id，面谈人详情
    }
  ]
})
