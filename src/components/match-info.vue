<template>
    <section class="match-info">
        <div class="home-notice">
            <div class="notice-icon"></div>
            <div class="vux-marquee" >
                <ul class="vux-marquee-box" ref="notice"
                    :style="'transform: translate3d(0px, '+bottom+'px, 0px); transition: transform 300ms ease 0s;'">
                    <li class="notice-item">
                        <div>DOTA2 BTS职业系列赛 - 美洲 Evil Geniuses - VS - Cloud9 赛事改期</div>
                    </li>
                    <li class="notice-item">
                        <div>英雄联盟 TCL Academy冬季赛 GALA - VS - SUPA 赛事结束</div>
                    </li>
                    <li class="notice-item">
                        <div>英雄联盟 TCL Academy冬季赛 5RA - VS - AURA 赛事结束</div>
                    </li>
                    <li class="notice-item">
                        <div>英雄联盟 TCL Academy冬季赛 FBA - VS - DPA 赛事结束</div>
                    </li>
                    <li class="notice-item">
                        <div>英雄联盟 TCL Academy冬季赛 BJKA - VS - IWA 赛事结束</div>
                    </li>
                    <li class="notice-item">
                        <div>雷竞技官方网址</div>
                    </li>
                    <li class="notice-item">
                        <div>英雄联盟玩法说明</div>
                    </li>
                    <li class="notice-item">
                        <div>支付宝吱口令存款须知</div>
                    </li>
                    <li class="notice-item">
                        <div>玩法说明: CSGO 是/否 单选手单回合击杀3敌人(第NX至NY回合)</div>
                    </li>
                    <li class="notice-item">
                        <div>下载雷竞技APP请通过官方提供链接下载</div>
                    </li>
                    <li class="notice-item">
                        <div>【请务必阅读】重要提示</div>
                    </li>
                    <li class="notice-item">
                        <div>投注盘口显示 $T1 $T2</div>
                    </li>
                    <li class="notice-item">
                        <div>【请务必阅读】网银支付：重要提示</div>
                    </li>
                    <li class="notice-item">
                        <div>【存款前须知】- 请务必阅读</div>
                    </li>
                    <li class="notice-item">
                        <div>请注意：投注遇到网路延迟【点击阅读详情】</div>
                    </li>
                    <li class="notice-item">
                        <div>DOTA2 BTS职业系列赛 - 美洲 Evil Geniuses - VS - Cloud9 赛事改期</div>
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
            const _this =this;
            setInterval(function () {
              const  Height = _this.$refs.notice.offsetHeight;
              if(Math.abs(_this.bottom)===Height){
                  _this.bottom = 0;
              }else {
                  _this.bottom = _this.bottom - 34;
              }
            }, 3000);
        },
        beforeCreate() {//初始化前
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
        background-image: url('../assets/images/svg/notice.svg');
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