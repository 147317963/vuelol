<template>
    <div class="home-match-card"
         @click.stop="toBettingPage()"
    >

        <section class="card-header">
            <!--                游戏logo-->
            <img style="width: 20px"
                 v-lazy="getGameIcon()">
            <!--                跳转到当前赛季列表-->
            <div class="tournament-name"
                 @click.stop="'home'=== $route.name && toTournamentPage()">
                {{getTournamentName()}}
            </div>
            <!--                    bo  转换成大写-->
            <div class="match-round">&nbsp;/ {{matchRound()}}</div>
            <div class="play-count">
                {{'+'+matchData.play_count}}
            </div>
        </section>
        <section class="card-body">
            <div class="card-body-team">
                <img class="team-logo"
                     v-lazy="guestTeam() && configList.img_url.value + guestTeam().team_logo">
            </div>

            <div class="card-body-center">
                <!--                                团队1 logo-->
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSI3OHB4IiB2aWV3Qm94PSIwIDAgMjQgNzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ljaHniYfljLrliIblibLlt6Y8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjEwMCUiIGN5PSI1MCUiIGZ4PSIxMDAlIiBmeT0iNTAlIiByPSI5OC44MDMyODc2JSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwwLjUwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC4zMDAwMDApLHJvdGF0ZSgtMTc5Ljk5OTk5OCksc2NhbGUoMS4wMDAwMDAsMS42MzI1MTgpLHRyYW5zbGF0ZSgtMS4wMDAwMDAsLTAuNTAwMDAwKSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEMxMjFGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQTI1MzgiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjMiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyLjAwMDAwMCwgLTE5NjUuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLljaHniYfljLrliIblibLlt6YiIHg9IjExMiIgeT0iMTk2NCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                     class="center-left">
                <!--                                比分-->
                <div class="team-score" v-if="matchData.status === matchStatus['滚盘中']['status'] ">
                    <div class="score left-score">
                        {{guestTeam().score.total || 0}}
                    </div>
                    <div class="dash-symbol">-</div>
                    <div class="score right-score">
                        {{homeTeam().score.total || 0}}
                    </div>
                </div>
                <div class="team-score" v-if="matchData.status === matchStatus['已结束']['status'] ">
                    <div class="score left-score"> {{guestTeam().score.total || 0}}</div>
                    <div class="created-time">{{matchData.start_time.substr(11,5)}}</div>
                    <div class="score right-score">{{homeTeam().score.total || 0}}</div>
                </div>
                <!--                                开始时间-->
                <div class="start-time" v-if="matchData.status === matchStatus['未开始']['status'] ">
                    {{matchData.start_time.substr(11,5)}}

                </div>
                <!--                                团队2 logo-->
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSI3OHB4IiB2aWV3Qm94PSIwIDAgMjQgNzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ljaHniYfljLrliIblibLlj7M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjEwMCUiIGN5PSI1MCUiIGZ4PSIxMDAlIiBmeT0iNTAlIiByPSI5OC44MDMyODc2JSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwwLjUwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC4zMDAwMDApLHJvdGF0ZSgtMTc5Ljk5OTk5OCksc2NhbGUoMS4wMDAwMDAsMS42MzI1MTgpLHRyYW5zbGF0ZSgtMS4wMDAwMDAsLTAuNTAwMDAwKSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEMxMjFGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQTI1MzgiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjMiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2LjAwMDAwMCwgLTE5NjUuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLljaHniYfljLrliIblibLlj7MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4OC4wMDAwMDAsIDIwMDQuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xODguMDAwMDAwLCAtMjAwNC4wMDAwMDApICIgeD0iMTc2IiB5PSIxOTY0IiB3aWR0aD0iMjQiIGhlaWdodD0iODAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                     class="center-right">
            </div>
            <div class="card-body-team">
                <img class="team-logo"
                     v-lazy="homeTeam() && configList.img_url.value + homeTeam().team_logo">
            </div>

        </section>
        <odds-group-title
                :title="groupTitle()"
        >

        </odds-group-title>
