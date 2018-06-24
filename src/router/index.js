import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { title: '黄大河的网站' }

    }
  ]
})
router.beforeEach((to, form, next) => { /*路由变化修改title*/ if (to.meta.title) { document.title = to.meta.title } next(); })
export default router

