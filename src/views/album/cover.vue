<template>
    <div class="cover-item">
        <h3 class="title">{{title}}</h3>
        <ul class="cover-list">
            <li v-for="(item,index) in covers" :key="index">
                <div class="cover_img"><img :src="item.imgsrc" alt="" ></div>
                <p class="name">{{item.name}}</p>
                <p class="author">{{item.author}}</p>
                <div class="price">
                    <span class="may">{{item.price}}</span>
                    <div class="btn">立即购买</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import instance from '@/api/index'
export default {
    name:"cover",
    data(){
        return {
            title:'',
            covers:null
        }
    },
    props:['mess'],
    watch:{
        mess(){
            this.res=this.mess;
            this.getCover(this.res)
        }
    },
    methods:{
        async getCover(res){
            const {data}=await instance.get('/album/'+res);
            this.covers=data.data.data;
            this.title=data.data.title;
        }
    }
    
}
</script>

<style scoped>
    
    .cover-item{
        padding-bottom:20px;
    }
    .cover-item .title{
        font-size:24px;
        height: 60px;
        line-height:60px;
        font-weight:normal;
    }
    .cover-list{
        display:flex;
        font-size:14px;
        overflow:hidden;
        padding-bottom:44px;
        margin-bottom:10px;
        /* justify-content: space-between; */
    }
    .cover-list li{
        width: 19%;
        margin-right:1.2%;
        flex-shrink: 0;
    }
    .cover-list .name{
        height: 23px;
        line-height:23px;
    }
    .cover-list .author{
        height: 23px;
        line-height:23px;
        color:#999;
    }
    .cover-list .price{
        display:flex;
        height: 28px;
        justify-content: space-between;
        align-items:center;
    }
    .price .may{
        color:#999;
    }
    .price .btn{
        width: 80px;
        text-align:center;
        border:1px solid #c9c9c9;
        font-size:12px;
        line-height:26px;
        height: 28px;
        box-sizing: border-box;
    }
    .cover-list .cover_img{
        width: 100%;
        margin-bottom:15px;
        overflow:hidden;
    }
    .cover_img img{
        width: 100%;
        transition:all .3s;
        
    }
    .cover_img:hover img{
        transform:scale(1.1);
    }
</style>