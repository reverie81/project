<template>
  <div class="container">
      <div class="header">
          <div class="logo">
              <a href="index.html">
                  <img src="static/img/logo.png">
              </a>
          </div>
          <div class="min-nav">
            <!-- 点击自定义事件，发送需要响应的具名插槽 -->
              <a href="#" @click="showmodal('login')">登录</a> |
              <a href="#" @click="showmodal('reg')">注册</a> |
              <a href="#" @click="showmodal('about')">关于</a>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    methods:{
      showmodal(dialog){
        // 自定义 showmodal 事件，用来激活模态框
        this.$emit("showmodal",true,dialog)
      }
    }
  }
</script>

<style>
</style>
