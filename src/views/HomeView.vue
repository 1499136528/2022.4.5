<template>
  <div class="home">
    <div class="header">
      <!-- 头部内容 -->
      <div class="topnav">
        <div>
          <img
            src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
            alt=""
          />
        </div>
        <ul class="u">
          <li class="active">音乐馆</li>
          <li>我的音乐</li>
          <li>客户端</li>
          <li>开放平台</li>
          <li>VIP</li>
        </ul>
        <div>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="搜索音乐、MV、歌单、用户"
          ></el-autocomplete>
        </div>
        <div class="login">
          <div>登录</div>
        </div>
        <div class="selet">
          <div class="select">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
            >
              <el-submenu index="1">
                <template slot="title">开通VIP</template>
                <el-menu-item index="1-1">开通绿钻豪华版</el-menu-item>
                <el-menu-item index="1-2">开通付费包</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">充值</template>
                <el-menu-item index="2-1">购买乐币</el-menu-item>
                <el-menu-item index="2-2">充值饭票</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </div>
      <div class="router_nav" @click="routerNav">
        <div v-for="(item, index) in nav" :class="act === index ? 'active':''" :key="index" @click="getIndex(index)" :path="item.path">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="container">
      <!-- 组件路由 内容区域 -->
      <router-view />
    </div>
    <div class="footer">
      <!-- 底部区域 -->
      <div class="footer_top">
        <dl>
          <dt>下载QQ音乐客户端</dt>
          <dd>
            <div>
              <i class="iconfont icon-PCduanrukou"></i>
              <p>PC版</p>
            </div>
            <div>
              <i class="iconfont icon-shebei_pingguo_diannao"></i>
              <p>Mac版</p>
            </div>
            <div>
              <i class="iconfont icon-anzhuo"></i>
              <p>Android版</p>
            </div>
            <div>
              <i class="iconfont icon-iconfontapple"></i>
              <p>iPhone版</p>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>下载QQ音乐客户端</dt>
          <dd>
            <div>
              <i class="iconfont icon-quanminkge"></i>
              <div>
                <div>全民K歌</div>
                <div>车载互联</div>
              </div>
            </div>
            <div>
              <i class="iconfont icon-yinxiao"></i>
              <div>
                <div>银河音效</div>
                <div>QQ演出</div>
              </div>
            </div>
            <div>
              <i class="iconfont icon-bofangqi_play-two"></i>
              <p>QPlay</p>
            </div>
            <div>
              <i class="iconfont icon-zhibo"></i>
              <p>Fan直播伴侣</p>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>下载QQ音乐客户端</dt>
          <dd>
            <ul>
              <li>CJ ENM</li>
              <li>腾讯视频</li>
              <li>手机QQ空间</li>
              <li>最新版QQ</li>
              <li>腾讯社交广告</li>
              <li>电脑管家</li>
              <li>QQ浏览器</li>
              <li>腾讯微云</li>
              <li>腾讯云</li>
              <li>企鹅FM</li>
              <li>智能电视网</li>
              <li>当贝市场</li>
              <li>酷我音乐</li>
              <li>酷狗听书</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="footer_cen">
        <div>
          <h3>开放平台</h3>
          <ul>
            <li>QQ音乐开放平台</li>
            <li>腾讯音乐人</li>
            <li>音乐谁</li>
          </ul>
        </div>
        <div>
          <h3>TME集团官网</h3>
          <ul><li>腾讯音乐</li></ul>
        </div>
      </div>
      <div class="footer_botm">
        <ul>
          <li>关于腾讯</li>|
          <li>About Tencent</li>|
          <li>服务条款</li>|
          <li>用户服务协议</li>|
          <li>隐私政策</li>|
          <li>权力声明</li>|
          <li>广告服务</li>|
          <li>腾讯招聘</li>|
          <li>客服中心</li>|
          <li>网站导航</li>
        </ul>
        <p>Copyright © 1998 - 2022 Tencent. <span>All Rights Reserved.</span></p>
        <ul>
          腾讯公司 
          <li>版权所有</li>|
          <li>营业执照</li>| 网络文化经营许可证
          <li>粤网文[2020]3396-195号</li>|客服电话
          <li>4006016666</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      nav: [
        { title: "首页", path: "/" },
        { title: "歌手", path: "/singer" },
        { title: "新碟", path: "/disc" },
        { title: "排行榜", path: "/list" },
        { title: "分类歌单", path: "/classify" },
        { title: "电台", path: "/radio" },
        { title: "MV", path: "/mv" },
        { title: "数字专辑", path: "/album" },
        { title: "票务", path: "/ticket" }
      ],
      state1: "",
      act:0
    };
  },
  components: {},
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    getIndex(index){
      this.act = index;
    },
    routerNav(e) {
      console.log(e);
      let txt = e.target.attributes.path.nodeValue;
      this.$router.push(txt);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "我们的歌" },
        { value: "冰雪奇缘2" },
        { value: "张杰" },
        { value: "桥边姑娘" },
        { value: "星辰大海" },
      ];
    },
  },
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
<<<<<<< HEAD
  padding: 0 8%;
