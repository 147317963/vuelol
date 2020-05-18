<template>
    <section class="match-info">
        <div class="home-notice">
            <div class="notice-icon"></div>
            <div class="vux-marquee" ref="notice">
                <ul class="vux-marquee-box"
                    :style="'transform: translate3d(0px, '+bottom+'px, 0px); transition: transform 300ms ease 0s;'" >
                    <li class="notice-item" v-for="itme in this.$store.getters.announcementList" :key="itme.id" >
                        <div>{{itme['cn_body']}}</div>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "match-info",
        data() {
            return {
                bottom:0,
            }
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后


            this.timer=setInterval( ()=> {
                const  Height = this.$refs.notice.offsetHeight;

                this.bottom = this.bottom - Height;


                if(Math.abs(this.bottom)>=this.$refs.notice.childNodes[0].offsetHeight){
                    this.bottom = 0;
                }
            }, 3000);




        },
        beforeCreate() {//初始化前
        },
        beforeDestroy(){//组件销毁前
            clearInterval(this.timer);
        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
            //}
        }
    }
</script>

<style scoped>
    .home-page .match-info {
        margin-left: 8px;
        margin-right: 8px;
        height: 40px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background: #0c121f;
        border-bottom: 1px solid #182031;
        font-size: 1.2rem;
        color: #00befe
    }
    .home-page .match-info .home-notice {
        width: 100%;
        margin-right: auto;
    }

    .home-page .match-info .home-notice .notice-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        margin-left: 16px;
        margin-right: 8px;
        background-image: url('../../assets/images/svg/notice.svg');
    }
    .vux-marquee {
        height: 34px;
        width: 100%;
        overflow: hidden;
    }
    .vux-marquee-box, .vux-marquee-box li {
        margin: 0;
        width: 100%;
    }
    .vux-marquee-box {
        padding: 0;
        height: auto;
    }
    .home-page .match-info .home-notice .notice-item, .home-page .match-info .home-notice {
        height: 34px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .home-page .match-info .home-notice .notice-item {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 16px
    }
</style>
