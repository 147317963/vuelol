<template>
    <div style="padding-left: 8px;padding-right: 8px;">
        <div class="home-match-card" v-for="itme  in this.$store.state.match" :key="itme['id']">
            <section class="card-header">
                <img style="width: 20px"  src="//www.nmgdjkj.com//file/5155ce2645f2486533bd28f9e9c2026e.svg">
                <div class="tournament-name">
                    {{itme.tournament_name}}
                </div>
                <div class="match-round">&nbsp;/ {{itme.round.toUpperCase()}}</div>
                <div class="play-count">
                    +73
                </div>
            </section>
            <section class="card-body">
                <div class="card-body-team">
                    <img class="team-logo" :src="'//www.nmgdjkj.com/'+itme['team'][0]['team_logo']">
                </div>
                <div class="card-body-center">
                    <!--                                团队1 logo-->
                    <img src="../../assets/images/svg/kapian_you.svg"
                         class="center-left">
                    <!--                                比分-->
                    <div class="team-score" v-if="momentDiff2(itme['start_time'])<=0">
                        <div class="score left-score">0</div>
                        <div class="dash-symbol">-</div>
                        <div class="score right-score">1</div>
                    </div>
                    <!--                                开始时间-->
                    <div class="start-time" v-else>{{itme.start_time.substr(11,5)}}

                    </div>
                    <!--                                团队2 logo-->
                    <img src="../../assets/images/svg/kapian_zuo.svg"
                         class="center-right">
                </div>
                <div class="card-body-team">
                    <img class="team-logo" :src="'//www.nmgdjkj.com/'+itme['team'][1]['team_logo']">
                </div>
            </section>

            <!--                        没有赔率情况下 不可以操作-->
            <div class="odds-group-title">
                <div class="empty-badge" v-if="itme['odds']">&nbsp;</div>
                <div class="title" v-if="itme['odds']">全场 获胜者</div>
            </div>
            <section class="card-footer">
                <div class="card-odds-btn">
                    <div class="match-card-button"
                         :class="[setClass(itme,0,1),setClass(itme,0,2),setClass(itme,0,3)]">
                        <div class="button-dark-border">
                            <div class="button-content">
                                <div class="button-name">{{itme['team'][0]['team_name']}}</div>
                                <div class="button-odds-content">
                                    <div class="odds-rising-icon"></div>
                                    <div class="btn-odds">
                                        <span v-if="setClass(itme,0,2)!='btn-locked'">{{setOdds(itme,0)}}</span>
                                    </div>
                                    <div class="odds-dropping-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="match-status">
                    <div :class="momentDiff(itme['start_time'],'match-is-live','match-is-early')">
                        <div class="status-icon"
                             :class="momentDiff(itme['start_time'],'live-icon','early-icon')"></div>
                        <div class="match-status-text">{{momentDiff(itme['start_time'],'滚盘中','未开始')}}</div>
                    </div>
                </div>
                <div class="card-odds-btn">
                    <div class="match-card-button"
                         :class="[setClass(itme,1,1),setClass(itme,1,2),setClass(itme,1,3)]">
                        <div class="button-dark-border">
                            <div class="button-content">
                                <div class="button-name">{{itme['team'][1]['team_name']}}</div>
                                <div class="button-odds-content">
                                    <div class="odds-rising-icon"></div>
                                    <div class="btn-odds">
                                        <span v-if="setClass(itme,1,2)!='btn-locked'">{{setOdds(itme,1)}}</span>
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
</template>

