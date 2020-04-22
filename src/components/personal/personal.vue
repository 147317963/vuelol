<template>
    <div  class="personal-info router-view">
        <section  class="link-list">
            <div >
                <div class="weui-cells vux-no-group-title">
                    <div  class="weui-cell user-name" style="height: 113px;">
                        <div class="weui-cell__hd"></div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">早上好</label></p> <span
                                class="vux-label-desc">{{this.$store.state.user.username}}</span></div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                    <div  class="weui-cell vux-tap-active weui-cell_access">
                        <div class="weui-cell__hd">
                            <div  class="base-icon wallet-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">钱包</label></p> <span
                                class="vux-label-desc"></span></div>
                        <div class="weui-cell__ft"><p  class="wallet-lebal"><span >余额</span>
                            <span  class="wallet-lebal-balance">&nbsp;¥ {{this.$store.state.user.money}}</span></p> <!----></div>
                    </div>
                </div> <!----></div>
            <div ><!---->
                <div class="weui-cells vux-no-group-title">
                    <div  class="weui-cell vux-tap-active weui-cell_access">
                        <div class="weui-cell__hd">
                            <div  class="base-icon bettingrecord-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">投注记录</label></p> <span
                                class="vux-label-desc"></span></div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                    <div  class="weui-cell vux-tap-active weui-cell_access">
                        <div class="weui-cell__hd">
                            <div  class="base-icon download-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">APP 下载</label></p> <span
                                class="vux-label-desc"></span></div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                    <div  class="weui-cell vux-tap-active weui-cell_access">
                        <div class="weui-cell__hd">
                            <div  class="base-icon notice-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">消息</label></p> <span
                                class="vux-label-desc"></span></div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                    <div  class="weui-cell vux-tap-active weui-cell_access">
                        <div class="weui-cell__hd">
                            <div  class="base-icon activity-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary"><p><label class="vux-label">活动</label></p> <span
                                class="vux-label-desc"></span></div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                </div> <!----></div>
            <div ><!---->
                <div class="weui-cells vux-no-group-title">
                    <div  class="weui-cell vux-tap-active weui-cell_access" @click.stop="$router.push({path:'/bettingRules'})">
                        <div class="weui-cell__hd">
                            <div  class="base-icon rule-icon"></div>
                        </div>
                        <div class="vux-cell-bd vux-cell-primary" @click.stop="$router.push({path:'/bettingRules'})">
                            <p><label class="vux-label">投注规则</label></p>
                            <span class="vux-label-desc"></span>
                        </div>
                        <div class="weui-cell__ft">  <!----></div>
                    </div>
                    <div  class="weui-cell vux-tap-active weui-cell_access" @click.stop="$router.push({path:'/about'})">

                            <div class="weui-cell__hd">
                                <div  class="base-icon about-icon"></div>
                            </div>
                            <div class="vux-cell-bd vux-cell-primary">
                                <p><label class="vux-label">关于</label></p>
                                <span class="vux-label-desc"></span>
                            </div>
                            <div class="weui-cell__ft">  <!----></div>
                    </div>
                </div> <!---->
            </div>
        </section>
        <section  class="button-group">
            <a  href="/personal/referral" class="button">
            推荐
        </a>
            <div  class="button">
                代理
            </div>
            <a  href="https://www.raycsonline.com/chatwindow.html?siteId=5000342&amp;planId=720"
               target="_blank" rel="noopener noreferrer" aria-label="customer-service" class="customer-service button">
                联系客服
            </a></section>
    </div>
</template>

