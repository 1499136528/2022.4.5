<template>
  <div class="jctj">
    <h3>精彩推荐</h3>
    <div class="swiper">
      <div class="btn">
        <strong class="leftBtn" @click="fn1(true)">🐶</strong>
        <strong class="rightBtn" @click="fn1(false)">🦒</strong>
      </div>
      <el-carousel
        trigger="click"
        height="230px"
        indicator-position="outside"
        arrow="never"
        ref="cartShows"
        :autoplay="false"
      >
        <el-carousel-item
          class="items"
          v-for="(items, indexs) in jctj"
          :key="indexs"
        >
          <div class="box">
            <div v-for="(item, index) in items.array" :key="index">
              <el-image
                style="width: 100%; height: 100%"
                :src="item.image"
                :fit="fit"
              ></el-image>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeson1",
  methods: {
    fn1(res) {
      console.log(res);
      if (res) {
        this.$refs.cartShows.prev();
      } else {
        this.$refs.cartShows.next();
      }
    },
  },
  data() {
    return {
      data: null,
    };
  },
  props: ["jctj"],
  watch: {
    // 监听到父组件传递过来的数据后，加工一下，
    // 存到data中去，然后在页面上使用
    jctj(newnew, oldold) {
      this.data = newnew;
    },
  },
};
</script>
<style scoped>
div h3 {
  font-size: 30px;
  font-weight: 555;
  padding: 50px 0 24px;
  text-align: center;
}
.swiper {
  position: relative;
  padding: 35px 0 30px;
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
.box {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.box>div{
  width: 590px;
}
.el-carousel--horizontal {
  overflow-x: clip;
}
.main .btn:after {
  content: "";
  display: block;
  width: 120%;
  height: 100%;
  position: absolute;
  top: 20%;  
  left: -10%;
  background: url("https://y.qq.com/ryqq/static/media/bg_detail.bb32b2d1.jpg?max_age=2592000");
  z-index: 0;
}
</style>
<style>
.jctj .el-carousel__indicators--outside {
  bottom: -28px;
}
</style>