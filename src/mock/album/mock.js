let mock=require('mockjs');

let arrs=[
    {
        type:"new",
        title:"最新上架",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003eNXft4QQa3G.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003oK0zc0kOClL.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000000IdMCY2pTAiz.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000001drh4c4MnrFU.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000002ImJBx1kFprw.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    },
    {
        type:"hot",
        title:"本周热销",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004LFNMl1kvYuJ.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004KHjpn0p4Az7.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004Tvu0F207cps.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004TvSd03uUezv.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000002kRWck0w3Dp5.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    },
    {
        type:"xinsheng",
        title:"新声力量集结",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000000QQduf287rel.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000001aFNlG2wbTky.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000000T1I4F3qIrAK.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004QLBBc1Af3VO.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000000B9SZf2hS8gF.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    },
    {
        type:"incity",
        title:"内地专辑推荐",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000002N3gR01CnUiG.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003BfrXL2wgVBU.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000000tvOOc33qTms.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000001puVIM1uSzx1.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M0000040Wckk2Kle82.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    },
    {
        type:"outcity",
        title:"韩国专辑推荐",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003piLsO07y5KR.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003HRMdT2QQXuE.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M0000017LgQo3ToiVi.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003W7h9X2mB84P.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000002GPD7o00cSey.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    },
    {
        type:"video",
        title:"影视剧OST推荐",
        data:[
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004ACXGc0xd8Hy.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000003NIazp1MKvRn.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000001y3Xsw4JwnVL.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000001xa2eb279b30.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            },
            {
                imgsrc:"https://y.qq.com/music/photo_new/T002R300x300M000004604QQ424dcU.jpg?max_age=2592000",
                name:"봄여름가을겨울 (Still Life)",
                author:"BIGBANG (빅뱅)",
                price:"￥4",
            }
        ]
    }
]

let banner=[
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4260199.jpg?max_age=2592000",
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4252002.jpg?max_age=2592000",
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4280055.gif?max_age=2592000",
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4276636.jpg?max_age=2592000",
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4260199.jpg?max_age=2592000",
    "https://y.gtimg.cn/music/common//upload/t_musicmall_focus/4269077.jpg?max_age=2592000"
]
// '/api/album/new'
mock.mock(/\/api\/album\/\w/,function(config){
    const api=config.url.split('/').pop();
    const data=arrs.filter(item=>{
        return item.type==api
    })
    return {
        message:"success",
        data:data[0]
    }
})


mock.mock('/api/banner',function(config){
    return {
        message:"success",
        data:banner
    }
})