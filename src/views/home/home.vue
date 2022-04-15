// 首页
<template>
  <div class="main">
    <div class="home_1">
      <div class="block">
        <h1>歌 单 推 荐</h1>
        <ul @click="gedan">
          <li
            v-for="(item, index) in gdtj"
            @click="getindex(index)"
            :class="myindex === index ? 'actives' : ''"
            :key="index"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="swiper">
          <div class="btn">
            <strong class="leftBtn" @click="fn(true)">🐶</strong>
            <strong class="rightBtn" @click="fn(false)">🦒</strong>
          </div>
          <el-carousel
            trigger="click"
            height="320px"
            indicator-position="outside"
            arrow="never"
            ref="cartShow"
            :autoplay="false"
          >
            <el-carousel-item
              class="items"
              v-for="(items, indexs) in gdtjDate"
              :key="indexs"
            >
              <div v-for="(item, index) in items.array" :key="index">
                <div class="imgbox">
                  <el-image
                    style="width: 100%; height: 100%"
                    :src="item.image"
                    class="imgs"
                  ></el-image>
                  <div class="zz"><i class="iconfont icon-bofang1"></i></div>
                </div>
                <p>{{ item.title }}</p>
                <div class="num">
                  播放量：<span>{{ item.num }}</span>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="home_2">
      <div class="block">
        <h1>新 歌 首 发</h1>
        <ul @click="xinge">
          <li
            v-for="(item, index) in xgsf"
            @click="getindex1(index)"
            :class="myindex1 === index ? 'actives' : ''"
            :key="index"
          >
            {{ item.title }}
          </li>
        </ul>
        <div class="swiper">
          <div class="btn">
            <strong class="leftBtn" @click="fn1(true)">🐶</strong>
            <strong class="rightBtn" @click="fn1(false)">🦒</strong>
          </div>
          <el-carousel
            trigger="click"
            height="350px"
            indicator-position="outside"
            arrow="never"
            ref="cartShows"
            :autoplay="false"
          >
            <el-carousel-item
              class="items"
              v-for="(items, indexs) in xgsfDate"
              :key="indexs"
            >
              <div class="boxssss">
                <div v-for="(item, index) in items.array" :key="index">
                  <div class="imgbox">
                    <el-image
                      style="width: 100%; height: 100%"
                      :src="item.image"
                      class="imgs"
                    ></el-image>
                    <div class="zz"><i class="iconfont icon-bofang1"></i></div>
                  </div>
                  <div class="shu">
                    <p>{{ item.title }}</p>
                    <div class="num">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="home_3">
      <homeson1 v-bind:jctj="jctj"></homeson1>
    </div>
  </div>
</template>

