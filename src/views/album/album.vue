// 数字专辑
<template>
  <div class="main">
    <!-- 数字专辑 -->
    <div class="swiper">
        <div class="btn">
            <span class="prev" @click="arrowClick('prev')">👈</span>
            <span class="next" @click="arrowClick('next')">👉</span>
        </div>
        <el-carousel :interval="3000" type="card" height="300px" arrow="never"  indicator-position="outside" ref="cardShow">
            <el-carousel-item v-for="(item,index) in banner" :key="index">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="cover">
        <cover v-for="(item,index) in api" :key="index" :mess="item"></cover>
    </div>
  </div>
</template>

<script>
import instance from '@/api';
import cover from './cover.vue'
export default {
  name: "album",
  data(){
      return {
        api:['','','','','',''],
        banner:null
      }
  },
  methods: {
    arrowClick(res){
        if(res=='prev'){
            this.$refs.cardShow.prev()
        }else if(res=='next'){
            this.$refs.cardShow.next()
        }
    },
    asyfn(){
        const that=this;
        setTimeout(function(){
            that.api=['new','hot','xinsheng','incity','outcity','video']
        },50)
    },
    async getswiper(){
        const {data}=await instance.get("/banner");
        this.banner=data.data;
    }
  },
  components:{
      cover
  },
  created(){
      this.asyfn()
      this.getswiper()
  }
};
</script>
<style scoped>
    .swiper{
        padding:70px 0 40px 0;
        position:relative;
    }
    .swiper .btn{
        position:absolute;
        width: 99.2vw;
        top:50%;
        left:-12vw;
        box-sizing: border-box;
        margin-top:-55px;
        height: 110px;
        color:#000;
        font-size:32px;
        font-weight:bold;
        line-height:100px;
        overflow:hidden;
    }
    .swiper .btn span{
        width: 80px;
        height: 110px;
        position:absolute;
        text-align:center;
        transition:all .3s;
        background: #eee;
        cursor: pointer;
    }
    .swiper .btn .next{
        right:0;
        transform:translate(80px,0)
    }
    .swiper .btn .prev{
        left:0;
        transform:translate(-80px,0)
    }
    .swiper:hover .btn>span{
        transform:translate(0,0);
    }
    .cover{
        margin-top:28px; 
    }
</style>