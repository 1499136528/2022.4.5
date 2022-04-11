let Mock = require("mockjs");
let data = [
  [
    {
      tit: "流派",
      arr: [
        "流行",
        "电子",
        "轻音乐",
        "民谣",
        "说唱",
        "摇滚",
        "爵士",
        "RxB",
        "更多",
      ],
    },
    {
      tit: "语种",
      arr: ["英语", "粤语", "韩语", "日语", "国语", "更多"],
    },
    {
      tit: "热门",
      arr: ["官方歌单", "AI歌单", "免费热歌", "私藏"],
    },
    {
      tit: "主题",
      arr: [
        "KTV金曲",
        "网络歌曲",
        "现场音乐",
        "背景音乐",
        "经典老歌",
        "情歌",
        "儿歌",
        "AGG",
        "更多",
      ],
    },
    {
      tit: "场景",
      arr: ["夜店", "学习工作", "运动", "睡前", "跳舞", "派对"],
    },
  ],
  [
    {
      tit: "热门",
      arr: ["官方歌单", "AI歌单", "免费热歌", "私藏"],
    },
    {
      tit: "主题",
      arr: [
        "KTV金曲",
        "网络歌曲",
        "现场音乐",
        "背景音乐",
        "现场音乐",
        "背景音乐",
        "经典老歌",
        "情歌",
        "儿歌",
        "AGG",
        "更多",
      ],
    },
    {
      tit: "场景",
      arr: [
        "夜店",
        "学习工作",
        "咖啡馆",
        "运动",
        "睡前",
        "旅行",
        "跳舞",
        "派对",
        "更多",
      ],
    },
    {
      tit: "心情",
      arr: [
        "伤感",
        "伤心",
        "安静",
        "励志",
        "治愈",
        "思念",
        "甜蜜",
        "寂寞",
        "宣泄",
      ],
    },
    {
      tit: "年代",
      arr: ["00年代", "90年代", "80年代", "70年代"],
    },
  ],
];
let data1 = [
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/Ay2w92PeiaO57pZWMwecv6XBQBkTYHGfp3AyHQ7R0wL5SuiaMLN29H8w/300?n=1",
    title: "致幻电音：前奏沦陷的极致遐想",
    name: "嘉贤",
    num: "播放量：1.9亿",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/Kfat8dubG9jd2J815HySphxnWO0aGrr7goOWJ5BmZp8d8YGK6EvibzQ/300?n=1",
    title: "踏春乐旅：携欢快粤语赴盎然绿野",
    name: "False God 和平减一",
    num: "播放量：6.4万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/xAE9h1hNxiaiaWZILZnibv5ib6jvpPcQTAwvTkO1Ktvq9uVfvD4QGqJxIw/300?n=1",
    title: "LISA与我共冕",
    name: "芝华士CHIVAS",
    num: "播放量：7149",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/9y9iaMZVBBZQADAic0fiaGtP8yHNibibhKSIUUalWluYg2JiaxTvVFzdibJow/300?n=1",
    title: "绝美戏腔：一曲惊鸿，千里醉人间",
    name: "Ang鑫",
    num: "播放量：266.4万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/ptwOc6APUicz4xBFcklJUqxV33HH17fXiaABPxNuOBCwF9Nb7mJSmnqA/300?n=1",
    title: "R&B咖啡店·啜饮37°美式醇香",
    name: "Talia",
    num: "播放量：10万",
  },
  {
    imgUrl:
      "https://y.qq.com/mediastyle/global/img/playlist_300.png?max_age=2592000",
    title: "体验感拉满！让孤独感官尽情释放",
    name: "莹火虫",
    num: "播放量：33.1万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/HGUNm4O24JnTrFPO7BY7tVmGpQTLfk7HAAEEE81ownDwHYCXYIFuGQ/300?n=1",
    title: "来首欢快小调，做家务也有好心情",
    name: "海街日记",
    num: "播放量：2256.8万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/kTz2ibDseHIicShnLpLm7E1mibhN43pQOx424XPvVdD4ZXia7xRnfv4LMg/300?n=1",
    title: "华语治愈 | 温暖的人会不期而遇",
    name: "eve伽伽_",
    num: "播放量：1423.4万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/92nzXUDpJSibg4NkUGwCCG1YecoHFLVedOBPL7LicacvXrvyVC8eJe7xibJB92ghgtP/300?n=1",
    title: "怀旧经典｜重拾记忆里的流金岁月",
    name: "宝藏挖掘者_已退",
    num: "播放量：5446.0万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/pWY30OxPyoIrJicsjDicV295TGibvdGUibu5nE39L8DTCAuicTKaZfpENCCBeXjMVbl1M/300?n=1",
    title: "开车兜风热歌：晚霞在车窗外掠过",
    name: "狂人张三",
    num: "播放量：1233.7万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/oMphCibDIicibO3ibh8tztPnIvqCBKRjXSEX6BJpGl6Z5PXvH6XicVq4kzw/300?n=1",
    title: "热歌集：乐观和爱才是生活的解药",
    name: "个斑马滴",
    num: "播放量：1237.7万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/pdQoJl4bicLkEcMqicxFCLwT8I1aC9MvoLMad1HMWbeI5OGYsYboPXQw/300?n=1",
    title: "王靖雯不胖 | 细腻动人的故事音",
    name: "攸心",
    num: "播放量：1765.3万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/gva0HhSoPDJl5icpwOKCoySv6icJB5uz1lECuoeGOGSRsGTfTicic6rdVA/300?n=1",
    title: "满级人类进化之路必备BGM",
    name: "山鬼",
    num: "播放量：2607.09万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/p4v7TvafZK7kxTtMBqFBV6V7a1njhpDxficTPZsFTLpza2nvicjtoJ0A/300?n=1",
    title: "从新鲜感到敷衍，放弃只在一瞬间",
    name: "决绝撅子",
    num: "播放量：1183.9万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/N8fbXvYicachciaLnrZtmCCia17Ria4oZrcZIf7X9Z15fOOTCCiabE1WyrMpY86mNpk3f/300?n=1",
    title: "老歌怀旧｜昨夜星辰，涛声依旧",
    name: "毕生",
    num: "播放量：1293.6万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/ZS2nmh1hWV2OESzO7MBLDicPalqXMTiagk6eDvPrdIQbiaKiaB94E8MggQ/300?n=1",
    title: "聆听沉浸式情歌，3S逃离城市喧嚣",
    name: "查无此人",
    num: "播放量：1232.3万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/FHzfnOdfIBUQzvj3CJYl9WG5IwOyIflVAsJEFAZuhBdOYiaklsicJO0w/300?n=1",
    title: "伤感情歌 | 不恋旧情往后两清",
    name: "不是卷毛",
    num: "播放量：1208.6万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/yuKAlAl35R6C0TjYU8bA8rmPJHDibQLU5Ey3anFJd4MBkwe8ichicNPjg/300?n=1",
    title: "失恋集市：放开了手，却放不下心",
    name: "晚风漫漫",
    num: "播放量：1834.8万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/Ew9bD1smwm0PE4MG0lvfwQqFoEIrHbGOS0BssJ4V6LMvBNadmeKS9A/300?n=1",
    title: "90后昨日经典：华语乐坛黄金十年",
    name: "吃猫大鱼",
    num: "播放量：1255.1万",
  },
  {
    imgUrl:
      "https://qpic.y.qq.com/music_cover/1SfY100F49tBhYFqAvAf4Q20UxOmEBMgPvHGCgyWica8JYuxJTiaKoy3Ja4h1Qa4IV/300?n=1",
    title: "温情旋律｜香醇又暖心的热牛奶",
    name: "为你写诗",
    num: "播放量：1495.0万",
  },
];

Mock.mock("/api/fenleigedan", "get", function (config) {
  console.log(config);
  return { data, data1 };
});