<!--        有赔率-->
        <section class="card-footer" v-if="matchData.odds && matchData.odds.length">
            <div class="card-odds-btn">
                <match-card-button
                        :id="guestOdds().id"
                        :name="getTeamName(guestTeam())"
                        :odds=" guestOdds().odds"
                        :status="guestOdds().status"
                >
                </match-card-button>
            </div>
            <!--            <div class="card-odds-btn" v-else>-->

            <!--                <match-card-button-->
            <!--                        :name="getTeamName(guestTeam())"-->
            <!--                        :status=5-->
            <!--                >-->
            <!--                </match-card-button>-->
            <!--            </div>-->
            <div class="match-status">


                <div class="match-is-early" v-if="matchData.status === matchStatus['未开始']['status']">
                    <div class="status-icon early-icon"></div>
                    <div class="match-status-text">{{matchStatus['未开始']['name']}}</div>
                </div>

                <div class="match-is-live" v-else-if="matchData.status === matchStatus['滚盘中']['status']">
                    <div class="status-icon live-icon"></div>
                    <div class="match-status-text">{{matchStatus['滚盘中']['name']}}</div>
                </div>

                <div class="match-flag"
                     v-else-if="winStatus['正常']['win'] !== guestOdds().win && winStatus['正常']['win'] !== homeOdds().win">

                    <flag-icon :win="guestOdds().win"></flag-icon>
                    <flag-icon :win="homeOdds().win"></flag-icon>
                </div>


            </div>

            <div class="card-odds-btn">
                <match-card-button
                        :id=" homeOdds().id"
                        :name="getTeamName(homeTeam())"
                        :odds="homeOdds().odds"
                        :status="homeOdds().status"
                >
                </match-card-button>

            </div>


        </section>
<!--     没有赔率-->
        <section class="card-footer" v-else>
            <div class="card-odds-btn">

                <match-card-button
                        :name="getTeamName(guestTeam())"
                        :status=5
                >
                </match-card-button>
            </div>
            <div class="match-status">


                <div class="match-is-early" v-if="matchData.status === matchStatus['未开始']['status']">
                    <div class="status-icon early-icon"></div>
                    <div class="match-status-text">{{matchStatus['未开始']['name']}}</div>
                </div>

                <div class="match-is-live" v-else-if="matchData.status === matchStatus['滚盘中']['status']">
                    <div class="status-icon live-icon"></div>
                    <div class="match-status-text">{{matchStatus['滚盘中']['name']}}</div>
                </div>


            </div>
            <div class="card-odds-btn">

                <match-card-button
                        :name="getTeamName(homeTeam())"
                        :status=5
                >
                </match-card-button>
            </div>

        </section>


    </div>

</template>

