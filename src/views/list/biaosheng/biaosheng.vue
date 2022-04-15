<template>
  <div>
    <div class="top">
      <h3>飙升榜</h3>
      <span class="time">2022-04-04</span>
      <span>榜单规则</span>
    </div>
    <div class="btns">
      <button>播放全部</button>
      <button>添加到</button>
      <button>下载</button>
      <button>批量操作</button>
      <button>评论(23353)</button>
    </div>
    <div class="bottom">
      <div class="bottom-title">
        <ul class="bottom-list">
          <li>歌曲</li>
          <li>歌手</li>
          <li>时长</li>
        </ul>
        <ul class="bottom-list1">
          <li v-for="(item, index) in arrs" :key="index">
            <div class="basis-left">
              <span class="num">{{ item.id }}</span>
              <span class="shangsheng">{{ item.shangsheng }}</span>
              <img :src="item.imgUrl" alt="" class="image" />
              <span class="geming">{{ item.geming }}</span>
            </div>
            <div class="basis-right">
              <span class="name">{{ item.name }}</span>
              <span class="timer">{{ item.time }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "biaosheng.vue",
  data() {
    return {
      arrs: null,
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/biaosheng");
      console.log(1);
      console.log(data);
      this.arrs = data;
      console.log(this.arrs);
    },
  },
  created() {
    this.getdata();
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
}
.top h3 {
  font-size: 30px;
  color: #2d1e0b;
  margin-right: 18px;
}
.top .time {
  margin-right: 18px;
  color: #919296;
}
.btns {
  margin-top: 42px;
}
.btns button {
  background: #fff;
  border: 1px solid #dcdcdc;
  padding: 14px 31px;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
}
.bottom {
  width: 1360px;
  /* height: 100vh; */
  background: #fcfcfc;
  overflow: hidden;
  margin-top: 20px;
}
.bottom-list {
  display: flex;
  margin-left: 165px;
  margin-top: 24px;
  margin-bottom: 36px;
}
.bottom-list li:nth-child(1) {
  margin-right: 753px;
}
.bottom-list li:nth-child(2) {
  margin-right: 248px;
}
.bottom-list1 li {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}
.basis-left {
  display: flex;
  align-items: center;
  width: 70%;
}
.basis-right {
  display: flex;
  align-items: center;
  width: 30%;
}
.basis-right .name {
  width: 69%;
}
.image {
  width: 80px;
  height: 80px;
  margin-left: 15px;
  margin-right: 10px;
}
.num {
  width: 5%;
}
.shangsheng {
  width: 9%;
}
</style>
