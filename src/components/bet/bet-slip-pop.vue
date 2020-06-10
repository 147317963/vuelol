<template>

    <div v-if="betList.length >0 && ($route.name === '/' ||  $route.name === 'betting' || $route.name === 'tournament') ">
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <!--            <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">-->
            <div class="vux-popup-dialog bet-slip-pop vux-popup-bottom vux-popup-show"
                 v-show="betSlipPopBodyShow" style="height: auto;transition: all 1s linear;">
                <section class="bet-slip-pop-header">
                    <div class="slip-number">{{betList.length}}</div>
                    <div class="remove-all"
                         @click.stop="delAll">删除全部
                    </div>

                    <template v-if="userInfo.length===0">
                        <div class="pop-header-text"
                             @click.stop="$router.push({path: '/login', query: {redirect:$route.path}})">
                            登录
                        </div>

                    </template>
                    <template v-else>
                        <div class="pop-header-balance">余额</div>
                        <div>{{userInfo['money']}}</div>

                    </template>


                    <div class="pop-header-close"
                         @click.stop="$store.dispatch('app/setBetSlipPopBodyShow',false)"></div>
                </section>
                <section class="bet-slip-pop-body">
                    <vue-Scroll :ops="ops" ref="scroll">
                        <template v-for="(item,index) in betList.filter(t => t.status !== oddsStatus['隐藏']['status'])">
                            <div class="vux-checker-box odds-list" :key="item['id']">
                                <!--                                        @click.stop="keyboard($event)" item['keyboard']=!item['keyboard']-->
                                <div @click.stop="keyboardShow(item)">
                                    <!--                                   odds-item-locked 禁止下注 -->
                                    <div class="vux-checker-item odds-item vux-tap-active"
                                         :class="[
                                                 addClass('odds-item-locked',item),
                                                 addClass('odds-item-alert',item),
                                                 ]">
                                        <div class="odds-list-line"></div>
                                        <section class="remove-odds"
                                                 @click.stop="delIndex(index)">
                                            <div class="remove-odds-icon"></div>
                                        </section>
                                        <section class="odds-item-match">
                                            <div class="odds-name">{{item.name}}</div>
                                            <div>
                                                {{matchStage[item['match_stage']]['name']}}
                                                {{item['odds_group_name']}}
                                            </div>
                                            <div>{{item['match_name']}}</div>
                                        </section>
                                        <section class="odds-item-money">
                                            <div class="item-money">
                                                <div
                                                        :class="[
                                                            addClass('money-lock',item),
                                                            addClass('money-odds',item),
                                                            addClass('money-odds-change',item),
                                                            ]">
                                                    {{item['status'] ===
                                                    oddsStatus['正常']['status']?'@'+item['odds']:''}}

                                                </div>
                                                <div class="stake-input"
                                                     :class="[
                                                              addClass('stake-input-locked',item),
                                                              addClass('stake-input-focus',item),
                                                              addClass('stake-input-over',item),

                                                               ]">

                                                            <span class="line-limit-length" :class="[
                                                                    addClass('input-placeholder',item),
                                                                    addClass('input-text',item),
                                                                    ]">
                                                                {{
                                                                item['status'] === oddsStatus['正常']['status']? (item['bet_money'] ? item['bet_money']:'输入金额'):'暂停'
                                                                }}</span>
                                                </div>
                                                <!--                                                // item['status'] === oddsStatus[_.findIndex(oddsStatus,{'name':'正常'})]['status']? (item['bet_moeny'] ? item['bet_moeny']:'输入金额'):'暂停'-->
                                            </div>
                                            <div class="item-return line-limit-length">
                                                预计返还
                                                <span class="return-amount">{{(item['odds']*item['bet_money']).toFixed(2)}}</span>
                                            </div>
                                        </section>
                                    </div>

                                    <div :class="[
                                             addClass('keyboard-item',item),
                                             addClass('keyboard-item-active',item),
                                            ]">
                                        <div class="bet-keyboard">
                                            <section class="content">
                                                <div class="content__btn--number" @click.stop="inputAmount(item,1)">1
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,2)">2
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,3)">3
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,4)">4
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,5)">5
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,6)">6
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,7)">7
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,8)">8
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,9)">9
                                                </div>
                                                <div class="content__btn--number" @click.stop="inputAmount(item,0)">0
                                                </div>
                                            </section>
                                            <section class="content">
                                                <div class="content__btn--betMax"
                                                     :class="[addClass('content__btn--overBetMax',item)]"
                                                     @click.stop="item['bet_money']=String(item['bet_limit'][1])">
                                                    <div>最大投注</div>
                                                    <div class="limit-stake">{{item['bet_limit'][1]}}</div>
                                                </div>
                                                <div class="content__btn--delete"
                                                     @click.stop="item['bet_money']=item['bet_money'].substring(0,item['bet_money'].length-1)">
                                                    <i class="delete-icon"></i>
                                                </div>
                                                <div class="content__btn--confirm" @click.stop="confirm(item)">
                                                    <div>确认</div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>



                    </vue-Scroll>

                </section>
                <section class="bet-slip-pop-note bet-slip-pop-note-alert"
                         v-if="_.findIndex(betList,{'change':true})!==-1 || _.findIndex(betList,{'enable_parlay':0}) !==-1">
                    <div class="note-alert" v-if="_.findIndex(betList,{'change':true})!==-1">
                        <div class="alert-icon"></div>
                        您所选投注项的盘口、赔率或有效性已经产生变化
                    </div>
                    <div v-else-if="_.findIndex(betList,{'enable_parlay':0})!==-1">
                        加亮的选项不可串成过关投注
                    </div>
                </section>
            </div>
        </transition>


        <!--        收起-->

        <section class="bet-slip-tab" v-show="betList.length"
                 :class="[ addClass('hide-tab-line')]"
                 @click.stop="$store.dispatch('app/setBetSlipPopBodyShow',!betSlipPopBodyShow)">
            <div class="tab-content" v-if="betSlipPopBodyShow===true">
                <div class="content-left">
                    <div class="bet-amount">
                        <div class="line-limit-length">投注金额
                            <span>{{_.sumBy(betList, function(o) { return  parseFloat(o.bet_money?o.bet_money:0); }).toFixed(2)}}</span>
                        </div>
                        <div style="height: 2px;"></div>
                        <div class="line-limit-length">最高返还
                            <span class="total-return">{{_.sumBy(betList, function(o) { return  parseFloat(o.bet_money*o.odds);}).toFixed(2)}}</span>
                        </div>
                    </div>
                    <div class="toggle-tab">收起
                    </div>
                </div>


                <!--                    赔率变动了 点击接受赔率-->
                <div class="bet-btn odds-change-btn" v-if="_.findIndex(betList,{'change':true})!==-1"
                     @click.stop="betList.forEach(function(item) { Object.assign(item, {change:false})});">
                    接受赔率变化
                </div>
                <div class="bet-btn" v-else>
                    确认投注
                </div>
            </div>
            <div class="tab-content" v-else-if="betSlipPopBodyShow===false">
                <div class="selected-text">
                    <div>已选</div>
                    <div class="selected-number">{{betList.length}}</div>
                </div>
                <div class="toggle-tab">展开</div>
                <div class="bet-btn" :class="[addClass('odds-change-btn')]">投注单
                </div>
            </div>
        </section>

    </div>

