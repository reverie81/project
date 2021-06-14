<template>
  <main>
    <div class="logo"><img src="static/img/LOGO.png" /></div>
    <div class="dialog" @click="gohome">{{count}}点击跳过等待</div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        time:null,
        count: 3
      }
    },
    methods:{
      gohome(){
        clearInterval(this.time)
        this.$router.replace('/home')
      }
    },
    mounted() {
      this.time = setInterval(() => {
        if (this.count<=0) {
          clearInterval(this.time)
          this.$router.replace('/home')
        } else{
          this.count--
        }
      }, 3000);

    }
  }
</script>

<style>
  .dialog {
    position: fixed;
    top: 5%;
    right: 5%;
    line-height: 1;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    padding: 12px 20px;
    border-radius: 20px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  .dialog:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
  }
</style>
