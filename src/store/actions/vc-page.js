import { ASYNC_VC_DETAILLIST, ASYNC_VC_CATELIST } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncVcCateList = createAction(ASYNC_VC_CATELIST, (res) => {
  const vcCateList = [{
    id: 0,
    name: '医疗',
    active: true
  }, {
    id: 1,
    name: '科技',
    active: false
  }, {
    id: 2,
    name: '消费',
    active: false
  }, {
    id: 3,
    name: 'AI',
    active: false
  }]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcCateList)
    }, 1000)
  })
})

export const asyncDetailList = createAction(ASYNC_VC_DETAILLIST, (res) => {
  const vcDetailList = [{
    id: 0,
    parentId: 0,
    thumLogo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2934981818,202476935&fm=27&gp=0.jpg',
    name: '医疗'
  }, {
    id: 1,
    parentId: 1,
    thumLogo: '../images/common.jpg',
    name: '科技'
  }, {
    id: 2,
    parentId: 2,
    thumLogo: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2934981818,202476935&fm=27&gp=0.jpg',
    name: '消费'
  }, {
    id: 3,
    parentId: 3,
    thumLogo: '../images/common.jpg',
    name: 'AI'
  }]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcDetailList)
    }, 1000)
  })
})
