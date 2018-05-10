import { ASYNC_HOME_SLIDERIMG, ASYNC_HOME_VCIMG } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncHomeSliderImg = createAction(ASYNC_HOME_SLIDERIMG, (res) => {
  const silderImg = [
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(silderImg)
    }, 1000)
  })
})

export const asyncHomeVcImg = createAction(ASYNC_HOME_VCIMG, (res) => {
  const vcImg = [
    {
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      text: '投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏'
    },
    {
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      text: '投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏'
    },
    {
      src: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      text: '投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏投资人专栏'
    }
  ]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcImg)
    }, 1000)
  })
})
