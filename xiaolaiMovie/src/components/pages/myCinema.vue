<template>
  <div>
   <my-header>
     <my-back slot="back"></my-back>
     影院
     </my-header>
    <!-- <my-title><h3>{{$route.query.name}}<em>{{$route.query.rate}}分</em></h3></my-title> -->
    <my-title><h3>{{movie.Name}}<em>{{movie.Rate}}分</em></h3></my-title>
    <div class="container">
      <div class="scene-item" v-for="(v,i) in shows">
        <span class="c-time">{{v.Time}}</span>
        <span class="c-type">国语3D<em>{{v.Room}}</em></span>
        <span class="c-price">￥{{v.Price}}</span>
        <span class="c-btn"><button onclick="location.href='#/seat'">选择购票</button></span>
      </div>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
  import myTitle from '@/components/views/myTitle'
  import { Toast } from 'mint-ui'
  export default {
    components: {
      myHeader,
      myBack,
      myTitle,
    },
    data() {
      return{
        shows:[],
        movie:[]
      }
    },
    created() {
      this.$http.get('/movie/shows',{
        params:{
          MovieID:this.$route.query.id
        }
      })
      .then(res=>{
        this.shows = res.data.Movie
      })
      .catch(err=>{
        Toast("服务器错误")
      })

      this.$http.get('/movie/detail',{
        params:{
          MovieID:this.$route.query.id
        }
      })
      .then(res=>{
        this.movie = res.data.Movie[0]
      })
      .catch(err=>{
        Toast("服务器错误")
      })
    }
  }
</script>

<style>
</style>
