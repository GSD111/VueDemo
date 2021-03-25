import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/Login'
// import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
// eslint-disable-next-line no-unused-vars
import Register from '@/views/register/Register'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      // console.log(isLogin)
      isLogin ? next({ name: 'HelloWorld' }) : next()
    }

  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      // console.log(isLogin)
      isLogin ? next({ name: 'HelloWorld' }) : next()
    }

  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
