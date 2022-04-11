let Mock = require("mockjs");
let data = [
  {
    id: "1",
    shangsheng: "422%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000003eNXft4QQa3G_3.jpg?max_age=2592000",
    geming: "봄여름가을겨울 (Still Life)",
    name: "BIGBANG (빅뱅)",
    time: "03:08",
  },
  {
    id: "2",
    shangsheng: "32%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000002Kz5Jo1uzHjz_1.jpg?max_age=2592000",
    geming: "Blank Space",
    name: "Taylor Swift",
    time: "03:51",
  },
  {
    id: "3",
    shangsheng: "31%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M00000237V2k4KF0HD_2.jpg?max_age=2592000",
    geming: "愿你",
    name: "黄静美",
    time: "03:03",
  },
  {
    id: "4",
    shangsheng: "27%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000002R593Q4V0Cek_1.jpg?max_age=2592000",
    geming: "Intentionally",
    name: "Taylor Grey",
    time: "03:09",
  },
  {
    id: "5",
    shangsheng: "26%",
    imgUrl:
      "https://y.qq.com/music/photo_new/T002R300x300M000001lsvAA3RwfnA_1.jpg?max_age=2592000",
    geming: "Leave The Door Open",
    name: "Bruno Mars/Anderson .Paak",
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
Mock.mock("/api/shiqu", "get", function (config) {
  console.log(config);
  return data;
});
