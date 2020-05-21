<template>
    <div class="scroll-list">

            <better-scroll
                    :pullDown="{threshold: 50,stop: 50}"
                    :listenData="matchList"
                    @pullingDownEnd="pullingDownEnd"
            >

                    <div class="__refresh" style="margin-top: -50px">
                        <div class="refresh-text">{{pulldownMsg}}</div>
                    </div>
                    <home-match-card></home-match-card>
                    <empty-list :show="matchList.length === 0 && matchRefresh === false ? true:false"></empty-list>
                    <div style="height: 800px;"></div>


            </better-scroll>
        <loading-bkg :show="matchRefresh"></loading-bkg>






    </div>
</template>

<script>
    import BetterScroll from '@/components/BetterScroll';
    import HomeMatchCard from '@/components/match/home-match-card';
    import LoadingBkg from '@/components/loading/loading-bkg'
    import EmptyList from '@/components/match/empty-list'
    import {mapGetters} from "vuex";
    export default {
        name: "scroll-list",
        computed: {
            ...mapGetters([
                'matchList',
                'matchRefresh',
            ])
        },
        components: {//注册组件
             HomeMatchCard,
             BetterScroll,
             LoadingBkg,
             EmptyList,
        },
        data() {
            return {
                pulldownMsg: '下拉刷新',
                // styleObject: {
                //     'margin-top': '-50px',
                //     // 'display': 'block'
                // }

            }
        },
        methods: {//条用方法
            pullingDownEnd(scroll){
                this.$store.dispatch('app/setMatchRefresh',true);
                this.$store.dispatch('match/setMatcList', []);
                this.pulldownMsg = '刷新中..';
                setTimeout(() => {
                    this.$store.dispatch('match/getMatchList').then(() => {
                        //恢复刷新提示文本值
                        this.pulldownMsg = '下拉刷新';
                        this.$store.dispatch('app/setMatchRefresh', false);
                        // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                        scroll.finishPullDown();
                    })

                }, 500)

            }

        },
        mounted() {//加载完毕后
            this.$store.dispatch('app/setMatchRefresh',true);
            this.$nextTick(() => {
                this.$store.dispatch('match/getMatchList').then(()=>{
                    this.$store.dispatch('app/setMatchRefresh',false);
                })

                // this.scroll = new this.$BScroll(this.$refs.scroll, {       //初始化better-scroll
                //     probeType: 3,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                //     click: true,   //是否派发click事件
                //     mouseWheel: true,
                //     // startX: 0,
                //     tap: true,
                //     scrollY: true,
                //     scrollX: false,
                //     // eventPassthrough: 'vertical',
                //     scrollbar: {
                //         fade: true,
                //         interactive: false // 1.8.0 新增
                //     },
                //     pullDownRefresh: {
                //         threshold: 50, // 下拉距离超过30px触发pullingDown事件
                //         stop: 50 // 回弹停留在距离顶部20px的位置
                //     },
                //     // snap:{
                //     //     loop:false,
                //     //     speed:600,
                //     // }
                //
                // });
                // this.scroll.on('pullingDown', () => {
                //
                //     // this.styleObject.display ='block';
                //     this.$store.dispatch('app/setMatchRefresh',true);
                //
                //     this.pulldownMsg = '刷新中..';
                //     //先清空数据
                //     // this.$store.state.match=[];
                // });
                //
                // //滑动结束松开事件
                // this.scroll.on('touchEnd', (pos) => {  //上拉刷新
                //     if (pos.y > 50) {
                //
                //         setTimeout(() => {
                //             this.$store.dispatch('match/getMatchList').then(()=>{
                //                 //恢复刷新提示文本值
                //                 this.pulldownMsg = '下拉刷新';
                //                 this.$store.dispatch('app/setMatchRefresh',false);
                //                 // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                //                 this.scroll.finishPullDown();
                //             })
                //
                //         }, 500)
                //     }
                // })


            });

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        watch: {

        }
    }
</script>

<style scoped>

    .scroll-list {
        height: calc(100% - 36px);
        /*padding-left: 8px;*/
        /*padding-right: 8px;*/
    }

    .__refresh {
        position: absolute;
        width: 100%;
        color: black;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .__refresh .refresh-text {
        font-size: 1.4rem;
        color: #bacef1;
    }

</style>
