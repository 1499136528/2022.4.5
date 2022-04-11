import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUi from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./css/reset.css";
import "@/assets/icon/iconfont.css";

Vue.config.productionTip = false;
Vue.use(ElementUi);
if (process.env.NODE_ENV === "development") {
  require("./mock/mock");
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
