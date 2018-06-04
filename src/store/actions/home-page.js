import { ASYNC_HOME_SLIDERIMG, ASYNC_HOME_VCIMG } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncHomeSliderImg = createAction(ASYNC_HOME_SLIDERIMG, (res) => {
  // const silderImg = [
  //   'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/6401.jpg',
  //   'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/cyanhill1.jpg',
  //   'https://static.technode.com/wp-content/blogs.dir/18/files/2018/03/投资人1.jpg',
  //   'https://static.technode.com/wp-content/blogs.dir/18/files/2016/07/rongzi.jpg'
  // ]
  const silderImg = [
    {
      img: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/6401.jpg',
      content: '文字文字文字文字文字文字文字'
    },
    {
      img: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/cyanhill1.jpg',
      content: '文字文字文字文字文字文字文字'
    },
    {
      img: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/03/投资人1.jpg',
      content: '文字文字文字文字文字文字文字'
    },
    {
      img: 'https://static.technode.com/wp-content/blogs.dir/18/files/2016/07/rongzi.jpg',
      content: '文字文字文字文字文字文字文字'
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(silderImg)
    }, 0)
  })
})

export const asyncHomeVcImg = createAction(ASYNC_HOME_VCIMG, (res) => {
  const vcImg = [
    {
      id: 0,
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/didi_nanjing-326x235.jpg',
      text: '滴滴外卖登陆南京',
      describe: '南京多部门要求禁止“价格战”。',
      time: ''
    },
    {
      id: 1,
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/屏幕快照-2018-06-01-上午9.44.39-326x235.png',
      text: 'AI + 零售如何共舞？知己知彼，方能走得长久',
      describe: '对于零售行业来说，新技术是块砖，哪里需要哪里搬。那么， AI 如何助力零食产业升级，撬动这个巨大的市场呢？',
      time: ''
    },
    {
      id: 2,
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/pixel2-326x235.jpg',
      text: '彭博：Google Pixel 3 XL 也将采用刘海屏，预计 10 月发布',
      describe: 'Pixel 3 将继续采用单摄像头。',
      time: ''
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcImg)
    }, 0)
  })
})
