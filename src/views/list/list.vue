// 排行榜单
<template>
  <div class="all">
    <div class="list">
      <div class="list-first">
        <h3>巅峰榜</h3>
        <ul class="list-ul">
          <li>
            <router-link to="/list/biaosheng" active-class="green"
              >飙升榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/rege" active-class="green"
              >热歌榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/xinge" active-class="green"
              >新歌榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/zhishu" active-class="green"
              >流行指数榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/dianyin" active-class="green"
              >喜力电音榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/tenxun" active-class="green"
              >腾讯音乐人原创榜</router-link
            >
          </li>
          <li>
            <router-link to="/list/shiqu" active-class="green"
              >听歌识曲榜</router-link
            >
          </li>
          <li>MV榜</li>
        </ul>
      </div>
    </div>
    <div class="vie">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.all {
  display: flex;
  background: #fff;
  /* height: 200vh; */
}
.list {
  margin-left: 156px;
  margin-top: 108px;
  border: 1px solid #f0f0f0;
  width: 247px;
  padding: 26px 23px;
  box-sizing: border-box;
}
.list-first h3 {
  font-size: 26px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 30px;
  box-sizing: border-box;
  margin-bottom: 28px;
}
.list-ul li {
  font-size: 19px;
  margin-bottom: 31px;
  cursor: pointer;
}
.vie {
  margin-top: 134px;
  margin-left: 41px;
}
.green {
  background: #31c37c;
}
</style>
