<template>
  <div class="block">
    <el-carousel trigger="click" height="200px" :autoplay="false">
      <el-carousel-item v-for="(item, index) in arrs" :key="index">
        <div class="list-all">
          <div v-for="(items, indexs) in item" :key="indexs">
            <div class="liupai">
              <h3>{{ items.tit }}</h3>
              <ul class="list">
                <li v-for="(itemss, indexss) in items.arr" :key="indexss">
                  {{ itemss }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="tuijian">
      <h2>推荐歌单</h2>
      <ul class="list-bottom">
          <li v-for="(item,index) in arr" :key="index">
              <img :src="item.imgUrl" alt="" class="image1">
              <p class="title1">{{item.title}}</p>
              <p class="name1">{{item.name}}</p>
              <p class="num1">{{item.num}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "classify",
  data() {
    return {
      arrs: null,
      num: null,
      arr:null
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/fenleigedan");
      console.log(data);
      this.arrs = data.data;
      this.num = data.length;
      this.arr = data.data1
      console.log(this.arr)
      console.log(this.arrs);
    },
  },
  created() {
    this.getdata();
  },
};
</script>
<style scoped>
.block {
  background: #f3f3f3;
}
h3 {
  color: #979998;
}
.list-all {
  display: flex;
  margin:70px 240px 0 240px;
}
.liupai {
  width: 240px;
  border-right: 1px solid #efefef;
  margin-left: 40px;
}
.list {
  display: flex;
  width: 200px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 10px;
}
.list li {
  width: 30%;
  font-size: 14px;
}
.tuijian{
    margin-left: 270px;
    margin-top: 30px;
}
.tuijian h2{
    font-size: 23px;
    font-weight: 400;
}
.list-bottom{
    width: 1300px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
}
.list-bottom li{
    width: 230px;
    height: 230px;
    margin-bottom: 100px;
}
.image1{
    width: 100%;
    height: 100%;
}
.list-bottom li p{
    font-size: 14px;
}
.title1{
    margin-top: 10px;
}
.name1,.num1{
    color: #ccccca;
}
</style>
