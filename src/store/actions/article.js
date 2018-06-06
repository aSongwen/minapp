import { ARTICLE } from '../types/index'
import { createAction } from 'redux-actions'
export const article = createAction(ARTICLE, (res) => {
  const articleData = [
    {
      title: '透过小米 8 探索版半透明后盖看到的并不是真实的手机内部',
      link: '',
      pubDate: 'Tue, 05 Jun 2018 06:26:19 +0000',
      cover: 'https://cn.technode.com/wp-content/blogs.dir/18/files/2018/05/pic2-5-1024x693.jpg'
    }
  ]
  return new Promise(resolve => resolve(articleData))
})
