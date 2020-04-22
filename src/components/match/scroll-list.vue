<template>
    <div class="scroll-list">
        <div class="__vuescroll"
             style="height: 100%; width: 100%; padding: 0px; position: relative;overflow: hidden" ref="scroll">
            <div class="__panel __slide">
                <div class="__refresh" style="margin-top: -50px">
                    <div class="refresh-text">{{pulldownMsg}}</div>
                </div>
                    <home-match-card></home-match-card>
                <div class="empty-list" style="display: none">
                    选手正在赛前准备，请耐心等候...
                    <div class="base-button empty-btn button--dark">
                        <div class="button-border">
                            <button type="submit" class="button-content">去参加赛前竞猜</button>
                        </div>
                    </div>
                </div>
                <div style="height: 800px;"></div>
            </div>
        </div>
    </div>
</template>

<script>

    import HomeMatchCard from '@/components/match/home-match-card';


    export default {
        name: "scroll-list",
        components: {//注册组件
            'home-match-card': HomeMatchCard,
        },
        data() {
            return {
                scroll: '',
                pulldownMsg: '下拉刷新',
                // styleObject: {
                //     'margin-top': '-50px',
                //     // 'display': 'block'
                // }

            }
        },
        methods: {//条用方法
            swipeup(){

            }




        },
        mounted() {//加载完毕后
            this.$store.state.matchRefresh=true;
            this.$nextTick(() => {
                this.$get(this.$api.match).then((res) => {
                    //首次进入获得数据
                    this.$store.state.match = res.data.datas;
                    this.$store.state.matchRefresh=false;
                    // _this.matchPost = res.datas;
                    //刷新列表后，重新计算滚动区域高度
                    // _this.upMatch();


                });
                this.scroll = new this.$BScroll(this.$refs.scroll, {       //初始化better-scroll
                    probeType: 3,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true,   //是否派发click事件
                    mouseWheel: true,
                    // startX: 0,
                    tap: true,
                    scrollY: true,
                    scrollX: false,
                    // eventPassthrough: 'vertical',
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增
                    },
                    pullDownRefresh: {
                        threshold: 50, // 下拉距离超过30px触发pullingDown事件
                        stop: 50 // 回弹停留在距离顶部20px的位置
                    },
                    // snap:{
                    //     loop:false,
                    //     speed:600,
                    // }

                });
                this.scroll.on('pullingDown', () => {

                    // this.styleObject.display ='block';
                    this.$store.state.matchRefresh=true;
                    this.pulldownMsg = '刷新中..';
                    //先清空数据
                    this.$store.state.match=[];
                });

                //滑动结束松开事件
                this.scroll.on('touchEnd', (pos) => {  //上拉刷新
                    if (pos.y > 50) {
                        setTimeout(() => {
                            this.$get(this.$api.match).then((res) => {
                                //刷新数据
                                this.$store.state.match = res.data.datas;
                                //恢复刷新提示文本值
                                this.pulldownMsg = '下拉刷新';
                                this.$store.state.matchRefresh=false;
                                // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                                this.scroll.finishPullDown();
                            })
                        }, 500)
                    }
                })


            });

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        watch: {
            '$store.state.match'() {
                this.$nextTick(() => {
                    this.scroll.refresh();
                    // this.scroll.finishPullUp();
                })
            },
        }
    }
</script>

<style scoped>
    .v-touch{
        touch-action: pan-y!important;
    }
    .home-page .scroll-list {
        height: calc(100% - 36px);
        /*padding-left: 8px;*/
        /*padding-right: 8px;*/
    }

    .__vuescroll .__refresh, .__vuescroll .__load {
        position: absolute;
        width: 100%;
        color: black;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .home-page .refresh-text {
        font-size: 1.4rem;
        color: #bacef1;
    }
    .home-page .empty-list {
        margin-top: 60px;
        color: #1ad2fe;
    }


    .base-button {
        width: 100%;
        height: 40px;
        margin: 8px 0;
        border-radius: 4px;
        background: linear-gradient(90deg,#1efffa,#34cdff);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .button--dark {
        background-image: linear-gradient(90deg,#298a97,#317699);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
    }
    .home-page .empty-list .empty-btn {
        width: 150px;
        margin: 20px auto 0;
    }
    .base-button .button-border {
        height: 38px;
        border-radius: 3px;
    }
    .base-button .button-border .button-content, .base-button .button-border {
        width: calc(100% - 2px);
        background-image: linear-gradient(90deg,#21abb1,#2e8fb4);
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .button--dark .button-border {
        background-image: linear-gradient(#323e57,#1d2639);
    }
    .base-button .button-border .button-content {
        height: 36px;
        border-radius: 2px;
        border: none;
        color: #fff;
        font-size: 1.4rem;
    }
    .button--dark .button-border .button-content {
        background: #252f44;
    }
</style>