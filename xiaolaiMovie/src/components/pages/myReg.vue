<template>
  <div>
    <my-header>
      <my-back slot="back"></my-back>
      用户注册
      <span class="go-next" slot="next"><router-link to="/login">登录</router-link></span>
    </my-header>
    <div class="reg-main">
    	<div class="reg-from">
    		<label><input type="text"  placeholder="请输入用户名" v-model="username"/></label>
    		<label><input type="password"  placeholder="请输入密码" v-model="password"/></label>
    		<label><input type="password"  placeholder="请确认密码" v-model="passwords"/></label>
    	</div>
    	<div class="treaty">
    		<input type="checkbox" id="treaty" checked="checked"/>
    		<label for="treaty">我已阅读并同意《格莱科技用户协议》</label>
    	</div>
    	<div class="login-btn reg-btn">
    		<a href="#" @click.prevent="reg">立即注册</a>
    	</div>
    	<div class="contact">
    		<span>© 格莱科技 027-87229009</span>
    	</div>
    </div>
  </div>
</template>

<script>
  import { Toast  } from 'mint-ui'
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
export default {
  data() {
    return{
      username:'',
      password:'',
      passwords:''
    }
  },
  methods:{
    reg(){
      if(!this.username){
        alert("用户名不能为空")
        return;
      }
      if(this.password!=this.passwords){
        alert("密码不一致")
        return;
      }
      this.$http.post("/reg",{
        username:this.username,
        password:this.password,
      })
      .then(res=>{
        console.log(res)
        Toast(err.data.errMsg)
        this.$router.push("/login")
      })
      .catch(res=>{
        Toast("服务器错误")
      })
    }
  },
  components:{
    myHeader,
    myBack
  }
}
</script>

<style>
</style>
