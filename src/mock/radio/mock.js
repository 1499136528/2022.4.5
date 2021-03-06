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
    },
    {
        type:"心情",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1829116.jpg?max_age=2592000",
                txt:"忧伤"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1829120.jpg?max_age=2592000",
                txt:"快乐"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1829086.jpg?max_age=2592000",
                txt:"平静"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1829133.jpg?max_age=2592000",
                txt:"兴奋"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1829073.jpg?max_age=2592000",
                txt:"寂寞"
            }
        ]
    },
    {
        type:"主题",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054413.jpg?max_age=2592000",
                txt:"热歌"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054428.jpg?max_age=2592000",
                txt:"新歌"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054429.jpg?max_age=2592000",
                txt:"情歌"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1262632.jpg?max_age=2592000",
                txt:"影视原声"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1652761.jpg?max_age=2592000",
                txt:"独立唱歌人"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1898840.jpg?max_age=2592000",
                txt:"经典日漫"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054491.jpg?max_age=2592000",
                txt:"热门翻唱"
            }
        ]
    },
    {
        type:"场景",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_time_radio/1259786.jpg?max_age=2592000",
                txt:"睡前"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260360.jpg?max_age=2592000",
                txt:"起床"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260355.jpg?max_age=2592000",
                txt:"学习"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260362.jpg?max_age=2592000",
                txt:"雨天"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260356.jpg?max_age=2592000",
                txt:"工作"
            }
        ]
    },
    {
        type:"曲风",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1897292.jpg?max_age=2592000",
                txt:"欧美排行"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1974876.jpg?max_age=2592000",
                txt:"电音"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1871565.jpg?max_age=2592000",
                txt:"流行"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1871573.jpg?max_age=2592000",
                txt:"古风"
            },
            {
                imgurl:'https://y.qq.com/music/common/upload/t_music_radio/1871576.jpg?max_age=2592000',
                txt:"民谣"
            }
        ]
    },
    {
        type:"语言",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1974814.png?max_age=2592000",
                txt:"国语"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1974802.png?max_age=2592000",
                txt:"粤语"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1974790.png?max_age=2592000",
                txt:"英语"
            }
        ]
    },
    {
        type:"人群",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1922360.jpg?max_age=2592000",
                txt:"儿童"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1922387.jpg?max_age=2592000",
                txt:"80后"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1922391.jpg?max_age=2592000",
                txt:"90后"
            }
        ]
    },
    {
        type:"乐器",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1847762.jpg?max_age=2592000",
                txt:"钢琴"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1847936.jpg?max_age=2592000",
                txt:"吉他"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1847944.jpg?max_age=2592000",
                txt:"小提琴"
            }
        ]
    },
    {
        type:"陪你听",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1871576.jpg?max_age=2592000",
                txt:"民谣"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2054256.jpg?max_age=2592000",
                txt:"音乐故事"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1871573.jpg?max_age=2592000",
                txt:"古风"
            }
        ]
    },
    {
        type:"厂牌",
        data:[
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/2478366.jpg?max_age=2592000",
                txt:"华纳音乐"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1260770.jpg?max_age=2592000",
                txt:"滚石唱片"
            },
            {
                imgurl:"https://y.qq.com/music/common/upload/t_music_radio/1974854.jpg?max_age=2592000",
                txt:"华研音乐"
            }
        ]
    }
]

mock.mock('/api/radio',function(config){
    return {
        message:'success',
        data:arr
    }
})