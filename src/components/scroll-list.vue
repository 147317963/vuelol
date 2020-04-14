<template>
    <div class="scroll-list">
        <div class="__vuescroll"
             style="height: 100%; width: 100%; padding: 0px; position: relative;overflow: hidden" ref="scroll">
            <div class="__panel __slide">
                <div class="__refresh" style="margin-top: -50px">
                    <div class="refresh-text">{{pulldownMsg}}</div>
                </div>
                <div>

                </div>
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


    export default {
        name: "scroll-list",
        props: {
            // 显示
            LoadingBkg: {
                type: [Boolean],
            },
        },
        data() {
            return {
                scroll: '',
                pulldownMsg: '下拉刷新',
                match: [],
                matchPost: [],
                // styleObject: {
                //     'margin-top': '-50px',
                //     // 'display': 'block'
                // }

            }
        },
        methods: {//条用方法





        },
        mounted() {//加载完毕后
            const _this = this;

            this.$nextTick(() => {
                _this.$get(_this.$api.match).then((res) => {
                    //刷新数据
                    _this.match = res.datas;
                    // _this.matchPost = res.datas;
                    //刷新列表后，重新计算滚动区域高度
                    // _this.upMatch();

                });
            });
            this.$nextTick(() => {
                this.scroll = new this.$BScroll(this.$refs.scroll, {       //初始化better-scroll
                    probeType: 1,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true,   //是否派发click事件
                    mouseWheel: true,
                    tap: true,
                    scrollY: true,
                    scrollX: false,
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增
                    },
                    pullDownRefresh: {
                        threshold: 50, // 下拉距离超过30px触发pullingDown事件
                        stop: 50 // 回弹停留在距离顶部20px的位置
                    }

                });
                // 滑动过程中事件
                this.scroll.on('pullingDown', () => {

                    // this.styleObject.display ='block';
                    this.pulldownMsg = '刷新中..';
                });
                //滑动结束松开事件
                this.scroll.on('touchEnd', (pos) => {  //上拉刷新
                    // _this.pulldownMsg = '刷新中..';
                    // _this.scroll.finishPullUp();
                    if (pos.y > 50) {
                        // this.$socket.emit("match",{"asd":"我是内容"});

                        setTimeout(() => {
                            _this.$get(_this.$api.match).then((res) => {
                                // console.log(res);
                                //刷新数据
                                // _this.matchZl(res.datas);
                                // _this.match = res.datas;
                                // console.log(moment(_this.match[0]['start_time']).diff(moment()));
                                //恢复刷新提示文本值
                                _this.pulldownMsg = '下拉刷新';
                                // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                                _this.scroll.finishPullDown();
                                //刷新成功后提示
                                // _this.refreshalert();
                                //刷新列表后，重新计算滚动区域高度
                                _this.scroll.refresh();
                            })
                        }, 1000)
                    }
                })
            });

            // setInterval(() => {
            //     this.postListener()
            // }, 8000)

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        // sockets: {
        //     connect() {
        //         console.log('socket connected');
        //         // this.$socket.emit();
        //         // this.$socket.emit("match",{"asd":"我是内容"})
        //
        //         // this.$socket.on("match",function(res){
        //         //     console.log(res)
        //         // });
        //
        //     }
        // },
        watch: {
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
            //}
            // match: {
            //     handler(val, newval) {
            //         // console.log(val);
            //         // console.log(newval);
            //     },
            //     deep: true
            // },
        }
    }
</script>

<style scoped>
    .home-page .scroll-list {
        height: calc(100% - 36px);
        padding-left: 8px;
        padding-right: 8px;
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
</style>