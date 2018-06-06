import { ASYNC_HOME_SLIDERIMG, ASYNC_HOME_VCIMG } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncHomeSliderImg = createAction(ASYNC_HOME_SLIDERIMG, (res) => {
  return new Promise(resolve => {
    resolve(res)
  })
})

export const asyncHomeVcImg = createAction(ASYNC_HOME_VCIMG, (res) => {
  // const vcImg = [
  //   {
  //     title: '滴滴外卖登陆南京',
  //     link: '',
  //     pubDate: 'Tue, 22 May 2018 04:10:27 +0000',
  //     cover: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/didi_nanjing-326x235.jpg'

  //   },
  //   {
  //     title: 'AI + 零售如何共舞？知己知彼，方能走得长久',
  //     link: '',
  //     pubDate: 'Tue, 22 May 2018 04:10:27 +0000',
  //     cover: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/屏幕快照-2018-06-01-上午9.44.39-326x235.png'
  //   },
  //   {
  //     title: '彭博：Google Pixel 3 XL 也将采用刘海屏， 预计 10 月发布',
  //     link: '',
  //     pubDate: 'Tue, 22 May 2018 04:10:27 +0000',
  //     cover: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/pixel2-326x235.jpg'
  //   }
  // ]
  return new Promise(resolve => {
    resolve(res)
  })
})
