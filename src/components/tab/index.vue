<template>
    <div class="match-tab">
        <transition name="slide-fade">
            <section class="filter-matches" v-show="!gamePickerVisibility">
                <div class="vux-tab-wrap match-tab">
                    <div class="vux-tab-container">
                        <div class="vux-tab">
                            <div class="vux-tab-item"
                                 :style="homeMatchType === 2?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'"
                                 @click.stop="$store.dispatch('match/setHomeMatchType',2)">
                                今日
                                <span class="match-number">{{today}}</span>
                            </div>
                            <span class="column-line"></span>
                            <div class="vux-tab-item"
                                 :style="homeMatchType === 1?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'"
                                 @click.stop="$store.dispatch('match/setHomeMatchType',1)">
                                滚盘
                                <span class="match-number">{{rolling}}</span>
                            </div>
                            <span class="column-line"></span>
                            <div class="vux-tab-item"
                                 :style="homeMatchType === 3?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'"
                                 @click.stop="$store.dispatch('match/setHomeMatchType',3)">
                                赛前
                                <span class="match-number">58</span>
                            </div>
                            <span class="column-line"></span>
                            <div class="vux-tab-item"
                                 :style="homeMatchType === 4?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'"
                                 @click.stop="$store.dispatch('match/setHomeMatchType',4)">
                                已结束
                            </div>
                            <span class="column-line"></span>
                            <div class="vux-tab-ink-bar vux-tab-ink-bar-transition-forward"
                                 :style="'display: block; height: 22px; background-color: transparent; left: '+left+'%; right: '+right+'%'"
                            >
                                <!--                            :style="'display: block; height: 22px; background-color: transparent; left: '+left+'%; right: '+right+'%'"-->
                            </div>
                        </div>
                    </div>
                    <!--                <div class="vux-tab-ink-bar vux-tab-ink-bar-transition-forward" style="display: block; height: 22px; background-color: transparent; left: 50%; right: 25%;">&lt;!&ndash;&ndash;&gt;</div>-->
                </div>
                <div class="show-filter-games-btn" @click.stop="gamePickerVisibility = !gamePickerVisibility"></div>
            </section>
        </transition>
        <transition name="slide-fade">
            <section class="filter-games" v-show="gamePickerVisibility">
                <div class="hide-filter-games-btn" style="visibility: hidden;">&nbsp;&nbsp;
                </div>
                <div>游戏筛选</div>
                <div class="hide-filter-games-btn">
                    <div class="btn-content" @click.stop="gamePickerVisibility = !gamePickerVisibility">✓</div>
                </div>
            </section>
        </transition>


    </div>

</template>

