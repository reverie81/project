<template>
  <div class="detail-right">
    <div class="hd">
      <h3>移动互联网开发全套书籍</h3>
    </div>
    <div class="tips">
      <p>突破传统教与学，合理利用碎片化学习时间。在线课堂、视频课堂，论坛交流，提供课外知识补充。</p>
    </div>
    <div class="select-menus">
      <div class="form-item book-name">
        <label>书籍名称：</label>
        <!-- 循环输出书籍名称，激活选中的书籍 -->
        <button @click="changeActive(i)" v-for="(v,i) in books" :class="{active:i == active}">{{v.bookname}}</button>
      </div>
      <div class="form-item count">
        <label>购买数量：</label>
        <!-- 控制购买数量 -->
        <button @click="num>0?num--:num;">-</button><input type="text" v-model="num"><button @click="num++">+</button>
      </div>
      <div class="form-item">
        <label>适用校区：</label>
        <select v-model="selected">
          <option value="" disabled>请选择所在校区</option>
          <option value="武汉校区">武汉校区</option>
          <option value="信阳校区">信阳校区</option>
          <option value="开封校区">开封校区</option>
          <option value="三门峡校区">三门峡校区</option>
        </select>
      </div>
      <div class="form-item">
        <label>总价：</label>
        <!-- 计算属性 计算总价 -->
        <span>{{totalprice}}元</span>
      </div>
      <div class="form-item btn">
        <!-- 控制模态框显示 -->
        <input type="button" value="立即购买" @click="ismodal=true" />
      </div>
    </div>

    <div class="illustrate">
      <div class="hd">
        <h3>书籍简介</h3>
      </div>
      <div class="describe">
        <p>
          高端专业独享教材：解决学生课堂知识理解及教师教学配套。教材所有内容都是以一个综合项目为目标，每学期的课程内容都是围绕综合项目开展的，同时内含丰富的课程资源及面试题库等企业必备信息库。编撰者均有相关专业多年授课及行业经验，且多为获得相关专业顶级认证的专业人士。
        </p>
      </div>
    </div>
    <!-- 控制模态框显示 -->
    <my-modal v-show="ismodal" v-bind:ismodal="ismodal" @hidemodal="ismodal=false">
      <!-- 自定义模态框内容 -->
      <table>
        <tr>
          <th>购买数量</th>
          <th>书籍单价</th>
        </tr>
        <tr>
          <td>{{num}}</td>
          <td>{{price}}</td>
        </tr>
      </table>
    </my-modal>
    </transition>
  </div>
  </div>
</template>

<script>
  // 引入模态框
  import myModal from '@/components/myModal'
  export default {
    data() {
      return {
        ismodal: false,
        active: 0, // 默认激活第一个
        // 模态框显示内容
        price: 35,
        num: 1,
        selected: '武汉校区',
        books: [{
            bookname: 'Linux系统管理',
            price: 38
          },
          {
            bookname: '企业网络互联技术',
            price: 48
          },
          {
            bookname: 'Windows系统管理',
            price: 35
          },
          {
            bookname: '计算机网络技术',
            price: 55
          }
        ]
      }
    },
    methods: {
      // 点击
      changeActive(i) {
        this.active = i
        this.price = this.books[i].price
      }
    },
    computed: {
      // 总价
      totalprice() {
        return this.num * this.price
      }
    },
    components: {
      myModal
    }
  }
</script>

<style>
</style>
