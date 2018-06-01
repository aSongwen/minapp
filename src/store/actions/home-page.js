import { ASYNC_HOME_SLIDERIMG, ASYNC_HOME_VCIMG } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncHomeSliderImg = createAction(ASYNC_HOME_SLIDERIMG, (res) => {
  const silderImg = [
    'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/6401.jpg',
    'https://static.technode.com/wp-content/blogs.dir/18/files/2018/05/cyanhill1.jpg',
    'https://static.technode.com/wp-content/blogs.dir/18/files/2018/03/投资人1.jpg',
    'https://static.technode.com/wp-content/blogs.dir/18/files/2016/07/rongzi.jpg',
    'https://static.technode.com/wp-content/blogs.dir/18/files/2018/03/投资人.jpg"',
    'https://static.technode.com/wp-content/blogs.dir/18/files/2018/03/zhenfund-edu-1.jpg',
    'https://static.technode.com/files/2017/12/sourcecodecapital-cover.jpeg'
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
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/pixel2-326x235.jpg',
      text: '投资人专栏投资人专栏投资人',
      describe: '好的好的好的好的',
      time: ''
    },
    {
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2018/06/cc99f851c2c74d3-326x235.gif',
      text: '投资人专栏投资人专栏投资人',
      describe: '好的好的好的好的',
      time: ''
    },
    {
      src: 'https://static.technode.com/wp-content/blogs.dir/18/files/2017/02/bigdata-326x235.jpg',
      text: '投资人专栏投资人专栏投资人',
      describe: '好的好的好的好的',
      time: ''
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcImg)
    }, 0)
  })
})
