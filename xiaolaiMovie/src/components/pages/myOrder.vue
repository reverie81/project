<template>
  <div>
    <my-header>我的订单</my-header>
    <div class="container">
      <div class="order-item">
        <dl>
          <dt><img src="static/img/movie.jpg" /></dt>
          <dd><em>芳华 4张</em></dd>
          <dd>10月24日 14:30</dd>
          <dd>3号厅10排12座,10排14座,10排15座,10排16座</dd>
        </dl>
        <div class="status">
          <em>总价：140元</em><span>已完成</span>
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
    }
  }
</script>

<style>
</style>
