<template>
    <div class="betting-record-page router-view">
        <div class="vux-tab-wrap">
            <div class="vux-tab-container">
                <div class="vux-tab">
                    <div class="vux-tab-item" style="border: none; color: rgb(186, 206, 241);">未结算</div>
                    <div class="vux-tab-item vux-tab-selected" style="border: none; color: rgb(255, 255, 255);">已结算
                    </div>
                    <div class="vux-tab-ink-bar vux-tab-ink-bar-transition-forward"
                         style="display: block; height: 22px; background-color: transparent; left: 50%; right: 0%;"></div>
                </div>
            </div>
            <div class="order-list">
                <div class="order-card">
                    <div  class="order-card">
                        <section class="odds-detail">
                            <header class="odds-detail-header">
                                <i class="game-icon"
                                   style="background-image: url('//www.nmgdjkj.com//file/5155ce2645f2486533bd28f9e9c2026e.svg');"></i>
                                <div class="title">杀敌总数单双 比分为双</div>
                                <div class="type">第一局 赛前</div>
                                <div  class="flag-icon flag flag-lose">
                                    <span>输</span>
                                </div>
                            </header>
                            <ul class="odds-detail-list">
                                <li>GK Gaming - VS - Hero久竞</li>
                                <li style="height: 4px;"></li>
                                <li>开始时间: 2019-05-19 18:15:00</li>
                                <li style="height: 4px;"></li>
                                <li>赔率: 1.90</li>
                                <li style="height: 4px;"></li>
                                <li class="order-comment"></li>
                            </ul>
                        </section>
                        <footer class="order-info">
                            <section class="order-info-row">
                                <div class="order-title">单注</div>
                                <div class="order-status CLOSE">
                                    已结算
                                </div>
                            </section>
                            <div style="height: 6px;"></div>
                            <section class="order-info-row">
                                <div class="order-info-row-lebal">
                                    投注金额:<span class="total-stake">1000</span>
                                </div>
                                <div class="order-info-row-lebal">
                                    盈利<span class="bonus-lose">0.00</span>
                                </div>
                            </section>
                            <div style="height: 18px;"></div>
                            <section class="order-info-row">
                                <div>订单号: a2066069b33e4022ea</div>
                                <time>2019-05-19 17:27:10</time>
                            </section>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bets-history",
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
    .betting-record-page {
        height: 100%;
    }

    .router-view {
        width: 100%;
    }
    .vux-tab-wrap {
        position: relative;
        padding-top: 44px;
    }
    .vux-tab-container {
        border-bottom: 1px solid #252f44;
    }
    .vux-tab-container {
        height: 44px;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        position: absolute;
    }
    .vux-tab {
        display: -ms-flexbox;
        display: flex;
        background-color: #fff;
        height: 44px;
        position: relative;
    }
    .vux-tab {
        background-color: transparent;
        height: 43px!important;
    }
    .vux-tab .vux-tab-item {
        display: block;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: linear-gradient(180deg,#e5e5e5,#e5e5e5,hsla(0,0%,90%,0)) 0 100% no-repeat;
        background-size: 100% 1px;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
        color: #666;
    }
    .betting-record-page .vux-tab-item {
        background: #141c2a;
        border: none; color: rgb(186, 206, 241);
    }
    .vux-tab .vux-tab-item .vux-tab-selected {
        border: none;color: rgb(255, 255, 255);
    }
    .vux-tab-ink-bar {
        position: absolute;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #04be02;
        text-align: center;
    }
    .vux-tab-ink-bar-transition-forward {
        transition: right .3s cubic-bezier(.35,0,.25,1),left .3s cubic-bezier(.35,0,.25,1) .09s;
    }
    .vux-tab-ink-bar {
        background-color: transparent;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDZweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgNDYgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lj5HlhYnmlYjmnpw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjUwJSIgY3k9Ijg3Ljg3Mjg2ODglIiBmeD0iNTAlIiBmeT0iODcuODcyODY4OCUiIHI9Ijk0LjgxOTc3OTglIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTAwMDAwLDAuODc4NzI5KSxzY2FsZSgwLjQ3ODI2MSwxLjAwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC41NTIyNDQpLHRyYW5zbGF0ZSgtMC41MDAwMDAsLTAuODc4NzI5KSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBBMkM2IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMTk4QkEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC40Ij4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3LjAwMDAwMCwgLTE5NjQuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLlj5HlhYnmlYjmnpwiIHg9IjI3IiB5PSIxOTY0IiB3aWR0aD0iNDYiIGhlaWdodD0iMjIiIHJ4PSIxMSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
        background-position: 50%;
    }

</style>
