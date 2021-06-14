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
     component:myIndex
    },
    {
      path:'/home',
      component:myHome,
    },
    {
      path:'/detail',
      component:myDetail
    },
    {
      path:'/cinema',
      component:myCinema
    },
    {
      path:'/order',
      component:myOrder
    },
    {
      path:'/seat',
      component:mySeat
    },
    {
      path:'/user',
      component:myUser
    },
    {
      path:'/login',
      component:myLogin
    },
    {
      path:'/reg',
      component:myReg
    },
  ]
})
