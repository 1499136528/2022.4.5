<template>
  <div class="home">
    <div class="header">
      <!-- 头部内容 -->
      <div class="topnav"></div>
      <div class="router_nav" @click="routerNav">
        <div v-for="(item, index) in nav" :key="index" :path="item.path">{{ item.title }}</div>
      </div>
    </div>
    <div class="container">
      <!-- 组件路由 内容区域 -->
      <router-view />
    </div>
    <div class="footer">
      <!-- 底部区域 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      nav: [
        {title:"首页",path:"/"},
        {title:"歌手",path:"/singer"},
        {title:"新碟",path:"/disc"},
        {title:"排行榜",path:"/list"},
        {title:"分类歌单",path:"/classify"},
        {title:"电台",path:"/radio"},
        {title:"MV",path:"/mv"},
        {title:"数字专辑",path:"/album"},
        {title:"票务",path:"/ticket"}
      ],
    };
  },
  components: {},
  methods:{
    routerNav(e) {
      let txt = e.target.attributes.path.nodeValue;
      this.$router.push(txt);
    },
  }
};
</script>
<style scoped>
.home {
  background: #f3f3f3;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header,
.container,
.footer {
  padding: 0 12%;
  box-sizing: border-box;
  width: 100%;
}

/* 头部区域 */
.header {
  background: white;
  height: 150px;
}
.topnav {
  height: 90px;
  border-bottom: 1px solid #e1e1e1;
}
.router_nav {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  display: flex;
  padding: 0 12%;
}
.router_nav div {
  flex: 1;
  text-align: center;
  cursor: pointer;
}

/* 内容区域 */
/* .container {
  height: 100vh;
} */

/* 底部区域 */
.footer {
  height: 200px;
  background: black;
}
</style>
