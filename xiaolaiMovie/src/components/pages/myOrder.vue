<template>
  <div>
    <my-header>我的订单</my-header>
    <div class="container">
      <div class="order-item" v-for="(v,i) in list">
        <dl>
          <dt><img :src="serverIP+v.ImgUrl" /></dt>
          <dd><em>{{v.Name}} 4张</em></dd>
          <dd>{{v.ReleaseTime}}</dd>
          <dd v-for="(a,b) in v.ticketArray">{{v.Room}},{{a.Row}}排{{a.Col}}座</dd>
        </dl>
        <div class="status">
          <em>总价：{{v.Price}}元</em><span>已完成</span>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myFooter from '@/components/views/myFooter'
  export default {
    components: {
      myHeader,
      myFooter
    },
    data() {
      return{
        list:[]
      }
    },
    created() {
      this.$http.get("orders", {
          params: {
            username: localStorage.username,
            tokenID: localStorage.tokenID
          }
        })
        .then(res => {
          this.list = res.data.ordersList

        })
        .catch(err=>{
          Toast("服务器错误")
        })
    }
  }
</script>

<style>
</style>
