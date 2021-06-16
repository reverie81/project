<template>
  <div>
    <my-header>我的</my-header>
    <div class="user-main">
      <div class="user-item">
        <a href="#">
          <em>我的订单</em><span class="left_gray"></span>
        </a>
      </div>
      <div class="user-item">
        <a href="#">
          <em>优惠卷</em><span class="left_gray"></span>
        </a>
      </div>
      <div class="user-item">
        <a href="#">
          <em>影院会员卡</em><span class="left_gray"></span>
        </a>
      </div>
      <div class="user-item">
        <a href="#">
          <em>想看的电影</em><span class="left_gray"></span>
        </a>
      </div>
      <div class="user-item">
        <a href="#">
          <em>看过的电影</em><span class="left_gray"></span>
        </a>
      </div>
      <div class="login-btn user-btn">
        <a href="#/home" @click.prevent="logout">点击退出</a>
      </div>
      <div class="user-footer">
        <div class="user-logo"><img src="static/img/LOGO_gray.png" /></div>
        <p>客服电话：027-87229009</p>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myFooter from '@/components/views/myFooter'
  export default {
    components:{
      myHeader,
      myFooter
    },
    methods:{
      logout(){
        localStorage.removeItem("username")
        localStorage.removeItem("tokenID")
        this.$route.push('/home')
      }
    }
  }
</script>

<style>
</style>
