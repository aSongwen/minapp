import base from './base'
export default class url {
  static vc = `${base.baseUrl}/vc`
  static vcAll = `${base.baseUrl}/vc/all`
  static startup = `${base.baseUrl}/startup`
  static startupAll = `${base.baseUrl}/startup/all`
  static startupAutoPatch = `${base.baseUrl}/startup/autopatch`
  static startupQuickApply = `${base.baseUrl}/startup/quickapply`
  static login = `${base.baseUrl}/login`
  // 投资人专栏
  // static homeVc = `https://cn.technode.com/post/category/vc-column/feed/`
  static homeVc = `https://cn.technode.com/post/category/topics/techcrunch-hangzhou-2018/feed/`
  // cn.technode主页
  static homeTech = `https://cn.technode.com/feed/`
  // 关注
  static focusUser = `${base.baseUrl}/user/focus`
  // 用户详情
  static userDetail = `${base.baseUrl}/user/detail`
  // 我的关注
  static myFocus = `${base.baseUrl}/user/myfocus`
}
