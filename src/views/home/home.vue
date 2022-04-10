// 首页
<template>
  <div>
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
        <ul @click="gedan">
          <li
            v-for="(item, index) in xgsf"
            @click="getindex(index)"
            :class="myindex1 === index ? 'actives' : ''"
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
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "home",
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
      myindex1: 0
    };
  },
  methods: {
    getindex(index) {
      this.myindex = index;
    },
    fn(res) {
      if (res) {
        this.$refs.cartShow.prev();
      } else {
        this.$refs.cartShow.next();
      }
    },
    gedan(e) {
      let txt = e.target.childNodes[0].data;
      this.getGdtj(txt);
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
      arr.push({ a: "1", array: brr });
      return arr;
      // this.gdtjDate = arr;
    },
  },
  created() {
    this.getGdtj();
  },
};
</script>
<style scoped>
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
  left: -131px;
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
.swiper > div {
  z-index: 10;
}
.swiper:after {
  content: "";
  width: 100vw;
  height: 100%;
  z-index: 0;
  position: absolute;
  left: -10%;
  bottom: 0;
  background: url("https://y.qq.com/ryqq/static/media/bg_detail.bb32b2d1.jpg?max_age=2592000")
    no-repeat;
}
</style>
<style>
.el-carousel__indicators--outside button {
  background-color: #31c27c;
}
</style>
