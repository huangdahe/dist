import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/page/index'],resolve),//懒加载
      meta: { title: '爱美丽化妆品' }
    },
     {
      path: '/',//nuvent
      name: 'nuvent',
      component: resolve => require(['@/page/nuvent/index'],resolve),
      meta: { title: '大冶纽芬特瓷砖' }
    }
  ]
})
router.beforeEach((to, form, next) => { /*路由变化修改title*/ if (to.meta.title) { document.title = to.meta.title } next(); })
export default router

