<template>
  <div class="main">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <h3>巅峰榜</h3>
        <h4>{{ item.title }}</h4>
        <div class="icon">
          <span>———</span><i class="iconfont icon-bofang1"></i>
        </div>
        <div class="list">
          <div>
            <div>1</div>
            <p>{{ item.one.title }}</p>
            <p>{{ item.one.name }}</p>
          </div>
          <div>
            <div>2</div>
            <p>{{ item.two.title }}</p>
            <p>{{ item.two.name }}</p>
          </div>
          <div>
            <div>3</div>
            <p>{{ item.three.title }}</p>
            <p>{{ item.three.name }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import instance from "@/api/index";
export default {
  name: "list",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    async getData() {
      let { data } = await instance.get("/home_list");
      console.log(data);
      this.data = data;
    },
  },
  created() {
    this.getData();
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  color: white;
}
ul {
  display: flex;
  height: 567px;
}
ul > li {
  width: 224px;
  height: 100px;
  background: purple;
  box-sizing: border-box;
  margin: 0 10px;
  height: 500px;
  background: url("https://y.qq.com/ryqq/static/media/bg_index_top.5314c494.jpg?max_age=2592000");
}
ul li:nth-child(2) {
  background-position: 224px 0;
}
ul li:nth-child(3) {
  background-position: 448px 0;
}
ul li:nth-child(4) {
  background-position: 672px 0;
}
ul li:nth-child(5) {
  background-position: 896px 0;
}
h3,
h4 {
  font-weight: 500;
  text-align: center;
}
h3 {
  margin: 50px 0 10px;
  font-size: 20px;
}
h4 {
  font-size: 26px;
}
.icon {
  margin: 6px 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
.icon .iconfont {
  font-size: 0;
}
.icon:hover span {
  display: none;
}
.icon:hover .iconfont {
  font-size: 50px;
  transition: 0.5s;
  z-index: 1;
}
p {
  width: 66%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  padding: 7px 0;
}
.list {
  padding: 0 26px;
}
.list > div {
  position: relative;
  margin-bottom: 16px;
  padding-left: 27px;
}
.list > div > div {
  position: absolute;
  top: 7px;
  left: 10px;
}
</style>