<script>
import instance from "@/api/index";
import homeson1 from '@/views/home/homeson1';
export default {
  name: "home",
  components:{
    homeson1
  },
  data() {
    return {
      gdtj: [
        { title: "为你推荐" },
        { title: "九月推荐" },
        { title: "经典国语" },
        { title: "经典粤语" },
        { title: "官方歌单" },
        { title: "情歌" },
      ],
      xgsf: [
        { title: "最新" },
        { title: "内地" },
        { title: "港台" },
        { title: "欧美" },
        { title: "韩国" },
        { title: "日本" },
      ],
      gdtjDate: null,
      myindex: 0,
      xgsfDate: null,
      myindex1: 0,
      jctj: null,
    };
  },
  methods: {
    getindex(index) {
      this.myindex = index;
    },
    fn(res) {
      console.log(this);
      if (res) {
        this.$refs.cartShow.prev();
      } else {
        this.$refs.cartShow.next();
      }
    },
    getindex1(index) {
      this.myindex1 = index;
    },
    fn1(res) {
      console.log(res);
      if (res) {
        this.$refs.cartShows.prev();
      } else {
        this.$refs.cartShows.next();
      }
    },
    gedan(e) {
      let txt = e.target.childNodes[0].data;
      this.getGdtj(txt);
    },
    xinge(e) {
      let txt = e.target.childNodes[0].data;
      this.getxgsf(txt);
    },
    async getxgsf(txt) {
      let flag = txt || "最新";
      let { data } = await instance.get("/xgsf", { data: flag });
      this.xgsfDate = this.zldata(data, 9);
    },
    async getGdtj(txt) {
      let flag = txt || "为你推荐";
      let { data } = await instance.get("/getgd", { data: flag });
      this.gdtjDate = this.zldata(data, 5);
    },
    zldata(data, num) {
      let arr = [];
      let brr = [];
      for (let i = 0; i < data.length; i++) {
        brr.push(data[i]);
        if ((i + 1) % num === 0) {
          arr.push({ a: "1", array: brr });
          brr = [];
        }
      }
      if(brr.length==0){ return arr;}
      arr.push({ a: "1", array: brr });
      return arr;
    },
    async gettjsp(){
      let {data} = await instance.get("/tj")
      let datas = this.zldata(data,2);
      this.jctj = datas;
    }
  },
  created() {
    this.getGdtj();
    this.getxgsf();
    this.gettjsp();
  }
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-left: 10%; */
  justify-content: center;
}
.items[data-v-39f87be5] {
  justify-content: center;
}
.actives {
  color: #31c27c;
}
h1 {
  font-size: 30px;
  font-weight: 555;
  padding: 50px 0 24px;
  text-align: center;
}
.home_1,
.home_2 {
  width: 100%;
  position: relative;
}
.block ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.block ul li {
  cursor: pointer;
  margin: 0 30px;
}
.swiper {
  position: relative;
}
.btn {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: -10.5%;
  top: 0;
  overflow: hidden;
}
.btn > strong {
  position: absolute;
  top: 50%;
  margin-top: -100px;
  width: 70px;
  height: 100px;
  color: white;
  line-height: 100px;
  text-align: center;
  font-size: 40px;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  cursor: pointer;
}
.btn .leftBtn {
  left: 10px;
  transform: translate(-72px, 0);
  border-radius: 0 10px 10px 0;
}
.btn .rightBtn {
  right: 0px;
  transform: translate(72px, 0);
  border-radius: 10px 0 0 10px;
}
.swiper:hover strong {
  transform: translate(0, 0);
  z-index: 99999999;
}
.swiper {
  padding: 35px 0 30px;
}
.items {
  display: flex;
  font-size: 14px;
}
.items > div {
  margin: 0 8px;
}
.imgbox {
  width: 224px;
  height: 224px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
/* .home_2 .items{
  width: 1200px;x`
} */
/* .home_2 .el-carousel__container{
  text-align: center;
  
} */
.home_2 .imgbox {
  width: 86px;
  height: 86px;
}
/* .home_2 .items[data-v-39f87be5] > div {
  width: 380px;
}
.home_2 .items[data-v-39f87be5] {
  flex-wrap: wrap;
} */
.items p {
  padding: 10px 0 6px;
  cursor: pointer;
}
.items p:hover {
  color: #31c27c;
}
.items .num {
  color: #999;
  font-size: 12px;
}
.imgbox .zz {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: -2;
}
.imgbox .zz i {
  transition: 0.5s;
}
.imgbox .imgs {
  transition: 0.5s;
}
.imgbox:hover .zz {
  z-index: 2;
}
.imgbox:hover .imgs {
  transform: scale(1.2);
}
.imgbox:hover .zz i {
  font-size: 70px;
}
.home_2 .el-carousel__container .boxssss {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
}
.boxssss > div {
  width: 33%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
.el-carousel--horizontal {
  overflow-x: clip;
}
/* .home_2 .el-carousel__container {
  display: flex;
  justify-content: center;
} */
/* .home_2 .el-carousel__container {
  width: 1200px;
} */
/* .swiper > div {
  z-index: 10;
} */
.btn:after {
  content: "";
  display: block;
  width: 120%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -10%;
  background: url("https://y.qq.com/ryqq/static/media/bg_detail.bb32b2d1.jpg?max_age=2592000");
  z-index: 0;
}
.shu{
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top: 20px;
}

.home_3{
  width: 100%;
}
</style>
<style>
.el-carousel__indicators--outside button {
  background-color: #31c27c;
}
.el-carousel__indicators--outside{
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -10px;
}
</style>
