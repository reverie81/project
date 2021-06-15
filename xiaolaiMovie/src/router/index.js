import Vue from 'vue'
import Router from 'vue-router'

import myIndex from '@/components/myIndex'
import myHome from '@/components/pages/myHome'
import myOrder from '@/components/pages/myOrder'
import myUser from '@/components/pages/myUser'

import myDetail from '@/components/pages/myDetail'
import myCinema from '@/components/pages/myCinema'
import mySeat from '@/components/pages/mySeat'

import myLogin from '@/components/pages/myLogin'
import myReg from '@/components/pages/myReg'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path:'/',
     component:myIndex,
	 meta:{requiresAuth:false} // 路由元信息
    },
    {
      path:'/home',
      component:myHome,
	  meta: { requiresAuth: false }
    },
    {
      path:'/detail',
      component:myDetail,
	  meta: { requiresAuth: true }
    },
    {
      path:'/cinema',
      component:myCinema,
	  meta: { requiresAuth: true }
    },
    {
      path:'/order',
      component:myOrder,
	  meta: { requiresAuth: true }
    },
    {
      path:'/seat',
      component:mySeat,
	  meta: { requiresAuth: true }
    },
    {
      path:'/user',
      component:myUser,
	  meta: { requiresAuth: true }
    },
    {
      path:'/login',
      component:myLogin,
	  meta: { requiresAuth: false }
    },
    {
      path:'/reg',
      component:myReg,
	  meta: { requiresAuth: false }
    },
  ]
})
