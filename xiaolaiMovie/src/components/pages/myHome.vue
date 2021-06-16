<template>
  <div>
    <my-header>小莱电影</my-header>
    <my-title>影片</my-title>
    <div class="container">
      <div class="movie-list" v-for="(v,i) in list">
        <router-link :to="{path:'/detail',query:{id:v.MovieID}}">
          <div class="movie-img"><img :src="serverIP+v.ImgUrl" /></div>
          <div class="movie-info">
            <div class="hd">
              <h2>{{v.Name}}</h2>
              <div class="movie-type"><span>2D</span><span>IMAX</span></div>
            </div>
            <p>{{v.Type}}</p>
            <p>主演，{{v.Actors}}</p>
          </div>
          <div class="grade">
            {{v.Rate}}
          </div>
          <div class="buy"><router-link :to="{path:'/cinema',query:{id:v.MovieID}}">购票</router-link></div>
        </router-link>
      </div>

    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myTitle from '@/components/views/myTitle'
  import myFooter from '@/components/views/myFooter'
  import { Toast } from 'mint-ui'
  export default {
    components:{
      myHeader,
      myTitle,
      myFooter
    },
    data() {
      return{
        list: []
      }
    },
    created() {
      this.$http.get("/movie/new")
      // 200
      .then(res=>{
        this.list = res.data.Movie
      })
      // 300 400 500
      .catch(err=>{
        Toast("服务器错误")
      })
    }
  }
</script>

<style>
</style>
