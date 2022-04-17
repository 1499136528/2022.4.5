<template>
  <div class="xdsf">
    <div class="block">
      <h1>新 碟 首 发</h1>
      <ul @click="xinge">
        <li
          v-for="(item, index) in datanav"
          @click="getindex1(index)"
          :class="myindex1 === index ? 'actives' : ''"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
      <div class="swiper">
        <div class="btn">
          <strong class="leftBtn" @click="fn1(true)">🐶</strong>
          <strong class="rightBtn" @click="fn1(false)">🦒</strong>
        </div>
        <el-carousel
          trigger="click"
          height="650px"
          indicator-position="outside"
          arrow="never"
          ref="cartShows"
          :autoplay="false"
        >
          <el-carousel-item
            class="items"
            v-for="(items, indexs) in data"
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
</template>

<script>
import instance from "@/api/index";
export default {
  name: "homeson2",
  methods: {
    fn1(res) {
      console.log(res);
      if (res) {
        this.$refs.cartShows.prev();
      } else {
        this.$refs.cartShows.next();
      }
    },
    async getnav() {
      let { data } = await instance.get("/xdsf", { data: null });
      this.datanav = data;
    },
    xinge(e) {
      let txt = e.target.childNodes[0].data;
      this.$emit("gettxt", txt);
    },
    getindex1(index) {
      this.myindex1 = index;
    },
  },
  data() {
    return {
      data: null,
      datanav: null,
      myindex1: 0,
    };
  },
  props: ["xdsfdata"],
  created() {
    this.getnav();
  },
  watch: {
    // 监听到父组件传递过来的数据后，加工一下，
    // 存到data中去，然后在页面上使用
    xdsfdata(newnew, oldold) {
      this.data = newnew;
      console.log(newnew);
    },
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
.block ul {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.block ul li {
  cursor: pointer;
  padding: 0 30px;
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
  width: 90%;
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
.el-carousel__container .boxssss {
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin:  auto;
}
.boxssss > div {
  width: 20%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
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
  bottom: 0;
  left: -10%;
  background: url("https://y.qq.com/ryqq/static/media/bg_detail.bb32b2d1.jpg?max_age=2592000");
  background-position: 0px 400px;
  z-index: 0;
}
.shu {
  display: flex;
  flex-direction: column;
  padding-top: 6px;
}
</style>
