let Mock = require("mockjs");
let data = [
  {
    id: "1",
    shangsheng: "422%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000001oX53W4dFtMR_1.jpg?max_age=2592000",
    geming: "玫瑰少年",
    name: "周深",
    time: "03:08",
  },
  {
    id: "2",
    shangsheng: "32%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003eNXft4QQa3G_3.jpg?max_age=2592000",
    geming: "봄여름가을겨울 (Still Life)",
    name: "Taylor Swift",
    time: "03:51",
  },
  {
    id: "3",
    shangsheng: "31%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000001oX53W4dFtMR_1.jpg?max_age=2592000",
    geming: "不甘",
    name: "张轩",
    time: "03:03",
  },
  {
    id: "4",
    shangsheng: "27%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000001oX53W4dFtMR_1.jpg?max_age=2592000",
    geming: "被动",
    name: "吉克隽逸",
    time: "03:09",
  },
  {
    id: "5",
    shangsheng: "26%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000002cuuKy15973j_1.jpg?max_age=2592000",
    geming: "突然一场雨",
    name: "蓝心羽",
    time: "03:02",
  },
  {
    id: "6",
    shangsheng: "24%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003ZVvvY1c92xc_1.jpg?max_age=2592000",
    geming: "WA DA DA",
    name: "Kep1er (케플러)",
    time: "03:03",
  },
  {
    id: "7",
    shangsheng: "24%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003nMZ1d0r2YwO_1.jpg?max_age=2592000",
    geming: "清明",
    name: "李兴荣",
    time: "02:37",
  },
  {
    id: "8",
    shangsheng: "20%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003oK0zc0kOClL_2.jpg?max_age=2592000",
    geming: "Grey Suit",
    name: "SUHO (수호)",
    time: "03:42",
  },
  {
    id: "9",
    shangsheng: "19%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003oK0zc0kOClL_2.jpg?max_age=2592000",
    geming: "Morning Star",
    name: "SUHO (수호)",
    time: "04:06",
  },
  {
    id: "10",
    shangsheng: "19%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000002Z9cl22TWRYU_1.jpg?max_age=2592000",
    geming: "Haru Haru (一天一天)",
    name: "BIGBANG (빅뱅)",
    time: "04:16",
  },
];
Mock.mock("/api/zhishu", "get", function (config) {
  console.log(config);
  return data;
});
