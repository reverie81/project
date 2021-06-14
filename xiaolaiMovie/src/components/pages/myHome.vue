<template>
  <div>
    <my-header>小莱电影</my-header>
    <my-title>影片</my-title>
    <div class="container">
      <div class="movie-list">
        <router-link to="/detail">
          <div class="movie-img"><img src="static/img/movie.jpg" /></div>
          <div class="movie-info">
            <div class="hd">
              <h2>天地英雄之双胎骑兵的诱惑</h2>
              <div class="movie-type"><span>2D</span><span>IMAX</span></div>
            </div>
            <p>剧情、爱情、战争</p>
            <p>主演，黄轩，苗苗</p>
          </div>
          <div class="grade">
            9.9分
          </div>
          <div class="buy"><router-link to="/cinema">购票</router-link></div>
        </router-link>
      </div>
      <div class="movie-list">
        <a href="#">
          <div class="movie-img"><img src="static/img/movie.jpg" /></div>
          <div class="movie-info">
            <div class="hd">
              <h2>芳华</h2>
              <div class="movie-type"><span>2D</span><span>IMAX</span></div>
            </div>
            <p>剧情、爱情、战争</p>
            <p>主演，黄轩，苗苗</p>
          </div>
          <div class="grade">
            9.9分
          </div>
          <div class="buy"><a href="#">购票</a></div>
        </a>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myTitle from '@/components/views/myTitle'
  import myFooter from '@/components/views/myFooter'
  export default {
    components:{
      myHeader,
      myTitle,
      myFooter
    }
  }
</script>

<style>
</style>
