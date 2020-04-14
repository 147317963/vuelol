<template>
    <div >
        <div 
             class="vux-popup-dialog bet-slip-pop vux-popup-bottom vux-popup-show vux-popup-dialog-3cmgs"
             style="height: auto;">
            <section  class="bet-slip-pop-header">
                <div  class="slip-number">1</div>
                <div  class="remove-all">删除全部
                </div>
                <div  class="pop-header-text">
                    登录
                </div>
                <div  class="pop-header-close"></div>
            </section>
            <section  class="bet-slip-pop-body">
                <div  class="__vuescroll"
                     style="height: unset; width: 100%; padding: 0px; position: relative; overflow: hidden;">
                    <div class="__panel __slide x-hidden"
                         style="position: relative; box-sizing: border-box; transform-origin: left top 0px; transform: translate3d(0px, 0px, 0px) scale(1);">
                        <div  class="vux-checker-box odds-list">
                            <div >
                                <div  class="vux-checker-item odds-item vux-tap-active">
                                    <div  class="odds-list-line"></div>
                                    <section  class="remove-odds">
                                        <div  class="remove-odds-icon"></div>
                                    </section>
                                    <section  class="odds-item-match">
                                        <div  class="odds-name">Santos e-Sports</div>
                                        <div >全场 获胜者</div>
                                        <div >Santos e-Sports - VS - Falkol</div>
                                    </section>
                                    <section  class="odds-item-money">
                                        <div  class="item-money">
                                            <div  class="money-odds money-odds-change">@1.64
                                            </div>
                                            <div  class="stake-input stake-input-focus"><span
                                                     class="input-placeholder">输入金额
                    </span></div>
                                        </div>
                                        <div  class="item-return">
                                            预计返还
                                            <span  class="return-amount">0</span></div>
                                    </section>
                                </div>
                                <div  class="keyboard-item-active">
                                    <div data-v-240d9992=""  class="bet-keyboard">
                                        <section data-v-240d9992="" class="content">
                                            <div data-v-240d9992="" class="content__btn--number">1
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">2
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">3
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">4
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">5
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">6
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">7
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">8
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">9
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--number">0
                                            </div>
                                        </section>
                                        <section data-v-240d9992="" class="content">
                                            <div data-v-240d9992="" class="content__btn--betMax">
                                                <div data-v-240d9992="">最大投注</div>
                                                <div data-v-240d9992="" class="limit-stake">1000</div>
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--delete"><i data-v-240d9992=""
                                                                                                    class="delete-icon"></i>
                                            </div>
                                            <div data-v-240d9992="" class="content__btn--confirm">
                                                <div data-v-240d9992="">确认</div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div> <!---->
                        <div style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;">
                            <object type="text/html" tabindex="-1" data="about:blank"
                                    style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object>
                        </div>
                    </div>
                </div>
            </section>
            <section  class="bet-slip-pop-note">
                <div  class="note-alert">
                    <div  class="alert-icon"></div>
                    您所选投注项的盘口、赔率或有效性已经产生变化
                </div>
            </section>
        </div>
        <section  class="bet-slip-tab">
            <div  class="tab-content">
                <div  class="content-left">
                    <div  class="bet-amount">
                        <div >投注金额
                            <span >0.00</span></div>
                        <div  style="height: 2px;"></div>
                        <div >最高返还
                            <span  class="total-return">0.00</span></div>
                    </div>
                    <div  class="toggle-tab">收起
                    </div>
                </div>
                <div  class="bet-btn odds-change-btn">接受赔率变化
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "bet-slip-tab",
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
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

    .bet-slip-pop .bet-slip-pop-header .pop-header-close {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        background-image: url('../../assets/images/svg/guanbi.svg');
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
        background-image: url('../../assets/images/svg/guanbi.svg');
    }
    
    .vux-tap-active {
        tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .vux-checker-item {
        display: inline-block;
    }
    .keyboard-item-active {
        height: 104px;
        transition: all .2s ease-out;
        overflow: hidden;
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
    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money {
        height: 32px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item .odds-item-money .item-money .money-odds-change, .bet-slip-pop .bet-slip-pop-body .odds-list .parlay-item .odds-item-money .item-money .money-odds-change {
        background: #ff1418;
        color: #fff;
        border-radius: 3px;
        padding: 1px;
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
    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-focus {
        border: 1px solid #125e72;
    }
    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input .input-placeholder {
        font-size: 1.2rem;
    }
    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-focus .input-placeholder {
        font-size: 1.2rem;
        border-left: 1px solid transparent;
        animation-name: input-breathing-left-data-v-3b21caa0;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }
    .bet-slip-pop .bet-slip-pop-body .odds-list .item-return {
        font-size: 1rem;
        color: #526585;
    }
    .bet-slip-pop .bet-slip-pop-body .odds-list .item-return .return-amount {
        color: #1ee8e7;
    }
    .bet-keyboard {
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        height: 104px;
        padding: 8px 0;
        background: #182032;
        font-size: 1.6rem;
    }
    .bet-keyboard .content {
        width: calc(100% - 8px);
        color: #fff;
    }
    .bet-keyboard .content, .bet-keyboard {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }
    .bet-keyboard .content__btn--number {
        width: calc((100% - 27px) / 10);
        font-size: 2.2rem;
        font-weight: 300;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9,14,22,.5), inset 0 1px 0 0 rgba(95,108,132,.4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bet-keyboard .content__btn--betMax {
        -ms-flex-direction: column;
        flex-direction: column;
        width: calc(30% - 1.5px);
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9,14,22,.5), inset 0 1px 0 0 rgba(95,108,132,.4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bet-keyboard .content__btn--betMax .limit-stake {
        font-size: 1.3rem;
        line-height: 1.4rem;
    }
    .bet-keyboard .content__btn--delete {
        width: calc((70% - 4.5px) / 2);
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9,14,22,.5), inset 0 1px 0 0 rgba(95,108,132,.4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bet-keyboard .content__btn--delete .delete-icon {
        background-image: url('../../assets/images/svg/qingchu.svg');
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 35px;
        height: 20px;
    }
    .bet-keyboard .content__btn--confirm {
        width: calc((70% - 4.5px) / 2);
        background: #515d75;
        color: #fff;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9,14,22,.5), inset 0 1px 0 0 rgba(95,108,132,.4);
        border-radius: 4px;
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
    .bet-slip-tab .tab-content .content-left, .bet-slip-tab .tab-content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
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
        background-image: linear-gradient(135deg,#21aab1,#2e8eb4);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5), inset 0 1px 0 0 hsla(0,0%,100%,.22);
        border: 1px solid #22d8d9;
        color: #fff;
    }
</style>