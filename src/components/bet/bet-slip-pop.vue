<template>

    <div>
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <div class="vux-popup-dialog bet-slip-pop vux-popup-bottom vux-popup-show vux-popup-dialog-b0lkz "
                 v-show="this.$store.state.betSlipPop &&this.$store.state.betSlipPopBody" style="height: auto">
                <section class="bet-slip-pop-header">
                    <div class="slip-number">1</div>
                    <div class="remove-all">删除全部
                    </div>
                    <div class="pop-header-text">
                        <div class="pop-header-balance">余额</div>
                        <div>0.00</div>
                    </div>
                    <div class="pop-header-close" @click.stop="$store.state.betSlipPopBody=false"></div>
                </section>
                <section class="bet-slip-pop-body">
                    <div class="__vuescroll" style="height: 100%; width: 100%; padding: 0px; position: relative;overflow: hidden" ref="scroll">
                        <div class="__panel __slide">
                            <div class="vux-checker-box odds-list">
                                <div @click.stop="keyboard($event)">
                                    <div class="vux-checker-item odds-item odds-item-locked">
                                        <div class="odds-list-line"></div>
                                        <section class="remove-odds">
                                            <div class="remove-odds-icon"></div>
                                        </section>
                                        <section class="odds-item-match">
                                            <div class="odds-name">Unique</div>
                                            <div>全场 获胜者</div>
                                            <div>Unique - VS - Chicken Fighters</div>
                                        </section>
                                        <section class="odds-item-money">
                                            <div class="item-money">
                                                <div class="money-lock"></div>
                                                <div class="stake-input stake-input-locked">
                                                    <span class="input-placeholder">暂停</span>
                                                </div>
                                            </div>
                                            <div class="item-return">
                                                预计返还
                                                <span class="return-amount">0</span>
                                            </div>
                                        </section>
                                    </div>
                                   <keyboard></keyboard>
                                </div>
                            </div>






                        </div>
                    </div>
                </section>
                <section class="bet-slip-pop-note bet-slip-pop-note-alert">
                    <div class="note-alert">
                        <div class="alert-icon"></div>
                        您所选投注项的盘口、赔率或有效性已经产生变化
                    </div>
                </section>
            </div>
        </transition>
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <section class="bet-slip-tab" v-show="this.$store.state.betSlipPop===true">
                <div class="tab-content">
                    <div class="content-left">
                        <div class="bet-amount">
                            <div>投注金额
                                <span>0.00</span></div>
                            <div style="height: 2px;"></div>
                            <div>最高返还
                                <span class="total-return">0.00</span></div>
                        </div>
                        <div class="toggle-tab" @click.stop="$store.state.betSlipPopBody=!$store.state.betSlipPopBody" v-text="this.$store.state.betSlipPopBody===true?'收起':'展开'">收起
                        </div>
                    </div>
                    <div class="bet-btn odds-change-btn">接受赔率变化
                    </div>
                </div>
            </section>
        </transition>
    </div>
</template>