</template>

<script>
    // import {betorder} from '@/api/order'
    import {mapGetters} from "vuex";

    export default {
        name: "index",
        computed: {
            ...mapGetters([
                'gameList',
                'matchList',
                'betSlipPopBodyShow',
                'matchStage',
                'oddsList',
                'betList',
                'oddsStatus',
                'userInfo',
            ])
        },
        components: {//注册组件
        },
        data() {
            return {
                show: true,
                ops: {
                    vuescroll: {
                        mode: 'slide',

                    },
                    scrollPanel: {
                        scrollingX: false,
                    },
                    bar: {
                        disable: true,
                    },
                    // preventDefaultOnMove: true,
                },
            }
        },
        methods: {//条用方法
            //下注订单
            // betOder() {
            //     let order = {
            //         user_id: this.userInfo['id'],
            //         total_stake: '',
            //
            //     }
            // },
            confirm(item) {
                if (parseInt(item['bet_money']) > parseInt(item['bet_limit'][1])) {
                    item['bet_money'] = String(item['bet_limit'][1]);
                } else if (parseInt(item['bet_money']) < (item['bet_limit'][0])) {
                    item['bet_money'] = String(item['bet_limit'][0]);
                }
                item['keyboard'] = false
            },
            keyboardShow(item) {
                this.betList.filter(items => {
                    if (items['id'] === item['id']) {
                        if (item['status'] === this.oddsStatus['正常']['status']) {
                            item['keyboard'] = !item['keyboard']
                        }
                    } else {
                        items['keyboard'] = false
                    }
                })
            },
            //输入金额
            inputAmount(item, amount) {
                amount = String(amount)
                // if(item['bet_money'].length < 6){
                if (amount === '0') {
                    if (item['bet_money'] !== '') {
                        item['bet_money'] = item['bet_money'] + amount
                    }

                } else {
                    item['bet_money'] = item['bet_money'] + amount
                }
                // }

                // item['bet_money']==='' ? '':item['bet_money'].length <6 ? item['bet_money'] =  item['bet_money']+ String(amount):''

            },
            //删除全部
            delAll() {
                this.betList.forEach(item => {
                    Object.assign(item, {bet_money: '', change: false, keyboard: false})
                })
                this.$store.dispatch('app/setBetList', [])
            },
            //单个删除
            delIndex(index) {
                Object.assign(this.betList[index], {bet_money: '', change: false, keyboard: false})
                this.$store.dispatch('app/deleteBetList', index)
            },
            //添加样式
            addClass(name, item) {
                let addOrNot = false
                switch (name) {
                    case 'money-lock':
                    case 'odds-item-locked':
                    case 'stake-input':
                        //禁止输入金额 已经封盘
                        addOrNot = item['status'] !== this.oddsStatus['正常']['status'];
                        break;
                    case 'money-odds':
                        addOrNot = item['status'] === this.oddsStatus['正常']['status'];
                        break
                    case 'money-odds-change'://赔率已经在变 背景颜色字体颜色变
                        addOrNot = item['change'] && item['status'] === this.oddsStatus['正常']['status']
                        break;
                    case 'keyboard-item'://键盘隐藏
                        addOrNot = item['keyboard'] === false || item['status'] !== this.oddsStatus['正常']['status']
                        break;
                    case 'keyboard-item-active'://键盘显示
                    case 'stake-input-focus'://
                        addOrNot = item['keyboard'] && item['status'] === this.oddsStatus['正常']['status']
                        break;
                    case 'stake-input-over'://超出了最大金额
                    case 'content__btn--overBetMax':
                        addOrNot = parseInt(item['bet_money']) > parseInt(item['bet_limit'][1])
                        break;
                    case 'odds-change-btn'://投注单中有一个赔率在变 就显示
                        addOrNot = this._.findIndex(this.betList, {'change': true}) !== -1
                        break;
                    case 'input-placeholder':
                        //金额等于空情况下
                        addOrNot = item['bet_money'] === ''
                        break
                    case 'input-text':
                        //输入金额里面有数字 情况下
                        addOrNot = item['bet_money'] !== ''
                        break
                    case 'hide-tab-line':
                        addOrNot = this.betSlipPopBodyShow === false
                        break
                    case 'odds-item-alert':
                        // 加亮的选项不可串成过关投注
                        addOrNot = item['enable_parlay'] === 0
                }


                return {
                    [name]: addOrNot
                }


            }
        },
        mounted() {//加载完毕后

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },

        watch: {
            betList: {
                handler(curVal) {
                    if (curVal.length === 0) {
                        this.$store.dispatch('app/setBetSlipPopBodyShow', false)
                    } else if (curVal.length === 1) {
                        // setTimeout( ()=> {
                        this.$nextTick(() => {
                            this.$store.dispatch('app/setBetSlipPopBodyShow', true)
                        })

                        // },1)

                    }


                },
                deep: true
            },
            // oddsList:{
            //     handler(curVal){
            //         console.log(curVal)
            //     },
            //     deep: true
            // }

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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhbPpl608L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU0LjAwMDAwMCwgLTEyNzEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSLlhbPpl60iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NC4wMDAwMDAsIDEyNzEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MzY5NzI4NywxNi42NzU5MzA5IEM2LjcxNzQxNzkzLDE2LjY5NzI0MDQgNi42OTY5NTA4MSwxNi43MTc2OTkzIDYuNjc1NjMzMzgsMTYuNzM3MjQ1OCBMNi42NTg2NjA4OSwxNi43NTQyMTE0IEw2LjY1NzcxNDE4LDE2Ljc1MzI4NjIgQzYuNDgxOTAyMDcsMTYuOTA2OTE5MiA2LjI1MTgyMTEzLDE3IDYsMTcgQzUuNDQ3NzE1MjUsMTcgNSwxNi41NTIyODQ3IDUsMTYgQzUsMTUuNzU2NDQ2MyA1LjA4NzA2OTM1LDE1LjUzMzIyODcgNS4yMzE3NzkxNywxNS4zNTk3NzYxIEw1LjIyOTM3MDEyLDE1LjM1NzQyMTkgTDUuMjY2NzY5OTgsMTUuMzIwMDEyOCBDNS4yODM3OTA2MiwxNS4zMDE2NjggNS4zMDE0OTEyNywxNS4yODM5NjMxIDUuMzE5ODMxODQsMTUuMjY2OTM3OSBMOS41ODU3MjI4NCwxMSBMNS4zMTk4MzE4NCw2LjczMzA2MjA1IEM1LjMwMTQ5MTI3LDYuNzE2MDM2OTQgNS4yODM3OTA2Miw2LjY5ODMzMTk1IDUuMjY2NzY5OTgsNi42Nzk5ODcxNyBMNS4yMjkzNzAxMiw2LjY0MjU3ODEyIEw1LjIzMTc3OTE3LDYuNjQwMjIzODUgQzUuMDg3MDY5MzUsNi40NjY3NzEyOSA1LDYuMjQzNTUzNzEgNSw2IEM1LDUuNDQ3NzE1MjUgNS40NDc3MTUyNSw1IDYsNSBDNi4yNTE4MjExMyw1IDYuNDgxOTAyMDcsNS4wOTMwODA4IDYuNjU3NzE0MTgsNS4yNDY3MTM3NiBMNi42NTg2NjA4OSw1LjI0NTc4ODU3IEw2LjY3NTYzMzIsNS4yNjI3NTQwNyBDNi42OTY5NTA4MSw1LjI4MjMwMDY4IDYuNzE3NDE3OTMsNS4zMDI3NTk2IDYuNzM2OTcyODcsNS4zMjQwNjkxMiBMMTEuNzUyNzQ2NiwxMC4zMzc4Mjk2IEwxMS43NTA5Mzk2LDEwLjMzOTYxIEMxMS45MDU5NzA5LDEwLjUxNTc2MDMgMTIsMTAuNzQ2ODk5MyAxMiwxMSBDMTIsMTEuMjUzMTAwNyAxMS45MDU5NzA5LDExLjQ4NDIzOTcgMTEuNzUwOTM5NiwxMS42NjAzOSBMMTEuNzUyNzQ2NiwxMS42NjIxNzA0IEw2LjczNjk3Mjg3LDE2LjY3NTkzMDkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjAwMDAwMCwgNS4wMDAwMDApIiBmaWxsLW9wYWNpdHk9IjAuNSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsNy40MTQ2MTQ4NSBMMS43MzY5NzI4NywxMS42NzU5MzA5IEMxLjcxNzQxNzkzLDExLjY5NzI0MDQgMS42OTY5NTA4MSwxMS43MTc2OTkzIDEuNjc1NjMzMzgsMTEuNzM3MjQ1OCBMMS42NTg2NjA4OSwxMS43NTQyMTE0IEwxLjY1NzcxNDE4LDExLjc1MzI4NjIgQzEuNDgxOTAyMDcsMTEuOTA2OTE5MiAxLjI1MTgyMTEzLDEyIDEsMTIgQzAuNDQ3NzE1MjUsMTIgMCwxMS41NTIyODQ3IDAsMTEgQzAsMTAuNzU2NDQ2MyAwLjA4NzA2OTM0OTYsMTAuNTMzMjI4NyAwLjIzMTc3OTE2OCwxMC4zNTk3NzYxIEwwLjIyOTM3MDExNywxMC4zNTc0MjE5IEwwLjI2Njc2OTk4MywxMC4zMjAwMTI4IEMwLjI4Mzc5MDYyMSwxMC4zMDE2NjggMC4zMDE0OTEyNjksMTAuMjgzOTYzMSAwLjMxOTgzMTg0MiwxMC4yNjY5Mzc5IEw0LjU4NTcyMjg0LDYgTDAuMzE5ODMxODQyLDEuNzMzMDYyMDUgQzAuMzAxNDkxMjY5LDEuNzE2MDM2OTQgMC4yODM3OTA2MjEsMS42OTgzMzE5NSAwLjI2Njc2OTk4NSwxLjY3OTk4NzE3IEwwLjIyOTM3MDExNywxLjY0MjU3ODEyIEwwLjIzMTc3OTE2OCwxLjY0MDIyMzg1IEMwLjA4NzA2OTM0OTYsMS40NjY3NzEyOSAwLDEuMjQzNTUzNzEgMCwxIEMwLDAuNDQ3NzE1MjUgMC40NDc3MTUyNSwwIDEsMCBDMS4yNTE4MjExMywwIDEuNDgxOTAyMDcsMC4wOTMwODA4MDA1IDEuNjU3NzE0MTgsMC4yNDY3MTM3NTggTDEuNjU4NjYwODksMC4yNDU3ODg1NzQgTDEuNjc1NjMzMiwwLjI2Mjc1NDA2OSBDMS42OTY5NTA4MSwwLjI4MjMwMDY4MyAxLjcxNzQxNzkzLDAuMzAyNzU5NjAzIDEuNzM2OTcyODcsMC4zMjQwNjkxMjIgTDYsNC41ODUzODUxNSBMNS4yNDcyNTM0Miw1LjMzNzgyOTU5IEw1LjI0OTA2MDM5LDUuMzM5NjA5OTggQzUuMDk0MDI5MTQsNS41MTU3NjAyOSA1LDUuNzQ2ODk5MyA1LDYgQzUsNi4yNTMxMDA3IDUuMDk0MDI5MTQsNi40ODQyMzk3MSA1LjI0OTA2MDM5LDYuNjYwMzkwMDIgTDUuMjQ3MjUzNDIsNi42NjIxNzA0MSBMNiw3LjQxNDYxNDg1IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCA2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy4wMDAwMDAsIC02LjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
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

    .bet-slip-pop .bet-slip-pop-body .odds-list .odds-item-alert {
        background: #232030;
        border-left-color: #f22;
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDkuMyAoNTExNjcpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgF9pb3MiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmipXms6jpobUt5LiN5Y+v5Liy5YWz5oqV5rOo5pWI5p6cLWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0yMTUuMDAwMDAwKSIgZmlsbD0iIzc1OEJCNSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTQ4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA1MS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYsMTkgTDE5LDE2IEwyMCwxNyBMMTcsMjAgTDIwLDIzIEwxOSwyNCBMMTYsMjEgTDEzLDI0IEwxMiwyMyBMMTUsMjAgTDEyLDE3IEwxMywxNiBMMTYsMTkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCA5IDExIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6ZSB5a6aPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjAwMDAwMCwgLTEwNzMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmipXms6jpop3lj5jljJbplIHlrpoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyLjAwMDAwMCwgMTA3My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDMuNSBDNywyLjExOTI4ODEzIDUuODgwNzExODcsMSA0LjUsMSBDMy4xMTkyODgxMywxIDIsMi4xMTkyODgxMyAyLDMuNSBMMiw1LjUgTDEsNS41IEwxLDMuNSBDMSwxLjU2NzAwMzM4IDIuNTY3MDAzMzgsMCA0LjUsMCBDNi40MzI5OTY2MiwwIDgsMS41NjcwMDMzOCA4LDMuNSBMOCw1LjUgTDcsNS41IEw3LDMuNSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMxRUZGRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjUsNSBMNy41LDUgQzguMzI4NDI3MTIsNSA5LDUuNjcxNTcyODggOSw2LjUgTDksOS41IEM5LDEwLjMyODQyNzEgOC4zMjg0MjcxMiwxMSA3LjUsMTEgTDEuNSwxMSBDMC42NzE1NzI4NzUsMTEgLTMuNDI2MzYxNDdlLTE2LDEwLjMyODQyNzEgLTQuNDQwODkyMWUtMTYsOS41IEwwLDYuNSBDLTEuMDE0NTMwNjNlLTE2LDUuNjcxNTcyODggMC42NzE1NzI4NzUsNSAxLjUsNSBaIE0yLDYgQzEuNDQ3NzE1MjUsNiAxLDYuNDQ3NzE1MjUgMSw3IEwxLDkgQzEsOS41NTIyODQ3NSAxLjQ0NzcxNTI1LDEwIDIsMTAgTDcsMTAgQzcuNTUyMjg0NzUsMTAgOCw5LjU1MjI4NDc1IDgsOSBMOCw3IEM4LDYuNDQ3NzE1MjUgNy41NTIyODQ3NSw2IDcsNiBMMiw2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMCIgZmlsbD0iIzFFRkZGQSIgeD0iMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMSIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
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

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-focus .input-placeholder {
        font-size: 1.2rem;
        border-left: 1px solid transparent;
        animation-name: input-breathing-left;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-focus .input-text {
        color: #fff;
        font-size: 1.6rem;
        border-right: 1px solid transparent;
        animation-name: input-breathing-right;
        animation-duration: 1.2s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-focus {
        border: 1px solid #125e72;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .stake-input-over {
        border: 1px solid #ff1418;
    }

    .bet-slip-pop .bet-slip-pop-body .odds-list .item-return {
        font-size: 1rem;
        color: #526585;
        max-width: 150px;
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

    .bet-slip-tab .tab-content .selected-text {
        margin-left: 16px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.1rem;
        color: #fff;
    }

    .bet-slip-tab .tab-content .selected-text .selected-number {
        border-radius: 100px;
        padding: 1px 7px;
        background: #526585;
        margin-left: 8px;
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
        max-width: 70%;
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mipXms6jljZXmj5DnpLpAMng8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4w77yI6LCD5pW0djAx77yJIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2NC4wMDAwMDAsIC0xMzE3LjAwMDAwMCkiIGZpbGw9IiNGRkZBQTgiPgogICAgICAgICAgICA8ZyBpZD0i5oqV5rOo5Y2V5o+Q56S6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjQuMDAwMDAwLCAxMzE3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTgsMTYgQzMuNTgxNzIyLDE2IDAsMTIuNDE4Mjc4IDAsOCBDMCwzLjU4MTcyMiAzLjU4MTcyMiwwIDgsMCBDMTIuNDE4Mjc4LDAgMTYsMy41ODE3MjIgMTYsOCBDMTYsMTIuNDE4Mjc4IDEyLjQxODI3OCwxNiA4LDE2IFogTTgsMTUgQzExLjg2NTk5MzIsMTUgMTUsMTEuODY1OTkzMiAxNSw4IEMxNSw0LjEzNDAwNjc1IDExLjg2NTk5MzIsMSA4LDEgQzQuMTM0MDA2NzUsMSAxLDQuMTM0MDA2NzUgMSw4IEMxLDExLjg2NTk5MzIgNC4xMzQwMDY3NSwxNSA4LDE1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsNCBMOSw0IEw5LDkgTDcsOSBMNyw0IFogTTcsMTAgTDksMTAgTDksMTIgTDcsMTIgTDcsMTAgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
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

    .hide-tab-line {
        border-top: 1px solid #125e72;
    }

    /*    键盘*/
    /*隐藏高度*/
    .keyboard-item {
        height: 0;
    }

    .keyboard-item, .show-multiples-keyboard {
        transition: all .2s ease-out;
        overflow: hidden;
    }

    /*    数字按键*/
    .keyboard-item-active {
        height: 104px;
        transition: all .2s ease-out;
        overflow: hidden;
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

    .bet-keyboard .content, .bet-keyboard {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content {
        width: calc(100% - 8px);
        color: #fff;
    }

    .bet-keyboard .content__btn--number {
        width: calc((100% - 27px) / 10);
        font-size: 2.2rem;
        font-weight: 300;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
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
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
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
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content__btn--delete .delete-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzVweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMzUgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7muIXpmaQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYyLjAwMDAwMCwgLTEyMjUuMDAwMDAwKSIgZmlsbD0iI0JGRDBFOCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xODIuMTY5NDUsMTIzMyBMMTc3LjE3MjQ1LDEyMjggTDE3NS4xNzM2NSwxMjMwIEwxODAuMTcwNjUsMTIzNSBMMTc1LjE3MzY1LDEyNDAgTDE3Ny4xNzI0NSwxMjQyIEwxODIuMTY5NDUsMTIzNyBMMTg3LjE2NjQ0OSwxMjQyIEwxODkuMTY1MjQ5LDEyNDAgTDE4NC4xNjgyNDksMTIzNSBMMTg5LjE2NTI0OSwxMjMwIEwxODcuMTY2NDQ5LDEyMjggTDE4Mi4xNjk0NSwxMjMzIFogTTE3My4yNjM5MDcsMTIyNSBMMTk1LDEyMjUgQzE5Ni4xMDQ1NjksMTIyNSAxOTcsMTIyNS44OTU0MyAxOTcsMTIyNyBMMTk3LDEyNDMgQzE5NywxMjQ0LjEwNDU3IDE5Ni4xMDQ1NjksMTI0NSAxOTUsMTI0NSBMMTczLjI2MzkwNywxMjQ1IEMxNzIuMjA0NzI3LDEyNDUgMTcxLjE4ODc4NywxMjQ0LjU3OTkxIDE3MC40Mzg5MjMsMTI0My44MzE4NyBMMTYyLjI5NTIzNCwxMjM1LjcwNzk3IEMxNjEuOTA0MjM1LDEyMzUuMzE3OTIgMTYxLjkwMzQ2NSwxMjM0LjY4NDc1IDE2Mi4yOTM1MTQsMTIzNC4yOTM3NSBDMTYyLjI5NDA4NiwxMjM0LjI5MzE4IDE2Mi4yOTQ2NiwxMjM0LjI5MjYxIDE2Mi4yOTUyMzQsMTIzNC4yOTIwMyBMMTcwLjQzODkyMywxMjI2LjE2ODEzIEMxNzEuMTg4Nzg3LDEyMjUuNDIwMDkgMTcyLjIwNDcyNywxMjI1IDE3My4yNjM5MDcsMTIyNSBaIiBpZD0i5riF6ZmkIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 35px;
        height: 20px;
    }

    .bet-keyboard .content__btn--confirm {
        width: calc((70% - 4.5px) / 2);
        /*background: #515d75;*/
        color: #fff;
        height: 42px;
        background: #3d475e;
        box-shadow: 0 1px 2px 0 rgba(9, 14, 22, .5), inset 0 1px 0 0 rgba(95, 108, 132, .4);
        border-radius: 4px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .bet-keyboard .content__btn--overBetMax {
        background: #ff1418;
    }

    @keyframes input-breathing-left {
        0% {
            border-left: 1px solid #1ee8e7
        }
        60% {
            border-left: 1px solid #20304a
        }
        to {
            border-left: 1px solid #1ee8e7
        }
    }

    @keyframes input-breathing-right {
        0% {
            border-right: 1px solid #1ee8e7
        }
        60% {
            border-right: 1px solid #20304a
        }
        to {
            border-right: 1px solid #1ee8e7
        }
    }
    /*@keyframes move{*/
    /*    0%{height:0px;}*/
    /*    50%{height:41px;}*/
    /*    100%{height:82px;}*/
    /*}*/

</style>
