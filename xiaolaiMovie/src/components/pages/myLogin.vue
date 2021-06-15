<template>
  <main class="login-main">
    <div class="login-logo"><img src="static/img/LOGO.png" /></div>
    <div class="login-from">
      <label>
        <input type="text" placeholder="请输入用户名" v-model="username" />
      </label>
      <label>
        <input type="password" placeholder="请输入密码" v-model="password" />
      </label>
    </div>
    <div class="login-btn" @click.prevent="login">
      <router-link to="login">登录</router-link>
    </div>
    <div class="link-reg">
      <router-link to="reg">还没账号？</router-link>
    </div>
    <div class="link-home">
      <router-link to="/home">暂不登录</router-link>
    </div>
  </main>
</template>

<script>
  import { Toast  } from 'mint-ui'
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        if (this.username==""&&this.password=="") {
          Toast("用户名和密码不能为空")
          return;
        }
        this.$http.post("/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res)
            if (res.data.errCode=="0") {
              Toast(res.data.errMsg)
              localStorage.username = res.data.username
              localStorage.tokenID = res.data.tokenID
              this.$router.push("/home")
            }
          })
          .catch(err=>{
            Toast("服务器异常")
          })
      }
    }

  }
</script>

<style>
</style>