<script>
    import moment from "moment";
    // import _ from 'lodash';
    export default {
        name: "home-match-card",
        data() {
            return {

            }
        },
        methods: {//条用方法
            postListener() {

                this.$socket.emit("match");

            },
            momentDiff(itme, class1, class2) {
                return moment(itme).diff(moment()) <= 0 ? class1 : class2;
            },
            momentDiff2(itme) {
                return moment(itme).diff(moment());
            },

            setOdds(value, key) {
                if (value.hasOwnProperty('odds')) {
                    if (value['odds'].hasOwnProperty(key)) {
                        return value['odds'][key]['odds'];
                    }
                    return '';
                }
                return '';
            },

            setClass(value, key, type) {
                //是否有赔率
                if (type === 1) {
                    return value.hasOwnProperty('odds') ? '' : 'btn-over'

                } else if (type === 2) {

                    if (value.hasOwnProperty('odds')) {

                        if (value['odds'].hasOwnProperty(key)) {
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
                } else if (type === 3) {
                    if (value.hasOwnProperty('odds')) {

                        if (value['odds'].hasOwnProperty(key)) {

                            return value['odds'][key]['tag'];

                        } else {
                            return ''
                        }
                    }

                    return '';
                }

            },
            matchCallback(data) {

                data.forEach((item, index) => {
                    if(!this.$store.state.match.hasOwnProperty(index)){
                        return;
                    }
                    // this.$set(this.match,[index]['status'],item['status']);
                    this.$store.state.match[index]['status'] = item['status'];

                    if (item.hasOwnProperty('odds')) {
                        item['odds'].forEach((odds, o) => {
                            this.$store.state.match[index]['odds'][o]['status'] = odds['status'];
                            // this.$set(this.match,[index]['odds'][o],odds);
                            if (Number(this.$store.state.match[index]['odds'][o]['odds']) > Number(odds['odds'])) {

                                console.log(this.$store.state.match[index]['odds'][o]['odds'],odds['odds']);
                                this.$store.state.match[index]['odds'][o]['tag'] = 'btn-odds-dropping';

                                setTimeout(() => {
                                    this.$store.state.match[index]['odds'][o]['tag'] = ''
                                }, 6000);
                            } else if (Number(this.$store.state.match[index]['odds'][o]['odds']) < Number(odds['odds'])) {

                                console.log(this.$store.state.match[index]['odds'][o]['odds'],odds['odds']);
                                this.$store.state.match[index]['odds'][o]['tag'] = 'btn-odds-rising';
                                setTimeout(() => {
                                    this.$store.state.match[index]['odds'][o]['tag'] = ''
                                }, 6000);
                            }
                            this.$store.state.match[index]['odds'][o]['odds'] = odds['odds'];
                            this.$TweenLite.to(this.$store.state.match[index]['odds'][o], 0.3, {odds: odds['odds']});
                        });
                    }


                    if (item.hasOwnProperty('team')) {
                        item['team'].forEach((team, t) => {
                            this.$store.state.match[index]['team'][t] = team;
                        });
                    }


                })

            },
            // postListener() {
            //
            //     this.$socket.emit("match", this.matchPost);
            //
            // },
            // upMatch() {
            //
            //
            //     // console.log(Object.keys(this.matchPost));
            //     const _this = this;
            //     this.match.forEach((item, index) => {
            //
            //         let team_id = [];
            //         let odds_id = [];
            //
            //         Object.keys(item).filter((key) => ['id'].includes(key)).forEach((key) => {
            //             // console.log(key);
            //             if (!_this.matchPost[index]) {
            //                 _this.matchPost.push({id: item[key]});
            //             }
            //             // this.matchPost[index][key] = item[key]
            //         });
            //
            //         if (item.hasOwnProperty('odds')) {
            //             item['odds'].forEach((odds, o) => {
            //                 Object.keys(odds).filter((key) => ['id'].includes(key)).forEach((key) => {
            //                     odds_id.push({id: odds[key]});
            //                     _this.matchPost[index]['odds'] = odds_id;
            //
            //                 })
            //             });
            //         }
            //
            //         if (item['team']) {
            //             item['team'].forEach((team, t) => {
            //                 Object.keys(team).filter((key) => ['id'].includes(key)).forEach((key) => {
            //                     team_id.push({id: team[key]});
            //                     _this.matchPost[index]['team'] = team_id;
            //
            //                 })
            //             })
            //
            //         }
            //
            //
            //     });
            //
            //     console.log(this.matchPost);
            //
            // },


        },
        mounted() {//加载完毕后
            setInterval(() => {
                this.postListener()
            }, 8000)
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        sockets: {
            //查看socket是否渲染成功
            connect() {
                console.log("链接成功");
            },
            disconnect() {
                console.log("断开链接");
            },//检测socket断开链接
            reconnect() {
                console.log("重新链接");
            },
            //客户端接收后台传输的socket事件
            matchCallback(data) {
                this.matchCallback(data);

            },

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