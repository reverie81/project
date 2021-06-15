// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置一个全局的请求跟地址
Vue.prototype.serverIP = 'http://127.0.0.1:3000/'
// 配置 axios 插件
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.$http = axios
// 配置 minu-ui 组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import { Toast } from 'mint-ui'
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if(localStorage.username && localStorage.tokenID){
      next()
    }else{
      Toast({
        message:"登录已过期", // 定义提示信息
        position:'center', // 定义位置
        duration:1000 // 定义显示时间
      })
    }
  }else{
    next()
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
