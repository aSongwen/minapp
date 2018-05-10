import { ASYNC_STARTUP_DETAILLIST, ASYNC_STARTUP_CATELIST } from '../types/index'
import { createAction } from 'redux-actions'
export const asyncStartupCateList = createAction(ASYNC_STARTUP_CATELIST, (res) => {
  const startupCateList = [{
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
      resolve(startupCateList)
    }, 1000)
  })
})

export const asyncStartupDetailList = createAction(ASYNC_STARTUP_DETAILLIST, (res) => {
  const startupDetailList = [{
    id: 0,
    parentId: 0,
    name: 'VR医疗',
    foucsArea: ['医疗', '生物科技'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 1,
    parentId: 1,
    name: '蓝天计划',
    foucsArea: ['科技', '计算机'],
    rounds: ['A轮', 'C轮', '天使轮']
  }, {
    id: 2,
    parentId: 2,
    name: '10086工程',
    foucsArea: ['消费', '茅台'],
    rounds: ['A轮', 'B轮', '天使轮']
  }, {
    id: 3,
    parentId: 3,
    name: '游民星空',
    foucsArea: ['人工智能', '生物改造'],
    rounds: ['A轮', 'C轮', '天使轮']
  }]
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(startupDetailList)
    }, 1000)
  })
})
