import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children:[
      {path:"/",name:"homes",component:()=>import("../views/home/home.vue")},
      {path:"/singer",name:"singer",component:()=>import("../views/singer/singer.vue")},
      {path:"/disc",name:"disc",component:()=>import("../views/disc/disc.vue")},
      {path:"/list",name:"list",component:()=>import("../views/list/list.vue")},
      {path:"/classify",name:"classify",component:()=>import("../views/classify/classify.vue")},
      {path:"/radio",name:"radio",component:()=>import("../views/radio/radio.vue")},
      {path:"/mv",name:"mv",component:()=>import("../views/mv/mv.vue")},
      {path:"/album",name:"album",component:()=>import("../views/album/album.vue")},
      {path:"/ticket",name:"ticket",component:()=>import("../views/ticket/ticket.vue")},
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