<script>
    import {mapGetters} from "vuex";
    import OddsGroupTitle from "@/components/others/OddsGroupTitle.vue"
    import MatchCardButton from '@/components/home/MatchCardButton.vue';
    import FlagIcon from '@/components/base/FlagIcon.vue';

    export default {
        name: "MatchCard",
        props: {
            matchData: Object,
            isComing: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapGetters([
                'isChinese',
                'configList',
                'gameList',
                'winStatus',
                'matchStatus',
                'matchStage',

            ])
        },
        data() {
            return {}
        },
        methods: {//条用方法
            addClass(name) {


                let addOrNot = false

                switch (name) {

                    case 'match-is-early'://未开始
                        addOrNot = this.matchData.status === this.matchStatus['未开始']['status']
                        break;
                    case 'match-is-live'://滚盘中
                        addOrNot = this.matchData.status === this.matchStatus['滚盘中']['status']
                        break;
                    case 'match-flag'://已结束
                        addOrNot = this.matchData.status === this.matchStatus['已结束']['status']
                        break;

                }


                return {
                    [name]: addOrNot
                }
            },

            toTournamentPage() {
                this.$router.push({
                    name: "tournament",
                    params: {
                        tournamentId: this.matchData.tournament_id
                    }
                })
            },
            toBettingPage() {
                this.$router.push({
                    name: "betting",
                    params: {
                        matchId: this.matchData.id
                    }
                })
            },
            matchRound() {
                return this.matchData.round.toUpperCase()
            },
            //主场团队
            guestTeam() {
                return Array.isArray(this.matchData.team) && this.matchData.team.find(item => 1 === item.pos)
            },
            guestOddsS() {
                // const guestTeamData = this.guestTeam()
                // if(!this.matchData.odds){
                //     console.log(guestTeamData && this.matchData.odds);
                // }
                var n = this,
                    e = n.guestTeam(),
                    l = n.matchData,
                    t = l,
                    i = t.odds;
                return e && i && i.find(function (n) {
                    return e.team_id === n.team_id
                })


            },
            guestOdds() {
                const guestTeamData = this.guestTeam()
                return guestTeamData && this.matchData.odds && this.matchData.odds.find(item => guestTeamData.team_id === item.team_id)
            },
            //客场团队
            homeTeam() {
                return Array.isArray(this.matchData.team) && this.matchData.team.find(item => 2 === item.pos)
            },
            homeOdds() {
                const homeTeamData = this.homeTeam()
                return homeTeamData && this.matchData.odds && this.matchData.odds.find(item => homeTeamData.team_id === item.team_id)
            },
            getTournamentName() {
                return this.isChinese ? this.matchData.tournament_name : this.matchData.tournament_short_name || this.matchData.tournament_name
            },
            getTeamName(team) {
                return this.isChinese ? team.team_name : team.team_short_name || team.team_name
            },
            getOddsTeam(team) {
                return Array.isArray(this.matchData.team) && this.matchData.team.find(item => item.team_id === team.team_id)
            },

            getGameIcon() {

                return this.matchData && Object.keys(this.gameList).length && Object.keys(this.configList).length ? this.configList.img_url.value + this.gameList[this.matchData.game_id].logo : ""
            },
            groupTitle() {
                if (!Object.prototype.hasOwnProperty.call(this.matchData, 'odds')) return ''

                const odds = this.matchData.odds[0]

                const name = this.isChinese ? odds.group_name : odds.group_short_name || odds.group_name
                return this.matchStage[odds.match_stage]['name'] + " " + name || ""
            },


            // getGroupTitle: function(odds) {
            //     return  odds ? this.isChinese ? odds[0].group_name : odds[0].group_short_name || odds[0].group_name : ""
            // }
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        beforeDestroy() {//组件销毁前
        },
        updated() {//更新数据
        },
        components: {
            OddsGroupTitle,
            MatchCardButton,
            FlagIcon,
//注册组件
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
    .home-match-card {
        height: 208px;
        background: #1d2638;
        border-radius: 4px;
        padding: 2px 16px 18px;
        margin: 8px 0;
        position: relative;
        border-top: 1px solid #1c3545;
        background-image: linear-gradient(#1c3545, #1d2638 10%), linear-gradient(#1c3545, #1d2638 10%);
        background-size: 1px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }

    .home-match-card .card-header {
        height: 37px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.2rem;
    }


    .home-match-card .card-header .tournament-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 6px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .home-match-card .card-header .match-round {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-overflow: unset;
        color: #758bb5;
    }

    .home-match-card .card-body, .home-match-card .card-header .play-count {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .home-match-card .card-header .play-count {
        width: 30px;
        height: 20px;
        margin-left: auto;
        background: #182032;
        border: 1px solid #1c5d94;
        border-radius: 2px;
        font-size: 1.2rem;
        color: #1ad2fe;
        -ms-flex-pack: center;
        justify-content: center;
        line-height: normal;
    }

    .home-match-card .card-body {
        margin-top: 6px;
        margin-bottom: 8px;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .home-match-card .card-body .card-body-team {
        width: 29.86667vw;
    }

    .home-match-card .card-body .card-body-team .team-logo {
        display: inline-block;
        background-position: 50%;
        background-repeat: no-repeat;
        width: 72px;
        height: 72px;
    }

    .home-match-card .card-body .card-body-center {
        width: 27.46667vw;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
    }

    .home-match-card .card-body .card-body-center .center-left {
        position: absolute;
        left: -24px;
    }

    .home-match-card .card-body .card-body-center .center-right {
        position: absolute;
        right: -24px;
    }

    .home-match-card .card-body .card-body-center .team-score {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        font-size: 2.8rem;
        color: #fff;
        position: relative;
        z-index: 1;
    }

    .home-match-card .card-body .card-body-center .team-score .score {
        position: absolute;
    }

    .home-match-card .card-body .card-body-center .team-score .left-score {
        font-family: AlphaH;
        right: 0;
        margin-right: 24px;
    }

    .home-match-card .card-body .card-body-center .team-score .created-time {
        color: #758bb5;
        font-size: 1.2rem;
        margin: 0 -16px;
    }

    .home-match-card .card-body .card-body-center .team-score .right-score {
        font-family: AlphaH;
        left: 0;
        margin-left: 24px;
    }


    .home-match-card .card-body .card-body-center .team-score .dash-symbol {
        color: #758bb5;
    }

    .home-match-card .card-body .card-body-center .start-time {
        font-size: 1.6rem;
        color: #fff;
    }

    .home-match-card .card-footer {
        margin-top: 7px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
    }

    .home-match-card .card-footer .card-odds-btn {
        width: 29.86667vw;
    }

    .home-match-card .card-footer .match-status {
        width: 27.46667vw;
        font-size: 1rem;
        -ms-flex-item-align: start;
        align-self: flex-start;
    }

    .home-match-card .card-footer .match-status .match-flag {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 9px;
        padding-right: 9px;
    }


    .home-match-card .card-footer .match-status .match-is-early, .home-match-card .card-footer .match-status .match-is-live {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    .home-match-card .card-footer .match-status .match-is-early, .home-match-card .card-footer .match-status .match-is-live {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    /*滚盘中样式*/
    .home-match-card .card-footer .match-status .live-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDIyIDIyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgaWQ9Iui/m+ihjOS4rS1jb3B5LTIiPgogICAgICAgIDxwYXRoIGlkPSJTaGFwZSIgZD0iTTExLDVDNy43LDUgNSw3LjcgNSwxMUM1LDE0LjMgNy43LDE3IDExLDE3QzE0LjMsMTcgMTcsMTQuMyAxNywxMUMxNyw3LjcgMTQuMyw1IDExLDVaTTExLDE2LjVDNy45NzUsMTYuNSA1LjUsMTQuMDI1IDUuNSwxMUM1LjUsNy45NzUgNy45NzUsNS41IDExLDUuNUMxNC4wMjUsNS41IDE2LjUsNy45NzUgMTYuNSwxMUMxNi41LDE0LjAyNSAxNC4wMjUsMTYuNSAxMSwxNi41WiIgc3R5bGU9ImZpbGw6cmdiKDMxLDI1MywyNTApOyIvPgogICAgICAgIDxwYXRoIGlkPSJQYXRoIiBkPSJNMTEsNi41QzEzLjQ3NSw2LjUgMTUuNSw4LjUyNSAxNS41LDExTDExLDExTDExLDYuNVoiIHN0eWxlPSJmaWxsOnJnYigzMSwyNTMsMjUwKTsiLz4KICAgICAgICA8ZyBpZD0iUGF0aDEiIHNlcmlmOmlkPSJQYXRoIj4KICAgICAgICAgICAgPHBhdGggaWQ9InBhdGgtNiIgZD0iTTExLDExTDExLDYuNUMxMy40ODUsNi41IDE1LjUsOC41MTUgMTUuNSwxMUMxNS41LDEzLjQ4NSAxMy40ODUsMTUuNSAxMSwxNS41QzguNTg2LDE1LjUgNi42MTYsMTMuNTk5IDYuNTA1LDExLjIxMkw2LjUsMTFMMTEsMTFaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXIxKTsiLz4KICAgICAgICAgICAgPHBhdGggaWQ9InBhdGgtNjEiIHNlcmlmOmlkPSJwYXRoLTYiIGQ9Ik0xMSwxMUwxMSw2LjVDMTMuNDg1LDYuNSAxNS41LDguNTE1IDE1LjUsMTFDMTUuNSwxMy40ODUgMTMuNDg1LDE1LjUgMTEsMTUuNUM4LjU4NiwxNS41IDYuNjE2LDEzLjU5OSA2LjUwNSwxMS4yMTJMNi41LDExTDExLDExWiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMik7Ii8+CiAgICAgICAgICAgIDxwYXRoIGlkPSJwYXRoLTYyIiBzZXJpZjppZD0icGF0aC02IiBkPSJNMTEsMTFMMTEsNi41QzEzLjQ4NSw2LjUgMTUuNSw4LjUxNSAxNS41LDExQzE1LjUsMTMuNDg1IDEzLjQ4NSwxNS41IDExLDE1LjVDOC41ODYsMTUuNSA2LjYxNiwxMy41OTkgNi41MDUsMTEuMjEyTDYuNSwxMUwxMSwxMVoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPgogICAgICAgICAgICA8cGF0aCBpZD0icGF0aC02MyIgc2VyaWY6aWQ9InBhdGgtNiIgZD0iTTExLDExTDExLDYuNUMxMy40ODUsNi41IDE1LjUsOC41MTUgMTUuNSwxMUMxNS41LDEzLjQ4NSAxMy40ODUsMTUuNSAxMSwxNS41QzguNTg2LDE1LjUgNi42MTYsMTMuNTk5IDYuNTA1LDExLjIxMkw2LjUsMTFMMTEsMTFaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI0KTsiLz4KICAgICAgICAgICAgPHBhdGggaWQ9InBhdGgtNjQiIHNlcmlmOmlkPSJwYXRoLTYiIGQ9Ik0xMSwxMUwxMSw2LjVDMTMuNDg1LDYuNSAxNS41LDguNTE1IDE1LjUsMTFDMTUuNSwxMy40ODUgMTMuNDg1LDE1LjUgMTEsMTUuNUM4LjU4NiwxNS41IDYuNjE2LDEzLjU5OSA2LjUwNSwxMS4yMTJMNi41LDExTDExLDExWiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyNSk7Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0yLjQ5OTYzLC0zLjkzMDU0LDMuOTMwNTQsLTIuNDk5NjMsMTMuNDk5NiwxNC45MzA1KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMzEsMjUzLDI1MCk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0yLjk0MTY1LC0xLjE5MDA2LDEuMTkwMDYsLTIuOTQxNjUsMTMuOTQxNywxMi4xOTAxKSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMzEsMjUzLDI1MCk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xLjk1NjMsMi4zOTU3OGUtMTYsLTIuMzk1NzhlLTE2LC0xLjk1NjMsMTIuOTU2MywxMSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDMxLDI1MywyNTApO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIwLjUiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MC44Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMzEsMjUzLDI1MCk7c3RvcC1vcGFjaXR5OjAiLz48L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjQiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtMC41OTQzNiwwLjI0OTU3MywtMC4yNDk1NzMsLTAuNTk0MzYsMTEuNTk0NCwxMC43NTA0KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMzEsMjUzLDI1MCk7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjAuNyIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDMxLDI1MywyNTApO3N0b3Atb3BhY2l0eTowLjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0wLjI3NzcxLDAuMjk3MjQxLC0wLjI5NzI0MSwtMC4yNzc3MSwxMS4yNzc3LDEwLjcwMjgpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMC43NyIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDMxLDI1MywyNTApO3N0b3Atb3BhY2l0eTowLjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigzMSwyNTMsMjUwKTtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+Cjwvc3ZnPgo=);
    }

    .home-match-card .card-footer .match-status .match-is-live {
        color: #1ffdfa;
    }

    /*滚盘中样式*/
    .home-match-card .card-footer .match-status .status-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
    }

    /*未开始样式*/
    .home-match-card .card-footer .match-status .early-icon {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7mnKrlvIDlp4s8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI4LjAwMDAwMCwgLTExMTMuMDAwMDAwKSIgZmlsbD0iIzIxOTdGNCI+CiAgICAgICAgICAgIDxnIGlkPSLmnKrlvIDlp4siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOC4wMDAwMDAsIDExMTMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuODU3NjcsMTMuMTUwNjExNCBDMTMuODcyMDI3NiwxMy4xNjUzMDcxIDEzLjg4NTQ4NjksMTMuMTgwODg0MiAxMy44OTc5NTkyLDEzLjE5NzI1MzkgTDEzLjkxMDA5NTIsMTMuMjExMzAzNyBMMTMuOTA4OTc2MiwxMy4yMTIyODQ2IEMxMy45NjYzMjE0LDEzLjI5MzY0OSAxNCwxMy4zOTI4OTE1IDE0LDEzLjUgQzE0LDEzLjc3NjE0MjQgMTMuNzc2MTQyNCwxNCAxMy41LDE0IEMxMy4zNjkyOTI1LDE0IDEzLjI1MDI5OTEsMTMuOTQ5ODQ1OSAxMy4xNjEyMTQ4LDEzLjg2NzczMjUgTDEzLjE2MDQ2MTQsMTMuODY4MzkyOSBMMTEsMTIgQzEwLjQ0NzcxNTMsMTIgMTAsMTEuNTUyMjg0NyAxMCwxMSBDMTAsMTAuOTMwMDEzNCAxMC4wMDcxODk2LDEwLjg2MTcwNTkgMTAuMDIwODcwNiwxMC43OTU3NzYgTDEwLjQ0NDc5MDQsNy40MzczODMzNyBDMTAuNDc2MzQwNiw3LjE4NzQzNTIxIDEwLjY4ODkyMjUsNyAxMC45NDA4NTQxLDcgTDExLjA1OTQxNDYsNyBDMTEuMzExMjMxLDcgMTEuNTIzNzUzNCw3LjE4NzI2ODU5IDExLjU1NTQ0MDMsNy40MzcwODMzMyBMMTEuOTg2MzkwOCwxMC44MzQ2MzM1IEMxMS45OTUzNDIyLDEwLjg4ODQyNTEgMTIsMTAuOTQzNjY4NiAxMiwxMSBMMTMuODU3NjY5NSwxMy4xNTA2MTA5IFogTTExLDUgQzE0LjMsNSAxNyw3LjcgMTcsMTEgQzE3LDE0LjMgMTQuMywxNyAxMSwxNyBDNy43LDE3IDUsMTQuMyA1LDExIEM1LDcuNyA3LjcsNSAxMSw1IFogTTExLDE2IEMxMy43NSwxNiAxNiwxMy43NSAxNiwxMSBDMTYsOC4yNSAxMy43NSw2IDExLDYgQzguMjUsNiA2LDguMjUgNiwxMSBDNiwxMy43NSA4LjI1LDE2IDExLDE2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    }

    .home-match-card .card-footer .match-status .match-is-early {
        color: #2197f4;
    }

    @font-face {
        font-family: AlphaH;
        src: url(data:application/x-font-ttf;base64,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);
        font-display: fallback
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
