// 电台
<template>
    <div class="main">
        <div class="category">
            <ul class="left" @click="getIndex">
                <li v-for="(item,index) in res" :key="index" :path="index" :class="myindex==index?'active':''">{{item.type}}</li>
            </ul>
        </div>
        <div class="list">
            <div v-for="(item,index) in res" :key="index" ref="List">
                <div class="title">{{item.type}}</div>
                <div class="item">
                    <div class="radio" v-for="(items,indexs) in item.data" :key="indexs">
                        <div class="zhezhao">
                            <img :src="items.imgurl" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays"></div>
                        </div>
                        <div class="txt">{{items.txt}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import instance from '@/api/index'
    export default ({
        name: "radio",
        data(){
            return {
                res:null,
                myindex:0,
                timer:null,
                doc:null,
                flag:true
            }
        },
        methods: {
            async getRadio(){
                const {data}=await instance.get('/radio');
                this.res=data.data;
            },
            getIndex(res){
                clearInterval(this.timer)
                this.flag=false;
                const index=res.target.attributes.path.nodeValue;
                const oH=this.$refs.List[index].offsetTop;
                const that=this;
                this.timer=setInterval(function(){
                    let sT=that.duc.scrollTop;
                    const sd=(oH-that.duc.scrollTop)/6;
                    
                    const speed=sd>0?Math.ceil(sd):Math.floor(sd);
                    
                    that.duc.scrollTop=sT+speed;
                    sT=that.duc.scrollTop;
                    if(that.duc.scrollHeight-that.duc.clientHeight<=sT){
                        clearInterval(that.timer);
                        that.flag=true;
                    }
                    if(sT==oH){
                        clearInterval(that.timer);
                        that.flag=true;
                    }
                    
                },10)
                this.myindex=index

            },
            getScrollTop(){
                if(this.flag){
                    const oH=this.duc.scrollTop;
                    const odiv=document.querySelectorAll('.list>div');
                    odiv.forEach((item,index)=>{
                        const top=item.offsetTop;
                        const height=item.offsetHeight;
                        if(oH>top -height/2&& oH<top+height/2){
                            this.myindex=index;
                        }
                    })
                }
                
            }
        },
        created(){
            this.getRadio()
        },
        mounted(){
            window.onscroll=this.getScrollTop;
            this.duc=document.documentElement;
        },
        destroyed(){
            window.onscroll=null;
        }
    })
</script>
<style scoped>
    img{
        vertical-align: middle;
    }
    .main{
        display:flex;
    }
    .category{
        position: sticky;
        height: 649px;
        background: url('https://y.qq.com/mediastyle/yqq/img/radio_sidebar.png?max_age=2592000') no-repeat ;
        top:0;
    }
    .category .left{
        padding-left:63px;
    }
    .category .left li{
        line-height:59px;
        cursor: pointer;
    }
    .category .left .active{
        color:#31c27c;
    }
    .list{
        
        padding:55px 0 0 0;
        margin-left:calc( 245px - 108px);   
        flex:1;
    }
    .list .title{
        height: 20px;
        margin-bottom:38px;
        position:relative;
        color: #999999;
    }
    .list .title:after{
        position:absolute;
        content:'';
        height: 1px;
        width: 100%;
        background: #ececec;
        display:block;
        left:43px;
        top:10px;
    }
    .list .item {
        display:flex;
        flex-wrap:wrap;
        font-size:14px;
    }

    .list .item .radio{
        width: 23%;
        margin-right:2.6%;
        margin-bottom:44px;
    }
    .list .item .radio:nth-child(4n+4){
        margin-right:0;
    }
    .list .item .radio .zhezhao{
        width: 100%;
        position:relative;
        overflow:hidden;
    }
    .item .radio .zhezhao .img{
        width: 100%;
        transition: all .4s;
    }
    .item .radio .zhezhao .play{
        position:absolute;
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        background: rgba(0,0,0,0.6);
        opacity: 0;
        display: flex;
        align-items:center;
        justify-content:center;
        transition: all .3s;
    }
    .item .radio .zhezhao .plays{
        width: 40px;
        height: 40px;
        transition: all .3s;
        cursor: pointer;
    }
    .item .radio .zhezhao:hover .play{
        opacity: 1;
    }
    .item .radio .zhezhao:hover .img{
        transform: scale(1.1);
    }
    .item .radio .zhezhao:hover .plays{
        transform: scale(2);
    }
    .item .radio .txt{
        margin-top:15px;
    }
</style>