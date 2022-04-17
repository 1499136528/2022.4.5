let Mock = require("mockjs");
let data = [
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4291494.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4291494.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4290335.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4290335.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4291494.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4291494.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4290335.gif?max_age=2592000"},
    {"image":"https://y.qq.com/music/common/upload/MUSIC_FOCUS/4290335.gif?max_age=2592000"}
]

Mock.mock("/api/tj","get",function(config){
    // console.log(config);
    return data;
});