/**
 * 后台路由地址
 * @date        2019-05-16
 * @author cnvp
 * @anotherdate 2019-05-16T09:06:57+0800
 */
module.exports = app => {
  const { router, controller } = app
  const adminRouter = router.namespace('/admin')
  // const jwt = middleware.checkToken()
  router.get('/', controller.home.index)
  adminRouter.post('/login', controller.admin.login) // 登录
  adminRouter.get('/role', controller.admin.role) // 获取所有的用户角色信息
  adminRouter.get('/index', controller.admin.index) // 首页统计数据
  adminRouter.get('/getmenu', controller.admin.getmenu) // 获取菜单
  adminRouter.get('/userinfo', controller.admin.userinfo) // 获取用户基本信息
  adminRouter.get('/getmodule', controller.admin.getmodule) // 获取模型
  adminRouter.post('/createmodule', controller.admin.createmodule) // 创建模型
  adminRouter.post('/updatemodule', controller.admin.updatemodule) // 更新模型
  adminRouter.post('/deletemodule', controller.admin.deletemodule) // 删除模型
  adminRouter.get('/getmoduledetail', controller.admin.getmoduledetail) // 模型详情
  adminRouter.get('/modulefieldlist', controller.admin.modulefieldlist) // 获取模型字段列表
  adminRouter.get('/modulefielddetail', controller.admin.modulefielddetail) // 获取字段的信息
  adminRouter.get('/addmodulefield', controller.admin.addmodulefield) // 添加字段
  adminRouter.get('/updatemodulefield', controller.admin.updatemodulefield) // 更新字段
  adminRouter.post('/sortfield', controller.admin.sortfield) // 字段排序
}
