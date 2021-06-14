<template>
  <div class="content">
    <div class="detail-left">
      <div class="tipsImg">
        <!-- 接收id值，使用touter.query接收 -->
        <img :src="changImg[$route.query.id-1].imgUrl" alt="">
      </div>
      <!-- 循环专业列表 -->
      <div class="menu" v-for="(v,i) in majors">
        <ul>
          <li>
            <!-- 列表切换，激活显示 id是否等于当前标签的索引 -->
            <router-link :to="{path:'/detail/'+v.name,query:{id:i+1}}" :class="{active:i==$route.query.id-1}">{{v.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 路由视图，显示develop apply -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        changImg: [{
            imgUrl: "static/img/1.png"
          },
          {
            imgUrl: "static/img/2.png"
          },
          {
            imgUrl: "static/img/3.png"
          },
          {
            imgUrl: "static/img/4.png"
          }
        ],
        majors: [{
            id: 1,
            title: '移动互联网开发书籍',
            name: 'develop'
          },
          {
            id: 2,
            title: '移动互联网应用书籍',
            name: 'apply'
          },
          {
            id: 3,
            title: '大数据书籍',
            name: 'bigdata'
          },
          {
            id: 4,
            title: '人工智能书籍',
            name: 'ai'
          },
        ]
      }
    }
  }
</script>

<style>
</style>
