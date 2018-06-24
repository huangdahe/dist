import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/Home'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { title: '黄大河的网站' }

    },
     {
      path: '/home',
      name: 'home',
      component: home,//懒加载,
      meta: { title: '首页' }
    }
  ]
})
router.beforeEach((to, form, next) => { /*路由变化修改title*/ if (to.meta.title) { document.title = to.meta.title } next(); })
export default router