=======
>>>>>>> 846f4ae82e1f9e7822500e2077575bb82e1254f3
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
  line-height: 90px;
  display: flex;
  border-bottom: 1px solid #e1e1e1;
}
.topnav .u {
  display: flex;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 500;
  padding-right: 2%;
}
.topnav .u li {
  padding: 0 20px;
  cursor: pointer;
}
.topnav .active {
  background: #31c27c;
  color: white;
}
.topnav img {
  margin-top: 28px;
}
.selet {
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.select {
  height: 70px;
  overflow: hidden;
}
.login {
  margin: 0 10px;
}
.inline-input {
  width: 200px;
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
.el-submenu__title {
  background: #31c27c !important;
  padding: 0 !important;
}

/* 内容区域 */
.container {
  /* height: 100vh; */
  padding-bottom: 20vh;
<<<<<<< HEAD
=======
  box-sizing: border-box;
>>>>>>> 846f4ae82e1f9e7822500e2077575bb82e1254f3
}

/* 底部区域 */
.footer {
  background: #333;
  color: #999;
  font-size: 15px;
}
.footer_top .iconfont {
  color: #999;
  font-size: 38px;
  cursor: pointer;
}
.footer_top .iconfont:hover {
  color: #31c27c;
}
.footer_top {
  display: flex;
  justify-content: space-between;
}
.footer_top dt {
  margin: 80px 0 30px;
}
.footer_top dl+dl{
  margin-left: 90px;
}
.footer_top dd{
  display: flex;
  margin-left: -24px;
}
.footer_top dd>div{
  padding: 0 24px;
  font-size: 14px;
  text-align: center;
}
.footer_top .iconfont+p,.footer_top .iconfont+div{
  margin-top: 10px;
  margin-left: -10px;
  width: 150%;
  text-align: center;
}
.footer_top div div {
  margin-top: 10px;
}
.footer_top ul{
  display: flex;
  flex-wrap: wrap;
  margin-left: 24px;
}
.footer_top ul li{
  width: 100px;
  margin-bottom: 12px;
  font-size: 13px;
}
.footer_top dd div:hover,.footer_top dd li:hover,.footer_cen h3:hover,.footer_cen li:hover{
  cursor: pointer;
  color: #31c27c;
}

.footer_cen{
  display: flex;
}
.footer_cen div{
  width: 300px;
  margin-right: 200px;
}
.footer_cen h3{
  font-weight: normal;
  margin: 100px 0 40px;
}
.footer_cen div ul {
  content: "";
  display: block;
  clear: both;
}
.footer_cen div ul li{
  float: left;
  margin-right: 20px;
}
.footer_botm{
  text-align: center;
  font-size: 12px;
  width: 100%;
  padding: 60px 0 30px;
}
.footer_botm ul{
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
}
.footer_botm ul li{
  padding: 6px;
}
.footer_botm ul li:hover,.footer_botm span:hover{
  color: #31c27c;
  cursor: pointer;
}

.active {
  color: #42b983;
}
</style>
