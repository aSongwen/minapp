import { ARTICLE } from '../types/index'
import { createAction } from 'redux-actions'
export const article = createAction(ARTICLE, (res) => {
  const articleData = {
    src: 'https://cn.technode.com/wp-content/blogs.dir/18/files/2018/05/pic2-5-1024x693.jpg',
    title: '透过小米 8 探索版半透明后盖看到的并不是真实的手机内部',
    time: '',
    content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
  }
  return new Promise(resolve => resolve(articleData))
})