<script>
    // import _ from 'lodash';
    import {mapGetters} from "vuex";

    export default {
        name: "match-tab",
        computed: {
            ...mapGetters([
                'homeMatchType',
                'matchList',
            ]),
            gamePickerVisibility: {
                get() {
                    return  this.$store.getters.gamePickerVisibility
                },
                set(value) {
                    this.$store.dispatch("game/toggleGamePickerVisibility", value)
                }
            }
        },
        data() {
            return {
                left: 0,
                right: 75,
                today: 0,
                rolling: 0,
                list: ['今日', '滚盘', '赛前', '已结束'],

                matchTypeList: [
                    {
                        type: "today",
                        value: 2
                    }, {
                        type: "live",
                        value: 1
                    }, {
                        type: "early",
                        value: 3
                    }, {
                        type: "results",
                        value: 4
                    }
                ]

            }
        },
        methods: {//条用方法
            // getMatchCount: function(n) {
            //
            //     var e = this.selectedGameList.length ?  this.selectedGameList : this.gameList;
            //     return  e.reduce(function(e, l) {
            //         return  Number(e) + Number(l[n])
            //     })
            // },

            // onItemClick(keyword, index) {
            //     console.log('on item click:', index)
            //     let barLeft = 0;
            //     document.getElementsByClassName('vux-tab-ink-bar')[0].style.right = '100%';
            //     for (let i = 0; i < this.list.length;) {
            //         if (document.getElementsByClassName('vux-tab-item')[i].innerText === keyword) {
            //             console.log('document.getElementsByClassName(\'vux-tab-item\')[' + index + '].offsetWidth = ' + document.getElementsByClassName('vux-tab-item')[i].offsetWidth)
            //             barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth / 2
            //             //为什么是22.5？因为底部bar长度为44px，这样做可以让bar的中心对齐tab-item的中心
            //             barLeft -= 22.5
            //             break;
            //         }
            //         barLeft += document.getElementsByClassName('vux-tab-item')[i].offsetWidth;
            //         i += 1;
            //     }
            //     document.getElementsByClassName('vux-tab-ink-bar')[0].style.left = (barLeft + 'px');
            // },


        },
        mounted() {//加载完毕后
            // this.options = _.remove(options, function(n) {
            //     return n % 2 == 0;
            // });
            // this.$store.state.match
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件

        },
        watch: {
            'matchList'(newValue) {

                this.today = 0;
                this.rolling = 0;
                Object.values(newValue).forEach((itme) => {
                    if (itme['status'] === 1 || itme['status'] === 2) {
                        this.today++;
                    }
                    if (itme['status'] === 2) {
                        this.rolling++;
                    }
                });

            },
            'homeMatchType'(newValue) {
                if (newValue === 0) {
                    this.left = 0;
                    this.right = 75;
                } else if (newValue === 1) {
                    this.left = 25;
                    this.right = 50;
                } else if (newValue === 3) {
                    this.left = 50;
                    this.right = 25;
                } else if (newValue === 4) {
                    this.left = 75;
                    this.right = 0;
                }
            }
            // 'this.$store.state.match'(newValue){
            //     console.log(newValue);
            //     this.today =0;
            //     this.rolling=0;
            //     newValue.forEach((itme) => {
            //         if(itme['status']===1 || itme['status']===2){
            //             this.today++;
            //         }
            //         if(itme['status']===2){
            //             this.rolling++;
            //         }
            //     });
            // }
        }
    }
</script>

