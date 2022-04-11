import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "homes",
        component: () => import("../views/home/home.vue"),
      },
      {
        path: "singer",
        name: "singer",
        component: () => import("../views/singer/singer.vue"),
      },
      {
        path: "disc",
        name: "disc",
        component: () => import("../views/disc/disc.vue"),
      },
      {
        path: "list",
        name: "list",
        component: () => import("../views/list/list.vue"),
      },
      {
        path: "classify",
        name: "classify",
        component: () => import("../views/classify/classify.vue"),
      },
      {
        path: "radio",
        name: "radio",
        component: () => import("../views/radio/radio.vue"),
      },
      { path: "mv", name: "mv", component: () => import("../views/mv/mv.vue") },
      {
        path: "album",
        name: "album",
        component: () => import("../views/album/album.vue"),
      },
      {
        path: "ticket",
        name: "ticket",
        component: () => import("../views/ticket/ticket.vue"),
      },
    ],
<<<<<<< HEAD
    children: [
      {
        path: "/",
        name: "homes",
        component: () => import("../views/home/home.vue"),
      },
      {
        path: "/singer",
        name: "singer",
        component: () => import("../views/singer/singer.vue"),
      },
      {
        path: "/disc",
        name: "disc",
        component: () => import("../views/disc/disc.vue"),
      },
      {
        path: "list",
        redirect: { name: "biaosheng" },
        name: "list",
        component: () => import("../views/list/list.vue"),
        children: [
=======
    children:[
      {path:"/",name:"homes",component:()=>import("../views/home/home.vue")},
      {path:"/singer",name:"singer",component:()=>import("../views/singer/singer.vue")},
      {path:"/disc",name:"disc",component:()=>import("../views/disc/disc.vue")},
      {
        path:"list",
        redirect:{name:"biaosheng"},
        name:"list",
        component:()=>import("../views/list/list.vue"),
        children:[
>>>>>>> 5738124a77fd182356ec6ac030b12b8226a6b424
          {
            path: "biaosheng",
            name: "biaosheng",
            component: () => import("../views/list/biaosheng/biaosheng.vue"),
          },
          {
            path: "rege",
            name: "rege",
            component: () => import("../views/list/rege/rege.vue"),
          },
          {
            path: "xinge",
            name: "xinge",
            component: () => import("../views/list/xinge/xinge.vue"),
          },
          {
            path: "zhishu",
            name: "zhishu",
            component: () => import("../views/list/zhishu/zhishu.vue"),
          },
          {
            path: "dianyin",
            name: "dianyin",
            component: () => import("../views/list/dianyin/dianyin.vue"),
          },
          {
            path: "tenxun",
            name: "tenxun",
            component: () => import("../views/list/tenxun/tenxun.vue"),
          },
          {
<<<<<<< HEAD
            path: "shiqu",
            name: "shiqu",
            component: () => import("../views/list/shiqu/shiqu.vue"),
          },
        ],
      },
      {
        path: "/classify",
        name: "classify",
        component: () => import("../views/classify/classify.vue"),
      },
      {
        path: "/radio",
        name: "radio",
        component: () => import("../views/radio/radio.vue"),
      },
      {
        path: "/mv",
        name: "mv",
        component: () => import("../views/mv/mv.vue"),
      },
      {
        path: "/album",
        name: "album",
        component: () => import("../views/album/album.vue"),
      },
      {
        path: "/ticket",
        name: "ticket",
        component: () => import("../views/ticket/ticket.vue"),
      },
    ],
=======
            path:"shiqu",
            name:"shiqu",
            component:()=>import("../views/list/shiqu/shiqu.vue")
          }
        ]
    },
      {path:"/classify",name:"classify",component:()=>import("../views/classify/classify.vue")},
      {path:"/radio",name:"radio",component:()=>import("../views/radio/radio.vue")},
      {path:"/mv",name:"mv",component:()=>import("../views/mv/mv.vue")},
      {path:"/album",name:"album",component:()=>import("../views/album/album.vue")},
      {path:"/ticket",name:"ticket",component:()=>import("../views/ticket/ticket.vue")},
    ]
>>>>>>> 5738124a77fd182356ec6ac030b12b8226a6b424
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
