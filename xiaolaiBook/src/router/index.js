import Vue from 'vue'
import Router from 'vue-router'
import myMain from '@/components/myMain'
import myDetail from '@/components/myDetail'

import develop from '@/components/detail/develop'
import apply from '@/components/detail/apply'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      path:'/',
      alias:'/main',
      component:myMain
    },
    {
      path:'/detail',
      component:myDetail,
      children:[
        // 二级路由
        {
          path:'/detail',
          alias:'develop',
          component: develop
        },
        {
          path:'apply',
          component: apply
        }
      ]
    }
  ]
})
