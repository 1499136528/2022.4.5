let Mock = require("mockjs")
let data = [
    {
        id:"1",
        shangsheng:"422%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000001uaPM93kxk1R_3.jpg?max_age=2592000",
        geming:"孤勇者",
        name:"《英雄联盟：双城之战》动画剧集中文主题曲",
        time:"03:08"
    },
    {
        id:"2",
        shangsheng:"32%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000000y5gq7449K9I_2.jpg?max_age=2592000",
        geming:"美人鱼",
        name:"林俊杰",
        time:"03:51"
    },
    {
        id:"3",
        shangsheng:"31%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000002W2TWi0e4Gek_1.jpg?max_age=2592000",
        geming:"爱丫爱丫",
        name:"《爱情是从告白开始的》电视剧插曲",
        time:"03:03"
    },
    {
        id:"4",
        shangsheng:"27%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000",
        geming:"晴天",
        name:"周杰伦",
        time:"03:09"
    },
    {
        id:"5",
        shangsheng:"26%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000001aC9dM35U6KB_2.jpg?max_age=2592000",
        geming:"Letting Go",
        name:"蔡健雅",
        time:"03:02"
    },
    {
        id:"6",
        shangsheng:"24%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000",
        geming:"花海",
        name:"周杰伦",
        time:"03:03"
    },
    {
        id:"7",
        shangsheng:"24%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000000Vwygr4Y8BPi_2.jpg?max_age=2592000",
        geming:"哪里都是你",
        name:"队长",
        time:"02:37"
    },
    {
        id:"8",
        shangsheng:"20%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000003oK0zc0kOClL_2.jpg?max_age=2592000",
        geming:"Grey Suit",
        name:"SUHO (수호)",
        time:"03:42"
    },
    {
        id:"9",
        shangsheng:"19%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000003oK0zc0kOClL_2.jpg?max_age=2592000",
        geming:"Morning Star",
        name:"SUHO (수호)",
        time:"04:06"
    },
    {
        id:"10",
        shangsheng:"19%",
        imgUrl:"https://y.qq.com/music/photo_new/T002R300x300M000002Z9cl22TWRYU_1.jpg?max_age=2592000",
        geming:"Haru Haru (一天一天)",
        name:"BIGBANG (빅뱅)",
        time:"04:16"
    }
]
Mock.mock("/api/rege","get",function(config){
    console.log(config)
    return data
})