<template>
    <div  class="scroll-list" >
        <div  class="__vuescroll"
             style="height: 100%; width: 100%; padding: 0px; position: relative;overflow: hidden" ref="scroll">
            <div class="__panel __slide">
                <div class="__refresh" style="margin-top: -50px">
                    <div  class="refresh-text">{{pulldownMsg}}</div>
                </div>
                <div>
                    <div   class="home-match-card" v-for="itme in match" :key="itme.id" >
                        <section  class="card-header"><img   width="20px"
                                                                             data-src="//www.nmgdjkj.com//file/5155ce2645f2486533bd28f9e9c2026e.svg"
                                                                             src="//www.nmgdjkj.com//file/5155ce2645f2486533bd28f9e9c2026e.svg"
                                                                             lazy="loaded">
                            <div  class="tournament-name">
                                {{itme.tournament_name}}
                            </div>
                            <div  class="match-round">&nbsp;/ {{itme.round}}</div>
                            <div  class="play-count">
                                +73
                            </div>
                        </section>
                        <section  class="card-body">
                            <div  class="card-body-team">
                                <img class="team-logo" :src="'//www.nmgdjkj.com/'+itme['team'][1]['team_logo']" lazy="loaded">
                            </div>
                            <div  class="card-body-center">
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSI3OHB4IiB2aWV3Qm94PSIwIDAgMjQgNzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ljaHniYfljLrliIblibLlt6Y8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjEwMCUiIGN5PSI1MCUiIGZ4PSIxMDAlIiBmeT0iNTAlIiByPSI5OC44MDMyODc2JSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwwLjUwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC4zMDAwMDApLHJvdGF0ZSgtMTc5Ljk5OTk5OCksc2NhbGUoMS4wMDAwMDAsMS42MzI1MTgpLHRyYW5zbGF0ZSgtMS4wMDAwMDAsLTAuNTAwMDAwKSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEMxMjFGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQTI1MzgiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjMiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEyLjAwMDAwMCwgLTE5NjUuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLljaHniYfljLrliIblibLlt6YiIHg9IjExMiIgeT0iMTk2NCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjgwIj48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" class="center-left">



                                <div  class="team-score" v-if="momentDiff2(itme.start_time)<=0">
                                    <div  class="score left-score">0</div>
                                    <div  class="dash-symbol">-</div>
                                    <div  class="score right-score">1</div>
                                </div>
                                <div  class="start-time" v-else>{{itme.start_time.substring(itme.start_time.length-8)}}

                                </div>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSI3OHB4IiB2aWV3Qm94PSIwIDAgMjQgNzgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ljaHniYfljLrliIblibLlj7M8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjEwMCUiIGN5PSI1MCUiIGZ4PSIxMDAlIiBmeT0iNTAlIiByPSI5OC44MDMyODc2JSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwwLjUwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC4zMDAwMDApLHJvdGF0ZSgtMTc5Ljk5OTk5OCksc2NhbGUoMS4wMDAwMDAsMS42MzI1MTgpLHRyYW5zbGF0ZSgtMS4wMDAwMDAsLTAuNTAwMDAwKSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMEMxMjFGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxQTI1MzgiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjMiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2LjAwMDAwMCwgLTE5NjUuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLljaHniYfljLrliIblibLlj7MiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4OC4wMDAwMDAsIDIwMDQuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xODguMDAwMDAwLCAtMjAwNC4wMDAwMDApICIgeD0iMTc2IiB5PSIxOTY0IiB3aWR0aD0iMjQiIGhlaWdodD0iODAiPjwvcmVjdD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                                     class="center-right">
                            </div>
                            <div  class="card-body-team">
                                <img class="team-logo" :src="'//www.nmgdjkj.com/'+itme['team'][2]['team_logo']" lazy="loaded">
                            </div>
                        </section>
                        <div  class="odds-group-title">
                            <div class="empty-badge">&nbsp;</div>
                            <div class="title">全场 获胜者</div>
                        </div>
                        <section  class="card-footer">
                            <div  class="card-odds-btn" >
                                <div   class="match-card-button btn-odds-rising">
                                    <div  class="button-dark-border">
                                        <div  class="button-content">
                                            <div  class="button-name">RW侠</div>
                                            <div  class="button-odds-content">
                                                <div  class="odds-rising-icon"></div>
                                                <div  class="btn-odds">
                                                    <span>6.21</span>
                                                </div>
                                                <div  class="odds-dropping-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  class="match-status">
                                <div   :class="momentDiff(itme.start_time,'match-is-live','match-is-early')">
                                    <div  class="status-icon" :class="momentDiff(itme.start_time,'live-icon','early-icon')"></div>
                                    <div  class="match-status-text">滚盘中</div>
                                </div>
                            </div>
                            <div  class="card-odds-btn">
                                <div   class="match-card-button btn-odds-dropping">
                                    <div  class="button-dark-border">
                                        <div  class="button-content">
                                            <div  class="button-name">VG</div>
                                            <div  class="button-odds-content">
                                                <div  class="odds-rising-icon"></div>
                                                <div  class="btn-odds">
                                                    <span>1.10</span>
                                                </div>
                                                <div  class="odds-dropping-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div  class="empty-list" style="display: none">
                    选手正在赛前准备，请耐心等候...
                    <div  class="base-button empty-btn button--dark">
                        <div class="button-border">
                            <button type="submit" class="button-content">去参加赛前竞猜</button>
                        </div>
                    </div>
                </div>
                <div  style="height: 800px;"></div>
                <div style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;">
                    <object type="text/html" tabindex="-1" data="about:blank"
                            style="display: block; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; border: none; padding: 0px; margin: 0px; opacity: 0; z-index: -1000; pointer-events: none;"></object>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";
    export default {
        name: "scroll-list",
        data() {
            return {
                scroll: '',
                pulldownMsg: '下拉刷新',
                match:'',

                // styleObject: {
                //     'margin-top': '-50px',
                //     // 'display': 'block'
                // }
            }
        },
        methods: {//条用方法
            momentDiff(time,class1,class2){
               return  moment(time).diff(moment())<=0?class1:class2;
            },
            momentDiff2(time){
                return  moment(time).diff(moment());
            },

            matchZl(value){
                console.log(typeof value);

                const bo = new Array();



                for (var i in value) {
                    console.log('键名：', i);
                    console.log('键值：', value[i]);

                    for (var t in value[i]['odds']) {
                        console.log('键名：', t);
                        console.log('键值：', value[i]['odds'][t]);
                        if(bo.indexOf(value[i]['odds'][t]['match_stage'])){
                            console.log('不存在');
                            bo.push(value[i]['odds'][t]['match_stage']);
                            console.log('不存在');
                            console.log(bo);
                        }


                    }



                }
            //    odds[match_stage['全天']][sort_index][]
            //     value.forEach(function(e){
            //
            //     });


            }



        },
        mounted() {//加载完毕后
            this.$nextTick(() => {
                this.scroll = new this.$BScroll(this.$refs.scroll,{       //初始化better-scroll
                    probeType:1,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true,   //是否派发click事件
                    mouseWheel: true,
                    tap: true,
                    scrollY:true,
                    scrollX:false,
                    scrollbar: {
                        fade: true,
                        interactive: false // 1.8.0 新增
                    },
                    pullDownRefresh: {
                        threshold: 50, // 下拉距离超过30px触发pullingDown事件
                        stop: 50 // 回弹停留在距离顶部20px的位置
                    }

                });
                // 滑动过程中事件
                this.scroll.on('pullingDown',()=>{
                        console.log(123);
                        // this.styleObject.display ='block';
                        this.pulldownMsg = '刷新中..';



                });
                const _this = this;
                //滑动结束松开事件
                this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
                    // _this.pulldownMsg = '刷新中..';
                    // _this.scroll.finishPullUp();
                    if(pos.y > 50){
                        setTimeout(()=>{
                            _this.$get(_this.$api.match).then((res)=>{
                                // console.log(res);
                                //刷新数据
                                _this.matchZl(res.datas);
                                // _this.match = _this.matchZl(res.datas);
                                // console.log(moment(_this.match[0]['start_time']).diff(moment()));
                                //恢复刷新提示文本值
                                _this.pulldownMsg = '下拉刷新';
                            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
                               _this.scroll.finishPullDown();
                                //刷新成功后提示
                                // _this.refreshalert();
                                //刷新列表后，重新计算滚动区域高度
                                _this.scroll.refresh();
                            })
                        },1000)
                    }
                })
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
    .home-page .scroll-list {
        height: calc(100% - 36px);
        padding-left: 8px;
        padding-right: 8px;
    }

    .__vuescroll .__refresh, .__vuescroll .__load {
        position: absolute;
        width: 100%;
        color: black;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .home-page .refresh-text {
        font-size: 1.4rem;
        color: #bacef1;
    }

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

    img {
        pointer-events: none;
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
        background-image: url('../assets/images/svg/shibai.svg');
        color: #cfdefc;
    }
    /*胜*/
    .flag-win {
        background-image: url('../assets/images/svg/shengli.svg');
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
        background: linear-gradient(90deg,#298a97,#317699);
        box-shadow: 0 0 4px 0 rgba(14,20,34,.5);
    }
    /*封盘中样式btn-locked*/
    /*match-card-button btn-locked*/
    /*封盘中样式btn-locked*/


    /*赔率上升样式.match-card-button .btn-odds-rising*/
    .btn-odds-rising .odds-rising-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6auYPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iIzAwREM1RSI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbpq5giIHBvaW50cz0iNjMgMTA3NCA2OCAxMDgzIDYzIDEwODEgNTggMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    /*赔率上升样式.match-card-button .btn-odds-rising*/

    /*赔率下降样式.match-card-button .btn-odds-dropping*/
    .btn-odds-dropping .odds-dropping-icon {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
        animation-name: flash;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMCA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW5L2OPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI0LjAwMDAwMCwgLTEwNzQuMDAwMDAwKSIgZmlsbD0iI0ZGMjIyMiI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLmipXms6jpop3lj5jljJbkvY4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5LjAwMDAwMCwgMTA3OC41MDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTI5LjAwMDAwMCwgLTEwNzguNTAwMDAwKSAiIHBvaW50cz0iMjkgMTA3NCAzNCAxMDgzIDI5IDEwODEgMjQgMTA4MyI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    /*赔率下降样式.match-card-button .btn-odds-dropping*/


    .match-card-button .button-dark-border {
        background: linear-gradient(#323e57,#1d2639);
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
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOXB4IiBoZWlnaHQ9IjExcHgiIHZpZXdCb3g9IjAgMCA5IDExIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5oqV5rOo6aKd5Y+Y5YyW6ZSB5a6aPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9Iumbt+ernuaKgDIuMC1jb3B5IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyLjAwMDAwMCwgLTEwNzMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmipXms6jpop3lj5jljJbplIHlrpoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkyLjAwMDAwMCwgMTA3My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LDMuNSBDNywyLjExOTI4ODEzIDUuODgwNzExODcsMSA0LjUsMSBDMy4xMTkyODgxMywxIDIsMi4xMTkyODgxMyAyLDMuNSBMMiw1LjUgTDEsNS41IEwxLDMuNSBDMSwxLjU2NzAwMzM4IDIuNTY3MDAzMzgsMCA0LjUsMCBDNi40MzI5OTY2MiwwIDgsMS41NjcwMDMzOCA4LDMuNSBMOCw1LjUgTDcsNS41IEw3LDMuNSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMxRUZGRkEiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjUsNSBMNy41LDUgQzguMzI4NDI3MTIsNSA5LDUuNjcxNTcyODggOSw2LjUgTDksOS41IEM5LDEwLjMyODQyNzEgOC4zMjg0MjcxMiwxMSA3LjUsMTEgTDEuNSwxMSBDMC42NzE1NzI4NzUsMTEgLTMuNDI2MzYxNDdlLTE2LDEwLjMyODQyNzEgLTQuNDQwODkyMWUtMTYsOS41IEwwLDYuNSBDLTEuMDE0NTMwNjNlLTE2LDUuNjcxNTcyODggMC42NzE1NzI4NzUsNSAxLjUsNSBaIE0yLDYgQzEuNDQ3NzE1MjUsNiAxLDYuNDQ3NzE1MjUgMSw3IEwxLDkgQzEsOS41NTIyODQ3NSAxLjQ0NzcxNTI1LDEwIDIsMTAgTDcsMTAgQzcuNTUyMjg0NzUsMTAgOCw5LjU1MjI4NDc1IDgsOSBMOCw3IEM4LDYuNDQ3NzE1MjUgNy41NTIyODQ3NSw2IDcsNiBMMiw2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS0xMCIgZmlsbD0iIzFFRkZGQSIgeD0iMyIgeT0iNyIgd2lkdGg9IjMiIGhlaWdodD0iMSIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
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
    /*未开始样式*/
</style>