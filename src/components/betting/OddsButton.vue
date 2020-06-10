<template>
    <div class="match-card-button odds-btn"
         ref="oddsBtn"
         @click.stop="addToCart()"
         :class="oddsClass()"
    >

        <div class="button-dark-border">
            <div class="button-content btn-left" v-if="direction %2 ===0">
                <div class="button-name ">
                    {{name}}
                </div>
                <div class="button-odds-content"
                     v-if="status !== oddsStatus['已结束']['status']">
                    <div class="odds-rising-icon"></div>
                    <div class="odds-dropping-icon"></div>
                    <div class="btn-odds">
                        <span v-if="status !== oddsStatus['已封盘']['status']">
                            {{odds}}
                        </span>
                    </div>
                </div>
                <flag-icon v-if="win !==winStatus['正常']['win']" :win="win"></flag-icon>
            </div>
            <div class="button-content btn-right" v-else>
                <flag-icon v-if="win !==winStatus['正常']['win']" :win="win"></flag-icon>
                <div class="button-odds-content"
                     v-if="status !==oddsStatus['已结束']['status']">
                    <div class="btn-odds">
                        <span v-if="status !== oddsStatus['已封盘']['status']">
                            {{odds}}
                        </span>
                    </div>
                    <div class="odds-rising-icon"></div>
                    <div class="odds-dropping-icon"></div>
                </div>
                <div class="button-name">
                    {{name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FlagIcon from '@/components/base/FlagIcon.vue';
    import {mapGetters} from "vuex";

    export default {
        name: "OddsButton",
        computed: {
            ...mapGetters([
                'oddsStatus',
                'betList',
                'oddsList',
                'winStatus',

            ])
        },
        props: {
            //赔率ID
            id: {
                type: Number,
            },
            //团队名称
            name: {
                type: String,
                required: true
            },
            //赔率
            odds: {
                type: String,
            },
            status: Number,
            direction: Number,
            win: Number
        },
        data() {
            return {}
        },
        methods: {//条用方法
            oddsClass() {
                return {
                    "btn-selected": this.oddsInCart(),
                    "btn-locked": this.status === this.oddsStatus['已封盘']['status'],
                    "btn-over": this.status === this.oddsStatus['已结束']['status']
                }
            },
            //选中
            oddsInCart() {
                return this.betList.some(item => item.id === this.id)
            },
            addToCart() {

                if (this.status === this.oddsStatus['正常']['status']) {
                    const index = this.betList.findIndex(item => item.id === this.id)
                    if (index === -1) {
                        //没有就添加
                        this.$store.dispatch('app/addBetList', JSON.parse(JSON.stringify(Object.assign(this.oddsList[this.id], {
                            bet_money: '',
                            change: false,
                            keyboard: false,
                        }))))
                    } else {
                        //有就删除
                        this.$store.dispatch('app/deleteBetList', index)
                    }

                }

                // if (this.oddsInCart(n)) return  this.$store.commit("removeFromCart", n)
                // if (this.shoppingCart.length < 12) {
                //     var e = (this.isChinese ?  n.group_name :  n.group_short_name || n.group_name),
                //         l = this.outrightList.find(function(e) {
                //              e.id === n.match_id
                //         }),
                //         t =  this.getTeamName(n, l),
                //         o = this.isChinese ?  l.match_name:  l.match_short_name ||  "";
                //         l ?  this.$store.commit("addToCart",  {
                //         game_id: l.game_id,
                //         title: o + " " + t,
                //         groupName: e,
                //         match_name: this.tournamentName,
                //         short_title: t,
                //         start_time: l.start_time,
                //         end_time: l.end_time,
                //         enable_parlay: l.enable_parlay,
                //         isLive: 2 === l.status
                //     }) : ''
                // } else this.$util.middleTip("Maximum 12 Selections already made")

            },
            removeOddsRising() {
                if (this.oddsRisingTime) {
                    clearTimeout(this.oddsRisingTime)
                }

                this.oddsRisingTime = setTimeout(() => {
                    this.$nextTick(() => {
                        if (this.$refs.oddsBtn) {
                            this.$refs.oddsBtn.classList.remove("btn-odds-rising")
                            this.oddsRisingTime = ''
                        }
                    })
                }, 10000)
            },
            removeOddsDropping() {
                if (this.oddsDroppingTime) {
                    clearTimeout(this.oddsDroppingTime)
                }
                this.oddsDroppingTime = setTimeout(() => {
                    this.$nextTick(() => {
                        if (this.$refs.oddsBtn) {
                            this.$refs.oddsBtn.classList.remove("btn-odds-dropping")
                            this.oddsDroppingTime = ''
                        }

                    })
                }, 10000)

            }
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        beforeDestroy() {//组件销毁前

        },
        updated() {//更新数据
        },
        components: {//注册组件
            FlagIcon,
        },

        watch: {
            odds(newval, oldval) {
                const oldOdds = parseFloat(oldval)
                const newOdds = parseFloat(newval)
                console.log(newval)
                console.log(oldval)
                if (oldOdds > newOdds && this.status === this.oddsStatus['正常']['status']) {
                    if (this.$refs.oddsBtn) {
                        this.$refs.oddsBtn.classList.remove("btn-odds-rising")
                        this.$refs.oddsBtn.classList.add("btn-odds-dropping")
                    }

                    this.removeOddsDropping()

                } else if (oldOdds < newOdds && this.status === this.oddsStatus['正常']['status']) {
                    if (this.$refs.oddsBtn) {
                        this.$refs.oddsBtn.classList.remove("btn-odds-dropping")
                        this.$refs.oddsBtn.classList.add("btn-odds-rising")
                    }
                    this.removeOddsRising()

                }
            },
            status() {

                this.removeOddsDropping()
                this.removeOddsRising()


            }
        }

    }
</script>

<style scoped>
    .match-card-button {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        background: linear-gradient(90deg, #298a97, #317699);
        box-shadow: 0 0 4px 0 rgba(14, 20, 34, .5);
    }

    .match-card-button .button-dark-border, .match-card-button {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .betting-page .betting-odds .group-list .group-odds .odds-btn {
        width: calc((100% - 21.5px) / 2);
        margin-top: 8px;
    }

    .match-card-button .button-dark-border {
        background: linear-gradient(#323e57, #1d2639);
        height: 38px;
        width: calc(100% - 2px);
        border-radius: 3px;
    }

    .match-card-button .button-content {
        width: calc(100% - 2px);
        height: 36px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 2px;
        background-color: #252f44;
        overflow-wrap: break-word;
    }

    .match-card-button .btn-left {
        text-align: left;
    }

    .match-card-button .btn-right {
        text-align: right;
    }

    .match-card-button .button-content .button-name {
        font-size: 1.2rem;
        max-width: 65%;
        overflow-wrap: break-word;
    }

    .match-card-button .button-content .button-odds-content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.2rem;
        color: #fff;
    }

    .btn-locked .btn-odds {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCA5IDExIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6ZSB5a6aPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjAwMDAwMCwgLTEwNzMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmipXms6jpop3lj5jljJbplIHlrpoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyLjAwMDAwMCwgMTA3My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDMuNSBDNywyLjExOTI4ODEzIDUuODgwNzExODcsMSA0LjUsMSBDMy4xMTkyODgxMywxIDIsMi4xMTkyODgxMyAyLDMuNSBMMiw1LjUgTDEsNS41IEwxLDMuNSBDMSwxLjU2NzAwMzM4IDIuNTY3MDAzMzgsMCA0LjUsMCBDNi40MzI5OTY2MiwwIDgsMS41NjcwMDMzOCA4LDMuNSBMOCw1LjUgTDcsNS41IEw3LDMuNSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMxRUZGRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjUsNSBMNy41LDUgQzguMzI4NDI3MTIsNSA5LDUuNjcxNTcyODggOSw2LjUgTDksOS41IEM5LDEwLjMyODQyNzEgOC4zMjg0MjcxMiwxMSA3LjUsMTEgTDEuNSwxMSBDMC42NzE1NzI4NzUsMTEgLTMuNDI2MzYxNDdlLTE2LDEwLjMyODQyNzEgLTQuNDQwODkyMWUtMTYsOS41IEwwLDYuNSBDLTEuMDE0NTMwNjNlLTE2LDUuNjcxNTcyODggMC42NzE1NzI4NzUsNSAxLjUsNSBaIE0yLDYgQzEuNDQ3NzE1MjUsNiAxLDYuNDQ3NzE1MjUgMSw3IEwxLDkgQzEsOS41NTIyODQ3NSAxLjQ0NzcxNTI1LDEwIDIsMTAgTDcsMTAgQzcuNTUyMjg0NzUsMTAgOCw5LjU1MjI4NDc1IDgsOSBMOCw3IEM4LDYuNDQ3NzE1MjUgNy41NTIyODQ3NSw2IDcsNiBMMiw2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMCIgZmlsbD0iIzFFRkZGQSIgeD0iMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMSIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    }

    .match-card-button .button-content .button-odds-content .btn-odds {
        margin-left: 4px;
        margin-right: 4px;
    }

    .btn-over {
        background: #27394c;
        box-shadow: none;
    }

    .btn-over .button-dark-border .button-content, .btn-over .button-dark-border {
        background: #182032;
    }

    /*胜负样式*/
    .flag-icon {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 28px;
        height: 34px;
        font-weight: 700;
        font-size: 1.4rem;
    }

    .flag-lose {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='34' viewBox='0 0 28 34' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='b'%3E%3Cstop stop-color='%230C121F' offset='0%25'/%3E%3Cstop stop-color='%230C121F' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='30.541%25' cy='2.757%25' fx='30.541%25' fy='2.757%25' r='112.429%25' gradientTransform='matrix(-.14633 .59954 -.22163 -.01987 .356 -.155)' id='c'%3E%3Cstop stop-color='%23758BB5' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='77.164%25' cy='2.801%25' fx='77.164%25' fy='2.801%25' r='44.508%25' gradientTransform='matrix(0 .60606 -.40374 0 .783 -.44)' id='d'%3E%3Cstop stop-color='%23758BB5' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='a' d='M4 0h20v29l-10 4-10-4z'/%3E%3Cfilter x='-5%25' y='-3%25' width='110%25' height='106.1%25' filterUnits='objectBoundingBox' id='e'%3E%3CfeGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1'/%3E%3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E%3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'/%3E%3CfeColorMatrix values='0 0 0 0 0.0470588235 0 0 0 0 0.0705882353 0 0 0 0 0.121568627 0 0 0 0.5 0' in='shadowInnerInner1'/%3E%3C/filter%3E%3ClinearGradient x1='1.513%25' y1='98.968%25' x2='98.968%25' y2='98.968%25' id='f'%3E%3Cstop stop-color='%232C394E' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%23758BB5' offset='11.551%25'/%3E%3Cstop stop-color='%23758BB5' offset='88.472%25'/%3E%3Cstop stop-color='%232C394E' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath id='g' d='M0 0h28v1H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23758BB5' d='M3 0h22v29.5L14 34 3 29.5z'/%3E%3Cuse fill='%23526585' xlink:href='%23a'/%3E%3Cuse fill-opacity='.3' fill='url(%23b)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.7' fill='url(%23c)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.3' fill='url(%23d)' xlink:href='%23a'/%3E%3Cuse fill='%23000' filter='url(%23e)' xlink:href='%23a'/%3E%3Cg transform='matrix(1 0 0 -1 0 1)'%3E%3Cuse fill='url(%23f)' xlink:href='%23g'/%3E%3Cuse fill-opacity='.3' fill='%231F2F49' xlink:href='%23g'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        color: #cfdefc;
    }

    .flag-win {
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='28' height='34' viewBox='0 0 28 34' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3ClinearGradient x1='50%25' y1='0%25' x2='50%25' y2='100%25' id='b'%3E%3Cstop stop-color='%238E0F16' offset='0%25'/%3E%3Cstop stop-color='%237C1010' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3CradialGradient cx='30.541%25' cy='2.757%25' fx='30.541%25' fy='2.757%25' r='112.429%25' gradientTransform='matrix(-.14633 .59954 -.22163 -.01987 .356 -.155)' id='c'%3E%3Cstop stop-color='%23F22' offset='0%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3CradialGradient cx='77.164%25' cy='2.801%25' fx='77.164%25' fy='2.801%25' r='44.508%25' gradientTransform='matrix(0 .60606 -.40374 0 .783 -.44)' id='d'%3E%3Cstop stop-color='%23F22' offset='0%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/radialGradient%3E%3Cpath id='a' d='M4 0h20v29l-10 4-10-4z'/%3E%3Cfilter x='-5%25' y='-3%25' width='110%25' height='106.1%25' filterUnits='objectBoundingBox' id='e'%3E%3CfeGaussianBlur stdDeviation='1' in='SourceAlpha' result='shadowBlurInner1'/%3E%3CfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3E%3CfeComposite in='shadowOffsetInner1' in2='SourceAlpha' operator='arithmetic' k2='-1' k3='1' result='shadowInnerInner1'/%3E%3CfeColorMatrix values='0 0 0 0 0.470588235 0 0 0 0 0 0 0 0 0 0 0 0 0 0.498612998 0' in='shadowInnerInner1'/%3E%3C/filter%3E%3ClinearGradient x1='0%25' y1='98.968%25' y2='98.968%25' id='f'%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='0%25'/%3E%3Cstop stop-color='%23BE0000' offset='13.277%25'/%3E%3Cstop stop-color='%23BE0000' offset='86.598%25'/%3E%3Cstop stop-color='%23F22' stop-opacity='0' offset='100%25'/%3E%3C/linearGradient%3E%3Cpath id='g' d='M0 0h28v1H0z'/%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23F22' d='M3 0h22v29.5L14 34 3 29.5z'/%3E%3Cuse fill='%23F22' xlink:href='%23a'/%3E%3Cuse fill-opacity='.7' fill='url(%23b)' xlink:href='%23a'/%3E%3Cuse fill='url(%23c)' xlink:href='%23a'/%3E%3Cuse fill-opacity='.4' fill='url(%23d)' xlink:href='%23a'/%3E%3Cuse fill='%23000' filter='url(%23e)' xlink:href='%23a'/%3E%3Cg transform='matrix(1 0 0 -1 0 1)'%3E%3Cuse fill='url(%23f)' xlink:href='%23g'/%3E%3Cuse fill-opacity='.3' fill='%231F2F49' xlink:href='%23g'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        color: #ffeab8;
    }

    .match-card-button .button-content .result-icon {
        margin-top: -6px;
    }

    .btn-odds-rising .odds-rising-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 10px;
        height: 9px;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6auYPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iIzAwREM1RSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbpq5giIHBvaW50cz0iNjMgMTA3NCA2OCAxMDgzIDYzIDEwODEgNTggMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
    }

    .btn-odds-dropping .odds-dropping-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 10px;
        height: 9px;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW5L2OPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iI0ZGMjIyMiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbkvY4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMTA3OC41MDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTI5LjAwMDAwMCwgLTEwNzguNTAwMDAwKSAiIHBvaW50cz0iMjkgMTA3NCAzNCAxMDgzIDI5IDEwODEgMjQgMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
    }

    .btn-selected {
        background: linear-gradient(90deg, #1efffa, #34cdff);
        box-shadow: 0 1px 4px 0 rgba(0, 128, 255, .3);
    }

    .btn-selected .button-dark-border {
        background: #0585a1;
    }

    .btn-selected .button-dark-border .button-content {
        background: #0585a1;
        color: #fff;
        transition: all .3s ease-out;
    }

    .btn-odds-rising .btn-odds {
        color: #00dc5e;
    }

    .btn-odds-dropping .btn-odds {
        color: #f22;
    }

    @keyframes flash {
        0%, 50%, to {
            opacity: 1
        }
        25%, 75% {
            opacity: 0
        }
    }
</style>
