<template>
    <transition name="fade">
    <div style="padding-left: 8px;padding-right: 8px;" v-show="!this.$store.state.matchRefresh">
        <div class="home-match-card" v-for="(item, index)  in this.$store.state.match" :key="index" @click.stop="">
            <section class="card-header">
<!--                游戏logo-->
                <img style="width: 20px"    v-lazy="'//www.nmgdjkj.com/'+$store.state.gameList[_.findIndex($store.state.gameList,function(o) { return o.id == item['game_id']})]['game_logo']" >
<!--                跳转到当前赛季列表-->
                <div class="tournament-name"   @click.stop="$router.push({path:'/login',query:{id:item['tournament_id']}})">
                    {{item.tournament_name}}
                </div>
                <div class="match-round">&nbsp;/ {{item.round.toUpperCase()}}</div>
                <div class="play-count">
                    +73
                </div>
            </section>
            <section class="card-body">
                <div class="card-body-team">
                    <img class="team-logo"  v-lazy="'//www.nmgdjkj.com/'+item['team'][_.findIndex(item['team'],{'pos':1})]['team_logo']"   >
                </div>
                <div class="card-body-center">
                    <!--                                团队1 logo-->
                    <img src="../../assets/images/svg/kapian_you.svg"
                         class="center-left">
                    <!--                                比分-->
                    <div class="team-score" v-if="moment(item['start_time']).diff(moment())<=0">
                        <div class="score left-score">0</div>
                        <div class="dash-symbol">-</div>
                        <div class="score right-score">1</div>
                    </div>
                    <!--                                开始时间-->
                    <div class="start-time" v-else>{{item.start_time.substr(11,5)}}

                    </div>
                    <!--                                团队2 logo-->
                    <img src="../../assets/images/svg/kapian_zuo.svg"
                         class="center-right">
                </div>
                <div class="card-body-team">
                    <img class="team-logo"  v-lazy="'//www.nmgdjkj.com/'+item['team'][_.findIndex(item['team'],{'pos':2})]['team_logo']"   >
                </div>
            </section>
            <div class="odds-group-title">
                <!--                        没有赔率情况下 不显示这个-->
                <div class="empty-badge" v-if="item['odds']">&nbsp;</div>
                <div class="title" v-if="item['odds']">全场 获胜者</div>
            </div>
            <section class="card-footer">
                <div class="card-odds-btn">
                    <div class="match-card-button"  @click.stop="isActive(item['odds'])"
                         :class="[setClass(item,0,1),setClass(item,0,2),setClass(item,0,3)]">
                        <div class="button-dark-border">
                            <div class="button-content">
<!--                                <div class="button-name">{{item['team'][0]['team_name']}}</div>-->
                                <div class="button-name">{{item['team'][_.findIndex(item['team'],{'pos':1})]['team_name']}}</div>
                                <div class="button-odds-content">
                                    <div class="odds-rising-icon"></div>
                                    <div class="btn-odds">
                                        <span v-if="setClass(item,0,2)!='btn-locked'">{{setOdds(item,0)}}</span>
                                    </div>
                                    <div class="odds-dropping-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="match-status">
                    <div :class="moment(item['start_time']).diff(moment()) <= 0 ? 'match-is-live' : 'match-is-early'">
                        <div class="status-icon"
                             :class="moment(item['start_time']).diff(moment()) <= 0 ? 'live-icon' : 'early-icon'"></div>
                        <div class="match-status-text">{{moment(item['start_time']).diff(moment()) <= 0 ? '滚盘中' : '未开始'}}</div>
                    </div>
                </div>
                <div class="card-odds-btn">
                    <div class="match-card-button"
                         :class="[setClass(item,1,1),
                         setClass(item,1,2),setClass(item,1,3)
                         ]">
                        <div class="button-dark-border">
                            <div class="button-content" @click.stop="">
                                <div class="button-name">{{item['team'][_.findIndex(item['team'],{'pos':2} )]['team_name']}}</div>
                                <div class="button-odds-content">
                                    <div class="odds-rising-icon"></div>
                                    <div class="btn-odds">
                                        <span v-if="setClass(item,1,2)!='btn-locked'">{{setOdds(item,1)}}</span>
                                    </div>
                                    <div class="odds-dropping-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </transition>
</template>