<style scoped>
    .match-tab {
        position: relative;
        top: 0;
        left: 0;
        z-index: 4;
        overflow: hidden;
        width: 100%;
        height: 44px;
        background-color: #090c15;
        border-bottom: 1px solid #182031;
    }

    .match-tab .filter-matches {
        display: -ms-flexbox;
        display: flex;
    }

    .match-tab .filter-matches .match-tab {
        width: calc(100% - 50px);
    }

    .vux-tab-wrap {
        position: relative;
        padding-top: 44px;
    }

    .vux-tab-container {
        height: 44px;
        top: 0;
        left: 0;
        right: 0;
        overflow: hidden;
        position: absolute;
    }

    .match-tab .vux-tab {
        background-color: transparent;
        height: 43px;
    }

    .vux-tab {
        background-color: transparent;
        height: 43px !important;
    }

    .vux-tab {
        display: -ms-flexbox;
        display: flex;
        background-color: #fff;
        height: 44px;
        position: relative;
    }


    .vux-tab .vux-tab-item {
        display: block;
        -ms-flex: 1;
        flex: 1;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: linear-gradient(180deg, #e5e5e5, #e5e5e5, hsla(0, 0%, 90%, 0)) 0 100% no-repeat;
        background-size: 100% 1px;
        font-size: 14px;
        text-align: center;
        line-height: 44px;
        color: #666;
    }

    .vux-tab .vux-tab-item.vux-tab-selected {
        color: #04be02;
        border-bottom: 3px solid #04be02;
    }

    .match-tab .filter-matches .vux-tab-item {
        background: #090c15;
        font-size: 13.5px;
    }

    .match-tab .filter-matches .match-number {
        font-size: 12.5px;
        color: #758bb5;
    }

    .match-tab .filter-matches .column-line {
        width: 1px;
        background: hsla(218, 4%, 48%, .3);
        height: 20px;
        margin-top: 13px;
    }

    .match-tab .filter-matches .show-filter-games-btn {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 50px;
        height: 44px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7muLjmiI/nrZvpgIk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNTNEIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwRkQ4NTAiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iOTguMzQ5NDQlIiB5Mj0iOTguMzQ5NDQlIiBpZD0ibGluZWFyR3JhZGllbnQtMiI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNDNUZGM0QiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzAwRUE5OCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMTMsOSBDMTMsOC40NDc3MTUyNSAxMy40NDc3MTUzLDggMTQsOCBMMTgsOCBDMTguNTUyMjg0Nyw4IDE5LDguNDQ3NzE1MjUgMTksOSBMMjQsOSBDMjUuNjU2ODU0Miw5IDI3LDEwLjM0MzE0NTggMjcsMTIgTDI3LDIwIEMyNywyMS42NTY4NTQyIDI1LjY1Njg1NDIsMjMgMjQsMjMgTDgsMjMgQzYuMzQzMTQ1NzUsMjMgNSwyMS42NTY4NTQyIDUsMjAgTDUsMTIgQzUsMTAuMzQzMTQ1OCA2LjM0MzE0NTc1LDkgOCw5IEwxMyw5IFogTTgsMTEgQzcuNDQ3NzE1MjUsMTEgNywxMS40NDc3MTUzIDcsMTIgTDcsMjAgQzcsMjAuNTUyMjg0NyA3LjQ0NzcxNTI1LDIxIDgsMjEgTDI0LDIxIEMyNC41NTIyODQ3LDIxIDI1LDIwLjU1MjI4NDcgMjUsMjAgTDI1LDEyIEMyNSwxMS40NDc3MTUzIDI0LjU1MjI4NDcsMTEgMjQsMTEgTDgsMTEgWiIgaWQ9InBhdGgtMyI+PC9wYXRoPgogICAgICAgIDxmaWx0ZXIgeD0iLTM4LjYlIiB5PSItNDMuMyUiIHdpZHRoPSIxNzcuMyUiIGhlaWdodD0iMjEzLjMlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItNCI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMTQ5MDE5NjA4ICAgMCAwIDAgMCAwLjg1ODgyMzUyOSAgIDAgMCAwIDAgMC4yMjc0NTA5OCAgMCAwIDAgMC42IDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiIHJlc3VsdD0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjIiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjIiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMiI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMDM1Mjk0MTE3NiAgIDAgMCAwIDAgMC4wNDcwNTg4MjM1ICAgMCAwIDAgMCAwLjA4MjM1Mjk0MTIgIDAgMCAwIDEgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMiIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjIiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIyIj48L2ZlTWVyZ2VOb2RlPgogICAgICAgICAgICA8L2ZlTWVyZ2U+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjQuMDAwMDAwLCAtMTEwOC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Iua4uOaIj+etm+mAiSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAxMTA4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNmaWx0ZXItNCkiIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJldmVub2RkIiB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMyI+PC91c2U+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEsMTUgTDExLDE0IEMxMSwxMy40NDc3MTUzIDExLjQ0NzcxNTMsMTMgMTIsMTMgQzEyLjU1MjI4NDcsMTMgMTMsMTMuNDQ3NzE1MyAxMywxNCBMMTMsMTUgTDE0LDE1IEMxNC41NTIyODQ3LDE1IDE1LDE1LjQ0NzcxNTMgMTUsMTYgQzE1LDE2LjU1MjI4NDcgMTQuNTUyMjg0NywxNyAxNCwxNyBMMTMsMTcgTDEzLDE4IEMxMywxOC41NTIyODQ3IDEyLjU1MjI4NDcsMTkgMTIsMTkgQzExLjQ0NzcxNTMsMTkgMTEsMTguNTUyMjg0NyAxMSwxOCBMMTEsMTcgTDEwLDE3IEM5LjQ0NzcxNTI1LDE3IDksMTYuNTUyMjg0NyA5LDE2IEM5LDE1LjQ0NzcxNTMgOS40NDc3MTUyNSwxNSAxMCwxNSBMMTEsMTUgWiBNMTksMTYgQzE4LjQ0NzcxNTMsMTYgMTgsMTUuNTUyMjg0NyAxOCwxNSBDMTgsMTQuNDQ3NzE1MyAxOC40NDc3MTUzLDE0IDE5LDE0IEMxOS41NTIyODQ3LDE0IDIwLDE0LjQ0NzcxNTMgMjAsMTUgQzIwLDE1LjU1MjI4NDcgMTkuNTUyMjg0NywxNiAxOSwxNiBaIE0yMS4wMzIxMzcyLDE4LjAzMDM2NDIgQzIwLjQ3OTg1MjUsMTguMDMwMzY0MiAyMC4wMzIxMzcyLDE3LjU4MjY0OSAyMC4wMzIxMzcyLDE3LjAzMDM2NDIgQzIwLjAzMjEzNzIsMTYuNDc4MDc5NSAyMC40Nzk4NTI1LDE2LjAzMDM2NDIgMjEuMDMyMTM3MiwxNi4wMzAzNjQyIEMyMS41ODQ0MjIsMTYuMDMwMzY0MiAyMi4wMzIxMzcyLDE2LjQ3ODA3OTUgMjIuMDMyMTM3MiwxNy4wMzAzNjQyIEMyMi4wMzIxMzcyLDE3LjU4MjY0OSAyMS41ODQ0MjIsMTguMDMwMzY0MiAyMS4wMzIxMzcyLDE4LjAzMDM2NDIgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMUVGRkZBIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }

    .match-tab .vux-tab-ink-bar {
        background-color: transparent;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDZweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgNDYgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lj5HlhYnmlYjmnpw8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjUwJSIgY3k9Ijg3Ljg3Mjg2ODglIiBmeD0iNTAlIiBmeT0iODcuODcyODY4OCUiIHI9Ijk0LjgxOTc3OTglIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNTAwMDAwLDAuODc4NzI5KSxzY2FsZSgwLjQ3ODI2MSwxLjAwMDAwMCksc2NhbGUoMS4wMDAwMDAsMC41NTIyNDQpLHRyYW5zbGF0ZSgtMC41MDAwMDAsLTAuODc4NzI5KSIgaWQ9InJhZGlhbEdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMDBBMkM2IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMwMTk4QkEiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC40Ij4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3LjAwMDAwMCwgLTE5NjQuMDAwMDAwKSIgZmlsbD0idXJsKCNyYWRpYWxHcmFkaWVudC0xKSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSLlj5HlhYnmlYjmnpwiIHg9IjI3IiB5PSIxOTY0IiB3aWR0aD0iNDYiIGhlaWdodD0iMjIiIHJ4PSIxMSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
        background-position: 50%;
    }

    .vux-tab-ink-bar-transition-forward {
        transition: right .3s cubic-bezier(.35, 0, .25, 1), left .3s cubic-bezier(.35, 0, .25, 1) .09s;
    }

    .vux-tab-ink-bar {
        position: absolute;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #04be02;
        text-align: center;
    }


    /*游戏列表*/

    .match-tab .filter-games {
        width: 100%;
        height: 43px;
        padding-right: 8px;
        padding-left: 8px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        background-color: #090c15;
        font-size: 1.3rem;
    }

    .match-tab .filter-games .hide-filter-games-btn .btn-content, .match-tab .filter-games .hide-filter-games-btn {
        border-radius: 2px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .match-tab .filter-games .hide-filter-games-btn {
        width: 48px;
        height: 20.001px;
        background: linear-gradient(90deg, #0689f3, #019bbd);
    }


    .match-tab .filter-games .hide-filter-games-btn .btn-content {
        width: calc(100% - 2px);
        height: 18px;
        background: #151b29;
        color: #1ee8e7;
    }

    .match-tab .vux-tab-ink-bar:after {
        content: " ";
        width: 26px;
        height: 2px;
        background: #1ffdfa;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
