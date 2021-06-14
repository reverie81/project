<template>
  <div class="content">
    <div class="left">
      <div class="sideBar">
        <div class="hd">
          <em>全部书籍</em>
        </div>
        <!-- 循环左侧列表 -->
        <div class="books-list" v-for="(v,i) in list">
          <h3>{{v.title}}</h3>
          <ul>
            <li v-for="v in v.booksList">
              <a href="#">{{v.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- right -->
    <div class="right">
      <div class="banner">
        <img src="static/img/banner01.png" alt="">
      </div>
      <!-- 循环 右侧 -->
      <div class="products" v-for="(v,i) in products">
        <div class="imgBox">
          <img :src="v.imgUrl" alt="">
        </div>
        <div class="info">
          <h3>{{v.title}}</h3>
          <p>{{v.description}}</p>
          <div class="btn">
            <!-- 跳转二级路由 发送id值（索引序号） -->
            <router-link :to="{path:'/detail/'+v.name,query:{id:i+1}}">立即购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: {
          soft: {
            title: '移动互联网开发专业书籍',
            booksList: [{
                name: "Web标准网站设计之道"
              },
              {
                name: "Photoshop商业网站设计"
              },
              {
                name: "C#编程基础"
              },
              {
                name: "SQL Server数据库基础"
              },
              {
                name: "C#桌面应用程序开发"
              },
              {
                name: "Java语言基础"
              },
              {
                name: "Java面向对象编程"
              },
              {
                name: "Java语言高级特性"
              }
            ]
          },
          net: {
            title: '移动互联网应用专业书籍',
            booksList: [{
                name: "计算机基础应用"
              },
              {
                name: "Linux系统管理"
              },
              {
                name: "企业网络互联技术"
              },
              {
                name: "Windows网络服务管理"
              },
              {
                name: "Windows系统管理"
              },
              {
                name: "Windows活动目录管理"
              },
              {
                name: "计算机网络技术"
              }
            ]
          }
        },
        products: [{
            id: 1,
            title: '移动互联网开发全套书籍',
            description: "高端专业独享教材,突破传统教与学,合理利用碎片化学习时间。",
            imgUrl: "static/img/1.png",
            name: 'develop'
          },
          {
            id: 2,
            title: '移动互联网应用全套书籍',
            description: "内含丰富的课程资源，面试题库等企业必备信息库。",
            imgUrl: "static/img/2.png",
            name: 'apply'
          },
          {
            id: 3,
            title: '大数据全套书籍',
            description: "正在到来的数据革命，以及它如何改变政府、商业与我们的生活。",
            imgUrl: "static/img/3.png",
            name: 'bigdata'
          },
          {
            id: 4,
            title: '人工智能全套书籍',
            description: "你对人工智能的一切疑问，好读易懂，有趣有料。",
            imgUrl: "static/img/4.png",
            name: 'ai'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
