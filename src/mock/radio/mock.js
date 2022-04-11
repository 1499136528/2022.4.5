let  mock=require('mockjs');

let arr=[
    {
        type:"热门",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000",
                txt:"个性电台"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260297.jpg?max_age=2592000",
                txt:"随心听"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054458.jpg?max_age=2592000",
                txt:"抖音神曲"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/3188826.jpg?max_age=2592000",
                txt:"深度催眠"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2929760.jpg?max_age=2592000",
                txt:"情感治愈站"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054505.jpg?max_age=2592000",
                txt:"网络流行"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054413.jpg?max_age=2592000",
                txt:"热歌"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054491.jpg?max_age=2592000",
                txt:"热门翻唱"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260360.jpg?max_age=2592000",
                txt:"起床"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_time_radio/1259786.jpg?max_age=2592000",
                txt:"睡前"
            }
        ]
    }
]

mock.mock('/api/radio',function(config){
    console.log(config);
    return {

    }
})