<template>
    <div class="main">
        <div class="bg" :style="bgimage"></div>
        <div class="box"></div>
        <div class="container">123</div>
    </div>
</template>

<script>
    export default ({
        name: "plays",
        data() {
            return {
                bg:null,
                bgimage: '',
            }
        },
        methods: {
            getimg(){
                let obj = decodeURIComponent(this.$route.query.items)
                this.bg = JSON.parse(obj).image;
                console.log(this.bg);
                this.bgimage = 'background-image:url("' + this.bg + '")';
            }
        },
        created(){
            this.getimg()
        }
    })
</script>
<style scoped>
.main{
    /* background: rgba(240, 50, 154, 0.15); */
    /* background: rgba(82, 243, 50, 0.15); */
    /* background: rgba(85, 50, 243, 0.15); */
    /* background: rgba(243, 121, 50, 0.15); */
    width: 100vw;
    height: 100vh;
    position: relative;
}
.bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    z-index: -1;
}
.box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: -1;
}
.container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.2);
}
</style>