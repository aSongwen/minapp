import { ARTICLE } from '../types/index'
import { createAction } from 'redux-actions'
export const article = createAction(ARTICLE, (res) => {
  const articleData = {
    src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    text: '动点科技文章动点科技文章动点科技文章动点科技文章动点科技文章',
    describe: '好的好的好的好的',
    time: ''
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(articleData)
    }, 1000)
  })
})
