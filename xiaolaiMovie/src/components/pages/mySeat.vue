<template>
  <div>
    <my-header>
      <my-back slot="back"></my-back>
      影院
    </my-header>

    <div class="seat-title">
      <h2>{{$route.query.Name}}</h2>
      <h4>今天{{$route.query.Time}},{{$route.query.RoomType}}</h4>
      <div class="lobby">
        <span>{{$route.query.Room}}银幕</span>
      </div>
    </div>
    <div class="container seat">
      <div class="seating">
        <ul>
          <!-- active: 绿色（选中） active-selled：红色（已经买完了） -->
          <li v-for="(v,i) in dseat" :class="v.active" @click="choose(i)"></li>
        </ul>
      </div>
      <div class="tips-seat">
        <span class="selecting">可选</span><span class="selected">已选</span><span class="selled">已售</span>
      </div>
      <div class="ticket">
        <h5>已选座位</h5>
        <div class="ticket-item" v-for="(v,i) in ticketArray" @click="remove(i)">
          <a href="#">
            {{v.Row}}排{{v.Col}}座<em>￥{{$route.query.Price}}</em>
          </a>
        </div>
      </div>
    </div>
    <div class="seat-bar">
      <a href="#" @click.prevent="order">￥{{$route.query.Price*ticketArray.length}}确认选座</a>
    </div>
  </div>
</template>

<script>
  import myHeader from '@/components/views/myHeader'
  import myBack from '@/components/views/myBack'
  import {
    Toast
  } from 'mint-ui'
  export default {
    components: {
      myHeader,
      myBack
    },
    data() {
      return {
        // 所有的座位数据,选择的座位
        dseat: [],
        ticketArray: []
      }
    },
    methods: {
      choose(i) {
        // 座位的位置
        let n = i + 1
        let Row = Math.floor(n / 10) + 1
        let Col = n % 10

        // 增加订单
        if (this.dseat[i].active == "") {
          if (this.ticketArray.length >= 4) {
            Toast("最多选四张票")
            return;
          }
          this.dseat[i].active = "active"
          this.ticketArray.push({
            Row,
            Col,
            TimeID: this.$route.query.TimeID
          })
          return;
        }
        // 删除订单
        if (this.dseat[i].active == "active") {
          this.dseat[i].active = ""
          let index = this.ticketArray.findIndex((v, i) => {
            return v.Row == Row && v.Col == Col
          })
          this.ticketArray.splice(index, 1)
        }
      },
      remove(i) {
        let index = (this.ticketArray[i].Row - 1) * 10 + this.ticketArray[i].Col - 1
        this.dseat[index].active = ""
        this.ticketArray.splice(i, 1)
      },
      order() {
        if (!this.ticketArrar) {
          Toast("未选座")
          return;
        }
        this.$http.post("/orders", {
            username: localStorage.username,
            tokenID: localStorage.tokenID,
            ticketArray: this.ticketArray,
            TimeID: this.$route.query.TimeID
          })
          .then(res => {
            console.log(res.data)
            if (res.data.errCode == 0) {
              Toast("下单成功")
              this.$router.go(0)
            } else {
              Toast("登录过期")
            }
          })
          .catch(err => {
            Toast("服务器错误")
          })
      }
    },
    created() {
      // 页面初始化 生成作为
      for (let i = 0; i < 100; i++) {
        this.dseat.push({
          active: ""
        })
      }
      // 请求座位数据
      this.$http.get("/movie/seat", {
          params: {
            TimeID: this.$route.query.TimeID
          }
        })
        .then(res => {
          // 根据服务器获取的座位数据，修改初始化座位数据
          this.sseat = res.data.Movie
          for (let i = 0; i < this.sseat.length; i++) {
            let index = (this.sseat[i].Row - 1) * 10 + this.sseat[i].Col - 1
            this.dseat[index].active = "active-selled"
          }
        })
        .catch(err => {
          Toast("网络异常")
        })
    }

  }
</script>

<style>
</style>
