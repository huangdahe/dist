import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['@/page/index'],resolve),//懒加载
      meta: { title: '爱美丽化妆品' }
    },
    /*  {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home/Home'],resolve),
      meta: { title: '首页' }
    } */
  ]
})
router.beforeEach((to, form, next) => { /*路由变化修改title*/ if (to.meta.title) { document.title = to.meta.title } next(); })
export default router

