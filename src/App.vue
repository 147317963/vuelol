<template>
    <div id="app">
        <app-header></app-header>
        <div class="weui-tab">
            <div id="vux_view_box_body" class="weui-tab__panel vux-fix-safari-overflow-scrolling">
                <!--                mode="out-in" enter-active-class="animated fadeInRight leave-active-class="animated fadeOutLeft">"-->
                <transition :name="transitionName">

                    <router-view></router-view>
                </transition>
            </div>

        </div>
        <bet-slip-pop></bet-slip-pop>
        <van-overlay :show="overlayShow || noticeShow" z-index="500"
                     @click="
                $store.dispatch('app/setNoticeShow',false);
                $store.dispatch('app/overlayShow',false)"/>
    </div>
</template>
<script>
    import BetSlipPop from '@/components/bet/bet-slip-pop'
    import AppHeader from '@/components/appHeader'
    import mixins from '@/utils/mixins'
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters([
                'overlayShow',
                'noticeShow',
            ])
        },
        mixins: [mixins],
        name: "app",

        data() {
            return {
                transitionName: ''
            }
        },

        methods: {//条用方法


        },
        mounted() {//加载完毕后
            // //在页面加载时读取sessionStorage里的状态信息
            // if (sessionStorage.getItem("store")) {
            //     this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
            // }
            //
            // //在页面刷新时将vuex里的信息保存到sessionStorage里
            // window.addEventListener("beforeunload", () => {
            //     sessionStorage.setItem("store", JSON.stringify(this.$store.state))
            // })

            // this.socket.transmit('#subscribe', {channel: "match"});

            // this.$socket.emit('connect');
            // this.$echoClient.emit('#subscribe', {channel: "match"});

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            'app-header': AppHeader,
            'bet-slip-pop': BetSlipPop,
        },
        watch: {
            $route(to, from) {
                // let toName = to.name

                const toIndex = to.meta.index
                const fromIndex = from.meta.index

                this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left'
            }

        }
    }
</script>
<style>


    #app {
        height: calc(100% - 48px);
        /*max-width: 375px;*/

    }

    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 1.4rem;
        line-height: normal;
        text-align: center;
        color: #bacef1;
        background-color: #0c121f;
    }

    img {
        pointer-events: none;
    }

    * {
        box-sizing: border-box;
    }

    .weui-tab {
        position: relative;
        height: 100%;
    }

    .weui-tab__panel {
        box-sizing: border-box;
        height: 100%;
        /*padding-bottom: 50px;*/
        /*overflow: hidden;*/
        -webkit-overflow-scrolling: touch;
    }

    html {
        font-size: 62.5%;
    }

    body, html {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .line-limit-length {

        /*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格。*/
        white-space: nowrap;
        /*隐藏超出单元格的部分。*/
        overflow: hidden;
        /*将被隐藏的那部分用省略号代替。*/
        text-overflow: ellipsis;
    }

</style>
