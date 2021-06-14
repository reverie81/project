<template>
  <div id="app">
    <!-- 接收 myHeader 组件中传输的数据 -->
    <my-header @showmodal="showmodal"></my-header>
    <!-- 路由视图 显示 Main Detail -->
    <router-view></router-view>
    <my-footer></my-footer>
    <!-- 添加模态框显示动画 -->
    <transition name="modal">
    <!-- 接收 myModal 组件中传输的数据 -->
      <my-modal v-show="ismodal" @hidemodal="hidemodal" :ismodal="ismodal">
        <component :is="dialog"></component>
      </my-modal>
    </transition>
  </div>
</template>

<script>
  // 一级路由组件
  import myHeader from '@/components/myHeader'
  import myFooter from '@/components/myFooter'
  import myModal from '@/components/myModal'
  // 模态框组件
  import login from '@/components/dialog/login'
  import reg from '@/components/dialog/reg'
  import about from '@/components/dialog/about'
  export default {
    name: 'app',
    data() {
      return {
        ismodal: false, // 模态框是否显示
        dialog: 'login' // slot 传入的组件
      }
    },
    methods: {
      // 接收my-header数据
      showmodal(a, b) {
        this.ismodal = a
        this.dialog = b
      },
      // 接收my-modal数据
      hidemodal(a) {
        this.ismodal = a
      }
    },
    // 配置组件
    components: {
      myHeader,
      myFooter,
      myModal,
      login,
      reg,
      about
    }
  }
</script>

<style>
  @import url("assets/css/style.css");
  /* 模态框显示速度 */
  .modal-leave-active {
    transition: all .7s;
  }
</style>
