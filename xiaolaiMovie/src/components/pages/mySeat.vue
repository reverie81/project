<template>
  <div>
      <my-header>
        <my-back slot="back"></my-back>
        影院
      </my-header>
    
     <div class="seat-title">
         <h2>芳华</h2>
         <h4>今天12月18日 19:00 国语2D</h4>
         <div class="lobby">
         	<span>3号厅银幕</span>
         </div>
     </div>
     <div class="container seat">
    		<div class="seating">
    			<ul>
    				<li class="active"></li><li  class="active-selled"></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li> <li></li>
    			</ul>
    		</div>
    		<div class="tips-seat">
    			<span class="selecting">可选</span><span class="selected">已选</span><span class="selled">已售</span>
    		</div>
    		<div class="ticket">
    			<h5>已选座位</h5>
    			<div class="ticket-item">
    				<a href="#">
    					10排15座<em>￥35.5</em>
    				</a>
    			</div>
    			<div class="ticket-item">
    				<a href="#">
    					10排15座<em>￥35.5</em>
    				</a>
    			</div>
    			<div class="ticket-item">
    				<a href="#">
    					10排15座<em>￥35.5</em>
    				</a>
    			</div>
    			<div class="ticket-item">
    				<a href="#">
    					10排15座<em>￥35.5</em>
    				</a>
    			</div>
    		</div>
    </div>
    <div class="seat-bar">
    		<a href="#">￥140确认选座</a>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
  export default {
    components:{
      myHeader,
      myBack
    }
  }
</script>

<style>
</style>
