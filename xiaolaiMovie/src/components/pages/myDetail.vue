<template>
  <div>
    <my-header>
      <my-back slot="back"></my-back>
      {{movie.Name}}
    </my-header>
    <div class="container detail-container">
      <div class="banner">
        <div class="filter-box"></div>
        <div class="thumbnail">
          <img :src="serverIP+movie.ImgUrl"/>
        </div>
        <div class="movie-intr">
          <h1>{{movie.Name}}</h1>
          <div class="star-level">
            <div id="star_con" class="star-vote">
              <span id="add_star" class="add-star"></span>
              <span id="del_star" class="del-star" :style="{left:left*19+'px'}"></span>
            </div>
            <div class="point">
              {{movie.Rate}}
            </div>
          </div>
          <p>{{movie.Type}}</p>
          <p>主演，{{movie.Actors}}</p>
          <p>上映时间：{{movie.ReleaseTime}}</p>
        </div>
      </div>
      <div class="movie-recommend">
        <p>{{movie.Intro}}</p>
      </div>
    </div>
    <div class="order-bar">
      <router-link :to="{path:'/cinema',query:{id:movie.MovieID,name:movie.Name,rate:movie.Rate}}">立即订购</router-link>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
  import { Toast } from 'mint-ui'
  export default {
    components: {
      myHeader,
      myBack
    },
    data() {
      return{
        movie: {},
        left:0
      }
    },
    created() {
      this.$http.get('/movie/detail',{
        params:{
          MovieID:this.$route.query.id
        }
      })
      .then(res=>{
        this.movie = res.data.Movie[0]
        let Rate = this.movie.Rate
        // console.log(94*(Rate/10))

        if (Rate==10) {
          this.left=5
        } else if(Rate<10 && Rate>=8){
          this.left=4
        } else if(Rate<8 && Rate>=6){
          this.left=3
        } else if(Rate<6 && Rate>=4){
          this.left=2
        } else if(Rate<4 && Rate>=2){
          this.left=1
        }else{
          this.left=0
        }
      })
      .catch(err=>{
        Toast("服务器错误")
      })
    }
  }
</script>

<style>
</style>
