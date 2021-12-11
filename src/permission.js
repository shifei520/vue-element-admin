import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // 引入一份进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式

const whiteList = ['/login', '/404']

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  if(store.getters.token) {
    if(to.path === '/login') {
      next('/')
    } else {
      if(!store.getters.userId) {
        const { roles } = await store.dispatch('user/getUserInfo')
        // 如果说后续 需要根据用户资料获取数据的话 这里必须改成 同步
        // 筛选用户的可用路由
        // actions中函数 默认是Promise对象 调用这个对象 想要获取返回的值话 必须 加 await或者是then
        // actions是做异步操作的
        const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
        next(to.path)
      } else {
        next()
      }
    }
  } else {
    if(whiteList.some(item => item === to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})
