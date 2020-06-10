<template>
    <div class="match-card-button" ref="oddsBtn" @click.stop="addToCart()"
         :class="oddsClass()">
        <!--                                        btn-odds-dropping-->
        <div class="button-dark-border">

            <div class="button-content">
                <!--                                                {{_.sortBy(item['odds'], function(o) { return o.id; })[0]}}-->
                <!--                                                {{item['odds'][_.findIndex(item['odds'],{name:item['team'][_.findIndex(item['team'],{'pos':1})]['team_name']})]}}-->
                <!--                                <div class="button-name">{{item['team'][0]['team_name']}}</div>-->
                <div class="button-name">
                    {{name}}
                </div>
                <!--                              !==oddsStatus['已结算']['status']          已经结算不会显示赔率-->
                <div class="button-odds-content"
                     v-if="status === oddsStatus['正常']['status'] || status === oddsStatus['已封盘']['status']">
                    <!--                                                    >-->
                    <div class="odds-rising-icon" ref="oddsRising"></div>
                    <div class="btn-odds">
                                                            <span v-if=" status ===oddsStatus['正常']['status'] && odds > 1">
                                                                {{odds}}
                                                            </span>
                    </div>
                    <div class="odds-dropping-icon" ref="oddsDropping"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "MatchCardButton",
        computed: {
            ...mapGetters([
                'oddsStatus',
                'betList',
                'oddsList',

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
            status: Number
        },
        data() {
            return {
                oddsRisingTime: "",
                oddsDroppingTime: ""
            }
        },
        methods: {//条用方法
            oddsClass() {
                return {
                    // e = n.isSelected,
                    // l = n.status,
                    // i = n.odds;
                    "btn-selected": this.oddsInCart(),
                    "btn-locked": this.status === this.oddsStatus['已封盘']['status'] || this.odds <= 1 ,
                    "btn-over":this.status !== this.oddsStatus['正常']['status'] && this.status !== this.oddsStatus['已封盘']['status'],

                }
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
            },
            //选中
            oddsInCart () {
                // console.log(odds);
                // return  false
                return this.betList.some(item=> item.id === this.id)
            },
            removeOddsRising() {
                if (this.oddsRisingTime) {
                    clearTimeout(this.oddsRisingTime)
                }

                this.oddsRisingTime = setTimeout(() => {
                    this.$nextTick(() => {
                        if(this.$refs.oddsBtn){
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
                        if(this.$refs.oddsBtn){
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
            // console.log( this.id,this.name,this.status,this.odds)
        },
        beforeDestroy() {//组件销毁前

        },
        updated() {//更新数据
        },
        components: {//注册组件
        },
        watch: {
            'odds'(newval, oldval) {
                const oldOdds = parseFloat(oldval)
                const newOdds = parseFloat(newval)
                if (oldOdds > newOdds && this.status === this.oddsStatus['正常']['status']) {
                    if(this.$refs.oddsBtn){
                        this.$refs.oddsBtn.classList.remove("btn-odds-rising")
                        this.$refs.oddsBtn.classList.add("btn-odds-dropping")
                    }

                    this.removeOddsDropping()

                } else if (oldOdds < newOdds && this.status === this.oddsStatus['正常']['status']) {
                    if(this.$refs.oddsBtn){
                        this.$refs.oddsBtn.classList.remove("btn-odds-dropping")
                        this.$refs.oddsBtn.classList.add("btn-odds-rising")
                    }
                    this.removeOddsRising()

                }
            },
            'status'() {

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
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 4px;
        background: linear-gradient(90deg, #298a97, #317699);
        box-shadow: 0 0 4px 0 rgba(14, 20, 34, .5);
    }

    .match-card-button .button-dark-border {
        background: linear-gradient(#323e57, #1d2639);
        height: 38px;
        border-radius: 3px;
    }

    .match-card-button .button-content, .match-card-button .button-dark-border {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        width: calc(100% - 2px);
    }

    .btn-over .button-dark-border .button-content, .btn-over .button-dark-border {
        background: #1d2638;
    }

    .match-card-button .button-content {
        border-radius: 2px;
        background-color: #252f44;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        height: 36px;
    }

    .match-card-button .button-content .button-name {
        font-size: 1.2rem;
        max-width: 65%;
        overflow-wrap: break-word;
    }

    .match-card-button .button-content .button-name {
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .match-card-button .button-content .button-odds-content {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        font-size: 1.2rem;
        color: #fff;
    }

    /*赔率升降*/
    .match-card-button .button-content .button-odds-content .odds-dropping-icon, .match-card-button .button-content .button-odds-content .odds-rising-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 10px;
        height: 9px;
    }

    /*赔率上升样式.match-card-button .btn-odds-rising*/
    .btn-odds-rising .odds-rising-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6auYPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iIzAwREM1RSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbpq5giIHBvaW50cz0iNjMgMTA3NCA2OCAxMDgzIDYzIDEwODEgNTggMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }

    /*上升字体颜色*/
    .btn-odds-rising .btn-odds {
        color: #00dc5e;
    }

    /*赔率下降样式.match-card-button .btn-odds-dropping*/
    .btn-odds-dropping .odds-dropping-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW5L2OPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iI0ZGMjIyMiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbkvY4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMTA3OC41MDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTI5LjAwMDAwMCwgLTEwNzguNTAwMDAwKSAiIHBvaW50cz0iMjkgMTA3NCAzNCAxMDgzIDI5IDEwODEgMjQgMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }

    /*下降字体颜色*/
    .btn-odds-dropping .btn-odds {
        color: #f22;
    }
    .btn-over {
        background: #27394c;
        box-shadow: none;
    }
    /*封盘*/
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

    /*选中样式*/
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

    @keyframes flash {
        0%, 50%, to {
            opacity: 1
        }
        25%, 75% {
            opacity: 0
        }
    }
</style>
