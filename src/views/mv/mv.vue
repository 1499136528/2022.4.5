// MV
<template>
<<<<<<< HEAD
  <div>MV</div>
</template>

<script>
export default {
  name: "mv",
  methods: {},
};
</script>
<style scoped></style>
=======
    <div class="main">
        <div class="navbtn">
            <div class="top navs">
                <span class="tag">区域</span>
                <div class="tags">
                    <span v-for="(item,index) in navtop" :key="index" :class="myindex==index?'active':''" @click='getIndex(index)'>{{item}}</span>
                </div>
            </div>
            <div class="bottom navs">
                <span class="tag">版本</span>
                <div class="tags">
                    <span v-for="(item,index) in navbottom" :key="index" :class="myindexs==index?'active':''" @click='getIndexs(index)'>{{item}}</span>
                </div>
            </div>
        </div>
        <div class="video">
            <div class="title">
                <div class="left">
                    <span v-if="!tags[0]&&!tags[1]">全部MV</span>
                    <div v-if="tags[0]||tags[1]" class="tag">
                        <div v-for="(item,index) in tags" :key="index">
                            <span  v-if="item" class="tags">
                                {{item}}
                                <i class="el-icon-close" @click='close(index)'></i>
                            </span>
                        </div>
                    </div>   
                </div>
                <div class="right">
                    <span v-for="(item,index) in tagold" :key="index" :class="index==myid?'active':''" @click='getid(index)'>{{item}}</span>
                    <!-- <span>最新</span>
                    <span>最热</span> -->
                </div>
            </div>
            <div class="mv_item">
                <!-- <div class="mv_list">
                    <img src="https://y.qq.com/music/photo_new/T015R640x360M0000004MlCJ0MkEao.jpg?max_age=2592000" alt="" class="img">
                    <p class="sing">RUN AWAY</p>
                    <p class="song">L.A.X</p>
                    <div class="time">
                        <span class="count">
                            <i class="el-icon-video-camera"></i>
                            8430
                        </span>
                        2022-05-15
                    </div>
                </div> -->
                <div class="mv_list" v-for="(item,index) in mess" :key="index">
                    <div class="play">
                        <img :src="item.imgurl" alt="" class="img">
                        <img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays">
                    </div>
                    
                    <p class="sing">RUN AWAY</p>
                    <p class="song">L.A.X</p>
                    <div class="time">
                        <span class="count">
                            <i class="el-icon-video-camera"></i>
                            8430
                        </span>
                        2022-05-15
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import instance from '@/api/index'
    export default ({
        name: "mv",
        data(){
            return {
                navtop:['全部','内地','港台','欧美','韩国','日本'],
                navbottom:['全部','MV','现场','翻唱','舞蹈','影视','综艺','儿歌'],
                tagold:['最新','最热'],
                myindex:0,
                myindexs:0,
                myid:0,
                tags:['',''],
                mess:null
            }
        },
        methods: {
            getIndex(index){
                this.myindex=index;
                if(index==0){
                    this.tags[0]='';
                }else{
                    this.tags[0]=this.navtop[index];
                }
                this.getMV()
            },
            getIndexs(index){
                this.myindexs=index;
                if(index==0){
                    this.tags[1]='';
                }else{
                    this.tags[1]=this.navbottom[index];
                }
                 this.getMV()
            },
            getid(index){
                this.myid=index;
                
                 this.getMV()
            },
            async getMV(){
                const {data}=await instance.get('/mv?typeindex='+this.myindexs+'&landindex='+this.myindex+'&oldindex='+this.myid);
                this.mess=data.data;
            },
            close(index){
                if(index==0){
                    this.myindex=0;
                }else if(index==1){
                    this.myindexs=0;
                }
                this.tags[index]='';
                this.getMV()
            }
        },
        created(){
            this.getMV()
        }
    })
</script>
<style scoped>
    *{
        caret-color: rgba(0,0,0,0);
    }
    .main{
        font-size:14px;
    }
    .navbtn{
        margin-top:52px;
    }
    .navs{
        display:flex;
        height: 28px;
        line-height:28px;
        margin-bottom:15px;
    }
    .navs .tag{
        width: 62px;
    }
    .navs .tags{
        display:flex;
    }
    .navs .tags span{
        margin:0 24px 0 0;
        padding:0 8px;
        cursor: pointer;
    }
    .navs .tags .active{
        background: #31c274;
        color:#fff;
    }
    .video .title{
        height: 60px;
        display:flex;
        line-height:60px;
        align-items:center;
        justify-content: space-between;
    }
    .video .title .left{
        font-size:24px;
    }
    .video .title .right{
        display:flex;
    }
    .video .title .right span{
        padding:0 16px;
        height: 40px;
        line-height:40px;
        border:1px solid #c9c9c9;
        box-sizing: border-box;
    }
    .video .title .right .active{
        background: #31c274;
        border-color:#31c274;
        color:#fff;
    }
    .video .title .right span:nth-child(1){
        border-right:none;
    }
    .video .title .right span:nth-child(2){
        border-left:none;
    }
    .video .title .tag{
        display:flex;
    }
    .video .title .tags{
        height: 40px;
        line-height: 40px;
        display:inline-block;
        border:1px solid #ccc;
        font-size:16px;
        margin-right:5px;
        padding:0 10px;
    }
    .mv_item{
        display:flex;
        flex-wrap: wrap;
    }
    .mv_list{
        width: 24%;
        margin-right:1.3%;
        margin-bottom:25px;
    }
    .mv_list:nth-child(4n+4){
        margin-right:0;
    }
    .mv_list .play{
        width: 100%;
        margin-bottom:15px;
        position:relative;
        overflow:hidden;
    }
    .mv_list .play:hover .img{
        transform: scale(1.1);
    }
    .mv_list .play:hover .plays{
        opacity: 1;
        transform: scale(2);

    }
    .mv_list .img{
        width: 100%;
        transition:all .4s;
    }
    .mv_list .plays{
        position:absolute;
        left:50%;
        top:50%;
        width: 40px;
        height: 40px;
        margin-left:-20px;
        margin-top:-20px;
        transition:all .3s;
        opacity: 0;
        cursor:pointer;
    }
    .mv_list .sing{
        height: 23px;
        line-height:23px;
    }
    .mv_list .song{
        height: 24px;
        line-height:24px;
        color:#999999;
    }
    .mv_list .time{
        display:flex;
        height: 20px;
        align-items:center;
        color:#999999;
    }
    .mv_list .time .count{
        margin-right:10px;
    }
    /* .mv_list .play{
        position:absolute;
        left:50%; 
        top:50%;
    } */
</style>
>>>>>>> lym
