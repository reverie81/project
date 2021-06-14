<template>
  <div class="reg">
	  <div><label>请输入用户名：</label><input type="text" placeholder="请输入用户名"></div>
	  <div><label>请输入密码：</label><input type="text" placeholder="请输入密码"></div>
	  <div><label>请确认密码：</label><input type="text" placeholder="请确认密码"></div>
	  <div><input type="button" value="提交" /></div>
  </div>
</template>

<script>
</script>

<style>
  .reg{
        line-height: 3;
        text-align: center;
        padding-top: 32%;
  }
  .reg label{
    display: inline-block;
    text-align: left;
    width: 120px;
  }
  .reg input[type=text]{
        padding: 5px;
        border: 1px solid;
  }
</style>