<script>
    // import _ from 'lodash';
    export default {
        name: "home-match-card",
        data() {
            return {}
        },
        methods: {//条用方法
            isActive:function(item){
                //方法1
                if(typeof item.checked == 'undefined') {
                    //全局创建
                    //Vue.set(item,'checked',true);
                    //局部创建
                    this.$set(item,'checked',true);
                    // console.log(item.text)

                }else{
                    item.checked = !item.checked;
                }
                //方法2
                this.$set(item,'checked',!item.checked);
            },
            // momentDiff(item, class1, class2) {
            //     return moment(item).diff(moment()) <= 0 ? class1 : class2;
            // },
            // momentDiff2(item) {
            //     return moment(item).diff(moment());
            // },

            setOdds(value, key) {
                if (Object.prototype.hasOwnProperty.call (value,'odds')) {
                    if (Object.prototype.hasOwnProperty.call (value['odds'],key)) {
                        return value['odds'][key]['odds'];
                    }
                    return '';
                }
                return '';
            },

            setClass(value, key, type) {
                //是否有赔率
                if (type === 1) {
                    return   Object.prototype.hasOwnProperty.call (value,'odds') ? '' : 'btn-over'
                //是否禁止下注
                } else if (type === 2) {

                    if (Object.prototype.hasOwnProperty.call (value,'odds')) {

                        if (Object.prototype.hasOwnProperty.call (value['odds'],key)) {
                            if (value['odds'][key]['status'] === 2 || value['odds'][key]['status'] === 5) {

                                return 'btn-locked';
                            } else {
                                return '';
                            }

                        } else {
                            return ''
                        }
                    }
                    return '';
                //    赔率上升还是降
                } else if (type === 3) {
                    if (Object.prototype.hasOwnProperty.call (value,'odds')) {

                        if (Object.prototype.hasOwnProperty.call (value['odds'],key)) {

                            return value['odds'][key]['tag'];

                        } else {
                            return ''
                        }
                    }

                    return '';
                }

            },
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

    .home-match-card .card-body .card-body-center .team-score .right-score {
        font-family: AlphaH;
        left: 0;
        margin-left: 24px;
    }

    .home-match-card .card-body .card-body-center .team-score .dash-symbol {
        color: #758bb5;
    }

    .odds-group-title {
        height: 17px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1rem;
        text-align: left;
    }

    .odds-group-title .empty-badge {
        width: 2px;
        height: 9px;
        background: #bacef1;
    }

    .odds-group-title .title {
        margin: 0 8px 0 4px;
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

    /*败*/
    .flag-lose {
        background-image: url('../../assets/images/svg/shibai.svg');
        color: #cfdefc;
    }

    /*胜*/
    .flag-win {
        background-image: url('../../assets/images/svg/shengli.svg');
        color: #ffeab8;
    }

    /*赔率下降样式*/
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

    /*没有赔率样式*/
    .btn-over {
        background: #27394c;
        box-shadow: none;
    }

    .btn-over .button-dark-border .button-content, .btn-over .button-dark-border {
        background: #1d2638 !important;
    }

    /*没有赔率样式*/

    /*封盘中样式btn-locked*/
    /*match-card-button btn-locked*/
    /*封盘中样式btn-locked*/


    /*赔率上升样式.match-card-button .btn-odds-rising*/
    .btn-odds-rising .odds-rising-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url('../../assets/images/svg/shangsheng.svg');
    }

    /*赔率上升样式.match-card-button .btn-odds-rising*/

    /*赔率下降样式.match-card-button .btn-odds-dropping*/
    .btn-odds-dropping .odds-dropping-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url('../../assets/images/svg/xiajiang.svg');
    }

    /*赔率下降样式.match-card-button .btn-odds-dropping*/


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

    .match-card-button .button-content {
        border-radius: 2px;
        background-color: #252f44;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 36px;
    }

    .match-card-button .button-content .button-name {
        font-size: 1rem;
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

    .match-card-button .button-content .button-odds-content .odds-dropping-icon, .match-card-button .button-content .button-odds-content .odds-rising-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 10px;
        height: 9px;
    }

    .btn-odds-rising .btn-odds {
        color: #00dc5e;
    }

    .btn-odds-dropping .btn-odds {
        color: #f22;
    }

    .match-card-button .button-content .button-odds-content .btn-odds {
        margin-left: 4px;
        margin-right: 4px;
    }

    .btn-locked .btn-odds {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 16px;
        height: 16px;
        background-image: url('../../assets/images/svg/suoding.svg');
    }

    .home-match-card .card-footer .match-status {
        width: 27.46667vw;
        font-size: 1rem;
        -ms-flex-item-align: start;
        align-self: flex-start;
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
        background-image: url('../../assets/images/svg/gunpanzhong.svg');
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
        background-image: url('../../assets/images/svg/weikaishi.svg');
    }

    .home-match-card .card-footer .match-status .match-is-early {
        color: #2197f4;
    }

    /*未开始样式*/
</style>