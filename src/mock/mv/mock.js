let mock=require('mockjs');
let arrs=[
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000004MlCJ0MkEao.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8471,
        time:"2022-05-15",
        typeid:1,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:2,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:2,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:5,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001feIO613ti15.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:600,
        time:"2022-05-15",
        typeid:3,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000003FnUW0PRfkq.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:2000,
        time:"2022-05-15",
        typeid:4,
        addressid:4,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:5,
        addressid:5,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:6,
        addressid:1,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:7,
        addressid:1,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000003n1Jry16cpJj.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:471,
        time:"2022-05-15",
        typeid:6,
        addressid:5,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002mDQO73HiTnH.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:7,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101001JBmRL2VtFxS.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:1,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101000s6V2A4f2J6F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:2,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001ZkWh90CQe8n.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.L",
        count:8621,
        time:"2022-05-15",
        typeid:3,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1, 
    },


    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000004MlCJ0MkEao.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8471,
        time:"2022-05-15",
        typeid:1,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:2,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:3,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:4,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001feIO613ti15.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:600,
        time:"2022-05-15",
        typeid:5,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000003FnUW0PRfkq.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:2000,
        time:"2022-05-15",
        typeid:6,
        addressid:2,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:7,
        addressid:2,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:1,
        addressid:3,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:2,
        addressid:3,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000003n1Jry16cpJj.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:471,
        time:"2022-05-15",
        typeid:3,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002mDQO73HiTnH.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:4,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101001JBmRL2VtFxS.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:5,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101000s6V2A4f2J6F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:6,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001ZkWh90CQe8n.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.L",
        count:8621,
        time:"2022-05-15",
        typeid:7,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:1,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:2,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:3,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:4, 
    }


    ,{
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000004MlCJ0MkEao.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8471,
        time:"2022-05-15",
        typeid:5,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:6,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:7,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M1010012rYXa0cfQ9F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:500,
        time:"2022-05-15",
        typeid:1,
        addressid:5,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001feIO613ti15.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:600,
        time:"2022-05-15",
        typeid:2,
        addressid:5,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M0000003FnUW0PRfkq.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:2000,
        time:"2022-05-15",
        typeid:3,
        addressid:5,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:4,
        addressid:5,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:5,
        addressid:5,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001DZqGE0MY4e3.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:6,
        addressid:5,
        zhuangtai:1
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000003n1Jry16cpJj.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:471,
        time:"2022-05-15",
        typeid:7,
        addressid:5,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002mDQO73HiTnH.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:841,
        time:"2022-05-15",
        typeid:1,
        addressid:4,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101001JBmRL2VtFxS.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:1,
        addressid:3,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M101000s6V2A4f2J6F.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.X",
        count:8621,
        time:"2022-05-15",
        typeid:2,
        addressid:2,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001ZkWh90CQe8n.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.A.L",
        count:8621,
        time:"2022-05-15",
        typeid:3,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000002ZtgDG0g9j4g.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:0
    },
    {
        imgurl:"https://y.qq.com/music/photo_new/T015R640x360M000001qd4Il2pblJ6.jpg?max_age=2592000",
        sing:"RUN AWAY",
        song:"L.X.L",
        count:8621,
        time:"2022-05-15",
        typeid:4,
        addressid:1,
        zhuangtai:1
    }
]
mock.mock(/\/api\/mv\?typeindex=\d&landindex=\d&oldindex=\d/,function(config){
    const obj=config.url.split('?').pop().split('&');
    const data=obj.map(item=>{
        return item.split('=');
    })
    const res=Object.fromEntries(data);
    // console.log(res)
    let ress=null;
    if(res.landindex!=0){
        ress=arrs.filter(item=>{
            return item.addressid==res.landindex;
        })
    }else{
        ress=arrs;
    }
    
    if(res.typeindex!=0){
        ress=ress.filter(item=>{
            return item.typeid==res.typeindex;
        })
    }
    ress=ress.filter(item=>{
        return item.zhuangtai==res.oldindex;
    })
    return {
        message:"success",
        data:ress
    }
})