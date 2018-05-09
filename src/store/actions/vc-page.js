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
    name: '真格基金1',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 1,
    parentId: 1,
    name: '科技基金',
    foucsArea: ['科技', '计算机'],
    rounds: ['A轮', 'C轮', '天使轮']
  }, {
    id: 2,
    parentId: 2,
    name: '消费基金',
    foucsArea: ['消费', '茅台'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 3,
    parentId: 3,
    name: 'AI基金',
    foucsArea: ['人工智能', '生物改造'],
    rounds: ['A轮', 'C轮', '天使轮']
  }, {
    id: 4,
    parentId: 0,
    name: '真格基金2',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'E轮', '天使轮']
  }, {
    id: 5,
    parentId: 0,
    name: '真格基金3',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 6,
    parentId: 0,
    name: '真格基金4',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 7,
    parentId: 0,
    name: '真格基金5',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'B轮', '天使轮']
  }]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(vcDetailList)
    }, 1000)
  })
})
