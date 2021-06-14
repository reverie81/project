<template>
  <!-- 点击其他地方模态框关闭  .self 防止事件传播-->
  <div class="modal" @click.self="hidemodal">
    <transition name="dialog">
      <div class="dialog" v-show="ismodal">
        <!-- 制作关闭按钮关闭模态框 -->
        <button type="button" class="close" @click="hidemodal">&times;</button>
        <!-- 插槽 放入login reg about 组件 -->
        <slot></slot>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    // 接收父组件传来的 ismodal 用来控制模态框显示
    props: ['ismodal'],
    methods: {
      hidemodal() {
        // 自定义 hidemodal 事件，用来隐藏模态框
        this.$emit("hidemodal", false)
      }
    }
  }
</script>

<style>
  /* 设置模态框动画 */
  .dialog-enter,.dialog-leave-to{
      top: -300px !important;
      opacity: 0;
    }
    .dialog-enter-to,.dialog-leave{
      top: 50% !important;
      opacity: 1;
    }
    .dialog-enter-active,.dialog-leave-active{
      transition: all 1s;
    }
  /* 设置模态框样式 */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }

  .modal .dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 500px;
    height: 340px;
    background-color: #FFFFFF;
  }

  .modal .dialog .close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
  }
</style>
