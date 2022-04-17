let Mock = require("mockjs")
let data = [
    {
        "title":"热歌",
        "one":{
            "title":"孤勇者",
            "name":"陈奕迅"
        },
        "two":{
            "title":"晴天",
            "name":"周杰伦"
        },
        "three":{
            "title":"美人鱼",
            "name":"林俊杰"
        }
    },
    {
        "title":"新歌",
        "one":{
            "title":"爱丫爱丫",
            "name":"李浩然"
        },
        "two":{
            "title":"晚风心里吹",
            "name":"阿梨粤"
        },
        "three":{
            "title":"我的眼泪你的战利品",
            "name":"于冬然"
        }
    },
    {
        "title":"流行指数",
        "one":{
            "title":"我想要(Live)",
            "name":"杨宗纬"
        },
        "two":{
            "title":"太想念",
            "name":"豆包"
        },
        "three":{
            "title":"我的眼泪你的战利品",
            "name":"于冬然"
        }
    },
    {
        "title":"欧美",
        "one":{
            "title":"In My Head (Explicit)",
            "name":"Lil Tjay"
        },
        "two":{
            "title":"That's Hilarious (Explicit)",
            "name":"Charlie Puth"
        },
        "three":{
            "title":"Bet On Me",
            "name":"Walk Off the Earth/D Smoke"
        }
    },
    {
        "title":"韩国",
        "one":{
            "title":"LOVE DIVE",
            "name":"IVE"
        },
        "two":{
            "title":"봄여름가을겨울 (Still Life)",
            "name":"BIGBANG (빅뱅)"
        },
        "three":{
            "title":"MANIAC",
            "name":"Stray Kids (스트레이 키즈)"
        }
    }
]

Mock.mock("/api/home_list","get",function(config){
    return data;
})
