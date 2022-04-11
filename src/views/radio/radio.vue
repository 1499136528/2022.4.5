// 电台
<template>
    <div class="main">
        <div class="category">
            <ul class="left">
                <li>热门</li>
                <li>心情</li>
                <li>主题</li>
                <li>场景</li>
                <li>曲风</li>
                <li>语言</li>
                <li>人群</li>
                <li>乐器</li>
                <li>陪你听</li>
                <li>厂牌</li>
            </ul>
        </div>
        <div class="list">
            <div class="hot_list">
                <div class="title">热门</div>
                <div class="item">
                    <div class="radio">
                        <div class="zhezhao">
                            <img src="https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays "></div>
                        </div>
                        <div class="txt">个性电台</div>
                    </div>
                    <div class="radio">
                        <div class="zhezhao">
                            <img src="https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays "></div>
                        </div>
                        <div class="txt">个性电台</div>
                    </div>
                    <div class="radio">
                        <div class="zhezhao">
                            <img src="https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays "></div>
                        </div>
                        <div class="txt">个性电台</div>
                    </div>
                    <div class="radio">
                        <div class="zhezhao">
                            <img src="https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays "></div>
                        </div>
                        <div class="txt">个性电台</div>
                    </div>
                    <div class="radio">
                        <div class="zhezhao">
                            <img src="https://y.qq.com/music/common/upload/t_music_radio/1261958.jpg?max_age=2592000" alt="" class="img">
                            <div class="play"><img src="https://y.qq.com/mediastyle/yqq/img/cover_play.png?max_age=2592000" alt="" class="plays "></div>
                        </div>
                        <div class="txt">个性电台</div>
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
        methods: {
            async getRadio(){
                const {data}=await instance.get('/radio');
                console.log('****',data)
            }
        },
        created(){
            this.getRadio()
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
    }
    .list{
        height: 800px;
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
        background: #000;
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
    }
    .item .radio .zhezhao:hover .play{
        opacity: 0.5;
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