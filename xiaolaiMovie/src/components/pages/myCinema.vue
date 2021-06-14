<template>
  <div>
   <my-header>
     <my-back slot="back"></my-back>
     影院
     </my-header>
    <my-title><h3>芳华<em>9.5分</em></h3></my-title>
    <div class="container">
      <div class="scene-item">
        <span class="c-time">10:30</span>
        <span class="c-type">国语3D<em>3号厅</em></span>
        <span class="c-price">￥33.5</span>
        <span class="c-btn"><button onclick="location.href='#/seat'">选择购票</button></span>
      </div>
      <div class="scene-item">
        <span class="c-time">10:30</span>
        <span class="c-type">国语3D<em>3号厅</em></span>
        <span class="c-price">￥33.5</span>
        <span class="c-btn"><button>选择购票</button></span>
      </div>
      <div class="scene-item">
        <span class="c-time">10:30</span>
        <span class="c-type">国语3D<em>3号厅</em></span>
        <span class="c-price">￥33.5</span>
        <span class="c-btn"><button>选择购票</button></span>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
  import myTitle from '@/components/views/myTitle'
  export default {
    components: {
      myHeader,
      myBack,
      myTitle,
    }
  }
</script>

<style>
</style>