<script>
    import CryptoJS from "crypto-js";

    export default {
        name: "personal",
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
            this.$nextTick(() => {
                this.$post(this.$api.user).then((res) => {
                    //首次进入获得数据
                    this.$store.state.user = res.data.datas;
                    // _this.matchPost = res.datas;
                    //刷新列表后，重新计算滚动区域高度
                    // _this.upMatch();


                });
            })
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
    .personal-info {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-height: 100%;
    }
    .weui-cells {
        margin-top: 1.17647059em;
        background-color: #fff;
        line-height: 1.41176471;
        font-size: 17px;
        overflow: hidden;
        position: relative;
    }
    .vux-no-group-title {
        margin-top: .77em;
    }
    .weui-cells {
        margin-top: 0;
        margin-bottom: 24px;
        background-color: #0c121f!important;
    }
    .personal-info .weui-cells {
        margin-top: 0;
    }
    .weui-cell {
        padding: 10px 15px;
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .weui-cell {
        height: 54px;
        padding-top: 0;
        padding-bottom: 0;
        text-align: left;
        font-size: 1.4rem;
        background-color: #0c121f;
    }
    .weui-cell {
        height: 54px;
        padding-top: 0;
        padding-bottom: 0;
        text-align: left;
        font-size: 1.4rem;
        background-color: #0c121f;
    }
    .vux-cell-primary {
        -ms-flex: 1;
        flex: 1;
    }
    .personal-info .user-name p {
        margin: 0;
    }
    .vux-label {
        word-wrap: break-word;
        word-break: break-all;
    }
    .vux-label, .weui-cell__ft .weui-loading {
        display: inline-block;
    }
    .personal-info .user-name .vux-label {
        font-size: 1.2rem;
        color: #758bb5;
    }
    .vux-label-desc {
        font-size: 14px;
        color: #666;
    }
    .personal-info .user-name .vux-label-desc {
        font-size: 1.8rem;
        line-height: 2.6rem;
        color: #bacef1;
    }
    .weui-cell__ft {
        text-align: right;
        color: #999;
    }
    .weui-cell:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #d9d9d9;
        color: #d9d9d9;
        transform-origin: 0 0;
        transform: scaleY(.5);
        left: 15px;
    }
    .weui-cell:before {
        border-top: 1px solid #182031;
    }
    .weui-cell:before {
        border-top: 1px solid #182031;
    }
    .personal-info .link-list .base-icon {
        margin-right: 15px;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
    }
    .personal-info .link-list .wallet-icon {
        background-image: url("../../assets/images/svg/qianbao.svg");
    }
    .personal-info .link-list .bettingrecord-icon {
        background-image: url("../../assets/images/svg/touzhujilu.svg");
    }
    .personal-info .link-list .download-icon {
        background-image: url("../../assets/images/svg/appxiazai.svg");
    }
    .personal-info .link-list .notice-icon {
             background-image: url("../../assets/images/svg/xiaoxi.svg");
         }
    .personal-info .link-list .activity-icon {
        background-image: url("../../assets/images/svg/huodong.svg");
    }
    .personal-info .link-list .rule-icon {
        background-image: url("../../assets/images/svg/touzhuguizhe.svg");
    }
    .personal-info .link-list .about-icon {
        background-image: url("../../assets/images/svg/guanyu.svg");
    }
    .weui-cell__ft {
        text-align: right;
        color: #999;
    }
    .weui-cell_access .weui-cell__ft {
        padding-right: 13px;
        position: relative;
    }
    .personal-info .link-list .wallet-lebal {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.2rem;
        color: #526585;
    }
    .personal-info .link-list .wallet-lebal .wallet-lebal-balance{
        font-size: 1.6rem;
        color: #1ee8e7;
    }
    .weui-cell__ft:after {
        width: 8px!important;
        height: 8px!important;
        border-width: 1px 1px 0 0!important;
        border-color: #3f546a!important;
    }
    .weui-cell_access .weui-cell__ft:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: matrix(.71,.71,-.71,.71,0,0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
    .personal-info .button-group {
        margin-top: auto;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }
    .personal-info .button-group .button {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        width: 80px;
        height: 32px;
        background-color: #090c15;
        border: 1px solid #182031;
        border-radius: 4px;
        font-size: 1.3rem;
        color: #7589a6;
        text-decoration: none;
    }
</style>