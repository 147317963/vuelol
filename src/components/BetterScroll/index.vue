<template>
    <div  class="container"  ref="scroll" >
        <div>
            <slot></slot><!--分发内容-->
        </div>

    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';//引入better-scroll

    //详细参数可以了解better-scroll的文档
    export default {
        props: {
            probeType: {//probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
                type: Number,
                default: 3
            },
            click: {//better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
                type: Boolean,
                default: true
            },
            mouse:{//是否允许鼠标滚动
                type: Boolean,
                default: true
            },
            listenScroll: {//是否监听scroll事件，如果为true，需在父组件中加入对应监听的方法名，对应methods中emit提交
                type: Boolean,
                default: false
            },
            listenData: {},//传入数据，注意没有对类型做限制，未设置默认值
            pullUp:{},//上拉加载更多，传入非false值为开启上拉加载，false为不开启  // threshold: -50, // 下拉距离超过50px触发pullingUP事件//
            pullDown:{},//下拉刷新   // threshold: 50, // 下拉距离超过50px触发pullingDown事件//         stop: 50 // 回弹停留在距离顶部20px的位置
            refreshDelay: {//数据刷新延迟时间
                type: Number,
                default: 100
            },
            swipeBounceTime: {//设置当运行 momentum 动画时，超过边缘后的回弹整个动画时间。
                type: Number,
                default: 500
            },
            momentumLimitTime: {//在屏幕上快速滑动的时间小于 momentumLimitTime，才能开启 momentum 动画。
                type: Number,
                default: 300
            },
            bounceTime: {//设置回弹动画的动画时长。
                type: Number,
                default: 800
            },
            startY: {//纵轴方向初始化位置
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                scroll:'',
            }
        },
        mounted() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this._initScroll()
                }, this.refreshDelay)
            })

        },
        methods: {
            _initScroll() {
                if (!this.$refs.scroll) {
                    return
                }
                // const ver = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                // //判断ios是否大于13.4
                // let isIosVerLgThan1304 = ver && ver.length > 3 && ver[1] >= 13 && ver[2] >= 4; //判断ios是否大于13.4
                //
                // const oWrapper = document.getElementById("scroll");

                this.scroll = new BScroll(this.$refs.scroll, {
                    probeType: this.probeType,
                    click: this.click,
                    preventDefaultException:{tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|DIV)$/},
                    taps: true,
                    swipeBounceTime: this.swipeBounceTime,
                    bounceTime: this.bounceTime,
                    momentumLimitTime: this.momentumLimitTime,
                    scrollY: true,
                    scrollX: false,
                    // startY: this.startY,
                    mouseWheel: this.mouse,
                    pullUpLoad: this.pullUp,
                    pullDownRefresh: this.pullDown,
                    useTransition:true,
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增  移动端必须要有滚动条不然会回弹两次
                    },
                })
                // this.$emit('setScroll',this.scroll);
                // if (this.listenScroll) {
                //     this.scroll.on('scroll', (pos) => {
                //         this.$emit('scroll', pos)
                //     })
                // }


                if (this.pullUp) {
                    this.scroll.on('pullingUp', () => {
                        this.$emit('pullingUpEnd',this.scroll)
                    })
                }
                if(this.pullDown){
                    this.scroll.on('pullingDown', () => {
                        this.$emit('pullingDownEnd',this.scroll)
                    })
                }

            },

            disable() {
                this.scroll && this.scroll.disable()
            },
            enable() {
                this.scroll && this.scroll.enable()
            },
            refresh() {
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {//滚动到指定位置
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {//滚动到指定的目标元素。
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            }
        },
        watch: {
            listenData() {
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.refresh()
                    }, this.refreshDelay)
                });

            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .container {
        height: 100%;
        width: 100%;
        padding: 0px;
        position: relative;
        overflow: hidden;
        -webkit-overflow-scrolling : touch;  /* liuhx:可以把这整行注释掉对比差别 */
    }
    /*.main-inner {*/
    /*    position: absolute;*/
    /*    width: 100%;*/
    /*    height: calc(100% + 1px)*/
    /*}*/
</style>