<script>
    import keyboard from "./keyboard";
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {//条用方法
            keyboard(e){
                console.log(e.currentTarget.childNodes[1].className);
                if(e.currentTarget.childNodes[1].className==='keyboard-item'){
                    e.currentTarget.childNodes[1].classList.remove("keyboard-item");
                    e.currentTarget.childNodes[1].classList.add("keyboard-item-active");
                }else {
                    e.currentTarget.childNodes[1].classList.remove("keyboard-item-active");
                    e.currentTarget.childNodes[1].classList.add("keyboard-item");
                }
            }
        },
        mounted() {//加载完毕后
            this.$nextTick(() => {

                this.scroll = new this.$BScroll(this.$refs.scroll, {       //初始化better-scroll
                    probeType: 2,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true,   //是否派发click事件
                    mouseWheel: true,
                    tap: true,
                    scrollY: true,
                    scrollX: false,
                    // bounce: false,
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增
                    },

                });
            });
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            keyboard,
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
    .vux-popup-dialog {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #eee;
        z-index: 501;
        transition-property: transform;
        transition-duration: .3s;
        max-height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .bet-slip-pop {
        max-height: calc(100% - 142px);
        bottom: 48px;
        position: fixed;
        z-index: 2;
        border-radius: 6px 6px 0 0;
        background: #182032;
        overflow: hidden;
    }

    .bet-slip-pop .bet-slip-pop-header {
        width: 100%;
        height: 36px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: end;
        justify-content: flex-end;
        background: #13757e;
        border-radius: 6px 6px 0 0;
    }

    .bet-slip-pop .bet-slip-pop-header .slip-number {
        border-radius: 100px;
        margin-left: 8px;
        padding: 1px 7px;
        color: #fff;
        background: #252f44;
        font-size: 1.1rem;
    }

    .bet-slip-pop .bet-slip-pop-header .remove-all {
        margin-right: auto;
        margin-left: 6px;
        font-size: 1rem;
        color: #fff;
    }

    .bet-slip-pop .bet-slip-pop-header .pop-header-text {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 16px;
        color: #fff;
        font-size: 1.4rem;
    }

    .bet-slip-pop .bet-slip-pop-header .pop-header-text .pop-header-balance {
        font-size: 1rem;
        margin-right: 4px;
        color: rgba(240, 250, 255, .6);
    }

    .bet-slip-pop .bet-slip-pop-header .pop-header-close {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        background-image: url("../../assets/images/svg/guanbi.svg");
        padding: 18px;
        border-left: 1px solid rgba(156, 170, 196, .4);
    }

    .bet-slip-pop .bet-slip-pop-body {
        width: 100%;
        max-height: calc(100vh - 350px);
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list, .bet-slip-pop .bet-slip-pop-body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list, .bet-slip-pop .bet-slip-pop-body {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .vux-checker-item {
        display: inline-block;
    }

    .vux-tap-active {
        tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item {
        position: relative;
        height: 82px;
        display: -ms-flexbox;
        display: flex;
        background: #182032;
        border-left: 2px solid transparent;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 8px;
        margin-top: 1px;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-locked {
        background: #1b2029;
        border-left-color: transparent;
        color: #484e58;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-list-line {
        width: calc(100% - 16px);
        height: 1px;
        margin-top: -11px;
        margin-left: 8px;
        position: absolute;
        background: #1d2638;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .remove-odds, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .remove-odds {
        width: 32px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .remove-odds .remove-odds-icon, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .remove-odds .remove-odds-icon {
        margin-top: 5px;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 8px;
        height: 8px;
        background-image: url("../../assets/images/svg/guanbi.svg");
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-match, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-match {
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: justify;
        justify-content: space-between;
        text-align: left;
        font-size: 1rem;
        color: #526585;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-match .odds-name, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-match .odds-name {
        font-size: 1.4rem;
        color: #fff;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .item-return .return-amount {
        color: #1ee8e7;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-locked .odds-item-match .odds-name, .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-locked .odds-item-match, .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-locked .odds-item-money .item-return .return-amount, .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-locked .odds-item-money .item-return {
        color: #484e58;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: end;
        align-items: flex-end;
        margin-left: auto;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money .money-lock, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money .money-lock {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url("../../assets/images/svg/suoding.svg");
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input {
        width: 72px;
        height: 32px;
        margin-left: 16px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: end;
        justify-content: flex-end;
        background: #151b29;
        border: 1px solid #0c121f;
        border-radius: 2px;
        padding-right: 6px;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input .input-placeholder {
        font-size: 1.2rem;
        text-align: center;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .item-return {
        font-size: 1rem;
        color: #526585;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money {
        height: 32px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }


    .bet-slip-tab {
        position: fixed;
        height: 48px;
        width: 100%;
        z-index: 2;
        background: #090e16;
        bottom: 0;
        border-top: 1px solid transparent;
    }

    .bet-slip-tab .tab-content {
        height: 48px;
    }

    .bet-slip-tab .tab-content .content-left, .bet-slip-tab .tab-content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-slip-tab .tab-content .content-left {
        width: 60.26667vw;
    }

    .bet-slip-tab .tab-content .bet-amount {
        margin-left: 16px;
        text-align: left;
        font-size: 1.2rem;
        color: #fff;
    }

    .bet-slip-tab .tab-content .toggle-tab {
        margin-left: auto;
        margin-right: 16px;
        font-size: 1.2rem;
        color: #758bb5;
    }

    .bet-slip-tab .tab-content .bet-btn {
        width: 39.73333vw;
        height: 44px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-image: linear-gradient(135deg, #21aab1, #2e8eb4);
        box-shadow: 0 0 4px 0 rgba(14, 20, 34, .5), inset 0 1px 0 0 hsla(0, 0%, 100%, .22);
        border: 1px solid #22d8d9;
        color: #fff;
    }

    .bet-slip-tab .tab-content .odds-change-btn {
        background-image: linear-gradient(-135deg, #f22, #cd0102);
        border-color: #ff6e6e;
    }

    .bet-slip-tab .tab-content .bet-amount .total-return {
        color: #1ee8e7;
    }

    .bet-slip-pop .bet-slip-pop-note {
        width: 100%;
        height: 48px;
        background: #1d2638;
        font-size: 1.2rem;
        color: #fffaa8;
        border-left: 2px solid transparent;
    }

    .bet-slip-pop .bet-slip-pop-note .note-alert, .bet-slip-pop .bet-slip-pop-note {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-slip-pop .bet-slip-pop-note-alert {
        border-left-color: #f22;
    }

    .bet-slip-pop .bet-slip-pop-note .note-alert .alert-icon {
        margin-right: 6px;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url('../../assets/images/svg/touzhudantishi.svg');
    }


    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money .money-odds, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money .money-odds {
        font-size: 1.4rem;
        color: #1ee8e7;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money .money-odds-change, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money .money-odds-change {
        background: #ff1418;
        color: #fff;
        border-radius: 3px;
        padding: 1px;
    }
</style>