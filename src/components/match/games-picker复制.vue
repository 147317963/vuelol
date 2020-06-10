<template>
    <!--    <collapse-transition>-->
    <transition mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">

        <div class="vux-popup-dialog games-picker vux-popup-top vux-popup-show"
             v-show="gameMenuShow===true">




                <div class="vux-checker-box checker-content">

                    <template v-for="(itme,index)  in gameList">
                        <div class="vux-checker-item vux-tap-active default-checker-item" :class="itme['selected']?'selected-checker-item':''"
                             v-if="itme.status===1"
                             :key="itme['id']"
                             @click.stop="$store.dispatch('game/updateGmaeList',{data:Object.assign(itme, {selected:!itme.selected}),index})"
                        >
                            <div style="height: 2px;">&nbsp;</div>
                            <div class="games-info">
                                <img class="games-icon"
                                     v-lazy="configList.length ? configList[_.findIndex(configList,{'name':'img_url'})]['value']+itme['game_logo']:''">
                                <div>{{itme['game_name']}}</div>
                            </div>
                            <div class="selected-checker-light"></div>
                        </div>
                    </template>


                </div>


        </div>
    </transition>

    <!--    </collapse-transition>-->
</template>

<script>
    // import CollapseTransition from '@/utils/collapse-transition'; // 本人将collapse-transition.js 放置在工具类utils文件夹
    import BetterScroll from '@/components/BetterScroll';
    import { mapGetters } from 'vuex'

    export default {
        name: "games-picker",

        components: {//注册组件
            BetterScroll,
        },
        computed: {
            ...mapGetters([
                'configList',
                'gameList',
                'gameMenuShow',

            ])
        },
        data() {
            return {

            }
        },
        methods: {//条用方法


        },
        mounted() {//加载完毕后


        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        watch: {}
    }
</script>

<style scoped>
    .__refresh {
        position: absolute;
        width: 100%;
        color: black;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
    }

    .__refresh .refresh-text {
        font-size: 1.4rem;
        color: #bacef1;
    }

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

    .vux-popup-dialog.vux-popup-top {
        width: 100%;
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
    }

    .games-picker {
        position: absolute;
        margin-top: 45px;
        height: calc(100% - 45px);
        z-index: 3;
        background-color: #0c121f;
        /*overflow: hidden;*/
    }

    .games-picker .checker-content {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 4px;
    }


    .games-picker .checker-content .default-checker-item {
        width: calc((100vw - 32px) / 3);
        height: calc((100vw - 32px) / 3);
        margin: 4px;
        padding: 8px;
        text-align: center;
        font-size: 1.2rem;
        background: #151b29;
        color: #526585;
        border-radius: 4px;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .games-picker .checker-content .default-checker-item .games-info, .games-picker .checker-content .default-checker-item {
        -ms-flex-direction: column;
        flex-direction: column;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .games-picker .checker-content .selected-checker-item {
        background: #1d2638;
        color: #bacef1;
        transition: all .2s ease-out;
    }

    .games-picker .checker-content .default-checker-item .games-info {
        -ms-flex-pack: center;
        justify-content: center;
    }

    .checker-content .selected-checker-item .games-info > .games-icon {
        filter: unset;
        transition: filter .2s ease-out;
    }


    .games-picker .checker-content .default-checker-item .selected-checker-light {
        width: 26px;
        height: 2px;
        background: #232d42;
    }

    .games-picker .checker-content .default-checker-item .games-info .games-icon {
        margin: 8px;
        background-size: cover;
        filter: grayscale(1) brightness(.8);
        background-position: 50%;
        background-repeat: no-repeat;
        width: 28px;
        height: 28px;
    }

    .games-picker .checker-content .default-checker-item .games-info .all-games-icon {
        margin: 6px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjhweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjggMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5hbGxAMng8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbuWIh+WbviIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY2LjAwMDAwMCwgLTY2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iYWxsIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ni4wMDAwMDAsIDY2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTg3MDk2NzcsMTAuMTE2MTI5IEM2LjE5MDM1MDgzLDEwLjExNjEyOSA1LjA1ODA2NDUyLDguOTgzODQyNzIgNS4wNTgwNjQ1Miw3LjU4NzA5Njc3IEM1LjA1ODA2NDUyLDYuMTkwMzUwODMgNi4xOTAzNTA4Myw1LjA1ODA2NDUyIDcuNTg3MDk2NzcsNS4wNTgwNjQ1MiBDOC45ODM4NDI3Miw1LjA1ODA2NDUyIDEwLjExNjEyOSw2LjE5MDM1MDgzIDEwLjExNjEyOSw3LjU4NzA5Njc3IEMxMC4xMTYxMjksOC45ODM4NDI3MiA4Ljk4Mzg0MjcyLDEwLjExNjEyOSA3LjU4NzA5Njc3LDEwLjExNjEyOSBaIE03LjU4NzA5Njc3LDguODUxNjEyOSBDOC4yODU0Njk3NSw4Ljg1MTYxMjkgOC44NTE2MTI5LDguMjg1NDY5NzUgOC44NTE2MTI5LDcuNTg3MDk2NzcgQzguODUxNjEyOSw2Ljg4ODcyMzggOC4yODU0Njk3NSw2LjMyMjU4MDY1IDcuNTg3MDk2NzcsNi4zMjI1ODA2NSBDNi44ODg3MjM4LDYuMzIyNTgwNjUgNi4zMjI1ODA2NSw2Ljg4ODcyMzggNi4zMjI1ODA2NSw3LjU4NzA5Njc3IEM2LjMyMjU4MDY1LDguMjg1NDY5NzUgNi44ODg3MjM4LDguODUxNjEyOSA3LjU4NzA5Njc3LDguODUxNjEyOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy45MDk2Nzc0LDEwLjExNjEyOSBDMTIuNTEyOTMxNSwxMC4xMTYxMjkgMTEuMzgwNjQ1Miw4Ljk4Mzg0MjcyIDExLjM4MDY0NTIsNy41ODcwOTY3NyBDMTEuMzgwNjQ1Miw2LjE5MDM1MDgzIDEyLjUxMjkzMTUsNS4wNTgwNjQ1MiAxMy45MDk2Nzc0LDUuMDU4MDY0NTIgQzE1LjMwNjQyMzQsNS4wNTgwNjQ1MiAxNi40Mzg3MDk3LDYuMTkwMzUwODMgMTYuNDM4NzA5Nyw3LjU4NzA5Njc3IEMxNi40Mzg3MDk3LDguOTgzODQyNzIgMTUuMzA2NDIzNCwxMC4xMTYxMjkgMTMuOTA5Njc3NCwxMC4xMTYxMjkgWiBNMTMuOTA5Njc3NCw4Ljg1MTYxMjkgQzE0LjYwODA1MDQsOC44NTE2MTI5IDE1LjE3NDE5MzUsOC4yODU0Njk3NSAxNS4xNzQxOTM1LDcuNTg3MDk2NzcgQzE1LjE3NDE5MzUsNi44ODg3MjM4IDE0LjYwODA1MDQsNi4zMjI1ODA2NSAxMy45MDk2Nzc0LDYuMzIyNTgwNjUgQzEzLjIxMTMwNDQsNi4zMjI1ODA2NSAxMi42NDUxNjEzLDYuODg4NzIzOCAxMi42NDUxNjEzLDcuNTg3MDk2NzcgQzEyLjY0NTE2MTMsOC4yODU0Njk3NSAxMy4yMTEzMDQ0LDguODUxNjEyOSAxMy45MDk2Nzc0LDguODUxNjEyOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC4yMzIyNTgxLDEwLjExNjEyOSBDMTguODM1NTEyMSwxMC4xMTYxMjkgMTcuNzAzMjI1OCw4Ljk4Mzg0MjcyIDE3LjcwMzIyNTgsNy41ODcwOTY3NyBDMTcuNzAzMjI1OCw2LjE5MDM1MDgzIDE4LjgzNTUxMjEsNS4wNTgwNjQ1MiAyMC4yMzIyNTgxLDUuMDU4MDY0NTIgQzIxLjYyOTAwNCw1LjA1ODA2NDUyIDIyLjc2MTI5MDMsNi4xOTAzNTA4MyAyMi43NjEyOTAzLDcuNTg3MDk2NzcgQzIyLjc2MTI5MDMsOC45ODM4NDI3MiAyMS42MjkwMDQsMTAuMTE2MTI5IDIwLjIzMjI1ODEsMTAuMTE2MTI5IFogTTIwLjIzMjI1ODEsOC44NTE2MTI5IEMyMC45MzA2MzEsOC44NTE2MTI5IDIxLjQ5Njc3NDIsOC4yODU0Njk3NSAyMS40OTY3NzQyLDcuNTg3MDk2NzcgQzIxLjQ5Njc3NDIsNi44ODg3MjM4IDIwLjkzMDYzMSw2LjMyMjU4MDY1IDIwLjIzMjI1ODEsNi4zMjI1ODA2NSBDMTkuNTMzODg1MSw2LjMyMjU4MDY1IDE4Ljk2Nzc0MTksNi44ODg3MjM4IDE4Ljk2Nzc0MTksNy41ODcwOTY3NyBDMTguOTY3NzQxOSw4LjI4NTQ2OTc1IDE5LjUzMzg4NTEsOC44NTE2MTI5IDIwLjIzMjI1ODEsOC44NTE2MTI5IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTg3MDk2NzcsMTYuNDM4NzA5NyBDNi4xOTAzNTA4MywxNi40Mzg3MDk3IDUuMDU4MDY0NTIsMTUuMzA2NDIzNCA1LjA1ODA2NDUyLDEzLjkwOTY3NzQgQzUuMDU4MDY0NTIsMTIuNTEyOTMxNSA2LjE5MDM1MDgzLDExLjM4MDY0NTIgNy41ODcwOTY3NywxMS4zODA2NDUyIEM4Ljk4Mzg0MjcyLDExLjM4MDY0NTIgMTAuMTE2MTI5LDEyLjUxMjkzMTUgMTAuMTE2MTI5LDEzLjkwOTY3NzQgQzEwLjExNjEyOSwxNS4zMDY0MjM0IDguOTgzODQyNzIsMTYuNDM4NzA5NyA3LjU4NzA5Njc3LDE2LjQzODcwOTcgWiBNNy41ODcwOTY3NywxNS4xNzQxOTM1IEM4LjI4NTQ2OTc1LDE1LjE3NDE5MzUgOC44NTE2MTI5LDE0LjYwODA1MDQgOC44NTE2MTI5LDEzLjkwOTY3NzQgQzguODUxNjEyOSwxMy4yMTEzMDQ0IDguMjg1NDY5NzUsMTIuNjQ1MTYxMyA3LjU4NzA5Njc3LDEyLjY0NTE2MTMgQzYuODg4NzIzOCwxMi42NDUxNjEzIDYuMzIyNTgwNjUsMTMuMjExMzA0NCA2LjMyMjU4MDY1LDEzLjkwOTY3NzQgQzYuMzIyNTgwNjUsMTQuNjA4MDUwNCA2Ljg4ODcyMzgsMTUuMTc0MTkzNSA3LjU4NzA5Njc3LDE1LjE3NDE5MzUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMDBCRUZFIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTA5Njc3NCwxNi40Mzg3MDk3IEMxMi41MTI5MzE1LDE2LjQzODcwOTcgMTEuMzgwNjQ1MiwxNS4zMDY0MjM0IDExLjM4MDY0NTIsMTMuOTA5Njc3NCBDMTEuMzgwNjQ1MiwxMi41MTI5MzE1IDEyLjUxMjkzMTUsMTEuMzgwNjQ1MiAxMy45MDk2Nzc0LDExLjM4MDY0NTIgQzE1LjMwNjQyMzQsMTEuMzgwNjQ1MiAxNi40Mzg3MDk3LDEyLjUxMjkzMTUgMTYuNDM4NzA5NywxMy45MDk2Nzc0IEMxNi40Mzg3MDk3LDE1LjMwNjQyMzQgMTUuMzA2NDIzNCwxNi40Mzg3MDk3IDEzLjkwOTY3NzQsMTYuNDM4NzA5NyBaIE0xMy45MDk2Nzc0LDE1LjE3NDE5MzUgQzE0LjYwODA1MDQsMTUuMTc0MTkzNSAxNS4xNzQxOTM1LDE0LjYwODA1MDQgMTUuMTc0MTkzNSwxMy45MDk2Nzc0IEMxNS4xNzQxOTM1LDEzLjIxMTMwNDQgMTQuNjA4MDUwNCwxMi42NDUxNjEzIDEzLjkwOTY3NzQsMTIuNjQ1MTYxMyBDMTMuMjExMzA0NCwxMi42NDUxNjEzIDEyLjY0NTE2MTMsMTMuMjExMzA0NCAxMi42NDUxNjEzLDEzLjkwOTY3NzQgQzEyLjY0NTE2MTMsMTQuNjA4MDUwNCAxMy4yMTEzMDQ0LDE1LjE3NDE5MzUgMTMuOTA5Njc3NCwxNS4xNzQxOTM1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjIzMjI1ODEsMTYuNDM4NzA5NyBDMTguODM1NTEyMSwxNi40Mzg3MDk3IDE3LjcwMzIyNTgsMTUuMzA2NDIzNCAxNy43MDMyMjU4LDEzLjkwOTY3NzQgQzE3LjcwMzIyNTgsMTIuNTEyOTMxNSAxOC44MzU1MTIxLDExLjM4MDY0NTIgMjAuMjMyMjU4MSwxMS4zODA2NDUyIEMyMS42MjkwMDQsMTEuMzgwNjQ1MiAyMi43NjEyOTAzLDEyLjUxMjkzMTUgMjIuNzYxMjkwMywxMy45MDk2Nzc0IEMyMi43NjEyOTAzLDE1LjMwNjQyMzQgMjEuNjI5MDA0LDE2LjQzODcwOTcgMjAuMjMyMjU4MSwxNi40Mzg3MDk3IFogTTIwLjIzMjI1ODEsMTUuMTc0MTkzNSBDMjAuOTMwNjMxLDE1LjE3NDE5MzUgMjEuNDk2Nzc0MiwxNC42MDgwNTA0IDIxLjQ5Njc3NDIsMTMuOTA5Njc3NCBDMjEuNDk2Nzc0MiwxMy4yMTEzMDQ0IDIwLjkzMDYzMSwxMi42NDUxNjEzIDIwLjIzMjI1ODEsMTIuNjQ1MTYxMyBDMTkuNTMzODg1MSwxMi42NDUxNjEzIDE4Ljk2Nzc0MTksMTMuMjExMzA0NCAxOC45Njc3NDE5LDEzLjkwOTY3NzQgQzE4Ljk2Nzc0MTksMTQuNjA4MDUwNCAxOS41MzM4ODUxLDE1LjE3NDE5MzUgMjAuMjMyMjU4MSwxNS4xNzQxOTM1IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTg3MDk2NzcsMjIuNzYxMjkwMyBDNi4xOTAzNTA4MywyMi43NjEyOTAzIDUuMDU4MDY0NTIsMjEuNjI5MDA0IDUuMDU4MDY0NTIsMjAuMjMyMjU4MSBDNS4wNTgwNjQ1MiwxOC44MzU1MTIxIDYuMTkwMzUwODMsMTcuNzAzMjI1OCA3LjU4NzA5Njc3LDE3LjcwMzIyNTggQzguOTgzODQyNzIsMTcuNzAzMjI1OCAxMC4xMTYxMjksMTguODM1NTEyMSAxMC4xMTYxMjksMjAuMjMyMjU4MSBDMTAuMTE2MTI5LDIxLjYyOTAwNCA4Ljk4Mzg0MjcyLDIyLjc2MTI5MDMgNy41ODcwOTY3NywyMi43NjEyOTAzIFogTTcuNTg3MDk2NzcsMjEuNDk2Nzc0MiBDOC4yODU0Njk3NSwyMS40OTY3NzQyIDguODUxNjEyOSwyMC45MzA2MzEgOC44NTE2MTI5LDIwLjIzMjI1ODEgQzguODUxNjEyOSwxOS41MzM4ODUxIDguMjg1NDY5NzUsMTguOTY3NzQxOSA3LjU4NzA5Njc3LDE4Ljk2Nzc0MTkgQzYuODg4NzIzOCwxOC45Njc3NDE5IDYuMzIyNTgwNjUsMTkuNTMzODg1MSA2LjMyMjU4MDY1LDIwLjIzMjI1ODEgQzYuMzIyNTgwNjUsMjAuOTMwNjMxIDYuODg4NzIzOCwyMS40OTY3NzQyIDcuNTg3MDk2NzcsMjEuNDk2Nzc0MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy45MDk2Nzc0LDIyLjc2MTI5MDMgQzEyLjUxMjkzMTUsMjIuNzYxMjkwMyAxMS4zODA2NDUyLDIxLjYyOTAwNCAxMS4zODA2NDUyLDIwLjIzMjI1ODEgQzExLjM4MDY0NTIsMTguODM1NTEyMSAxMi41MTI5MzE1LDE3LjcwMzIyNTggMTMuOTA5Njc3NCwxNy43MDMyMjU4IEMxNS4zMDY0MjM0LDE3LjcwMzIyNTggMTYuNDM4NzA5NywxOC44MzU1MTIxIDE2LjQzODcwOTcsMjAuMjMyMjU4MSBDMTYuNDM4NzA5NywyMS42MjkwMDQgMTUuMzA2NDIzNCwyMi43NjEyOTAzIDEzLjkwOTY3NzQsMjIuNzYxMjkwMyBaIE0xMy45MDk2Nzc0LDIxLjQ5Njc3NDIgQzE0LjYwODA1MDQsMjEuNDk2Nzc0MiAxNS4xNzQxOTM1LDIwLjkzMDYzMSAxNS4xNzQxOTM1LDIwLjIzMjI1ODEgQzE1LjE3NDE5MzUsMTkuNTMzODg1MSAxNC42MDgwNTA0LDE4Ljk2Nzc0MTkgMTMuOTA5Njc3NCwxOC45Njc3NDE5IEMxMy4yMTEzMDQ0LDE4Ljk2Nzc0MTkgMTIuNjQ1MTYxMywxOS41MzM4ODUxIDEyLjY0NTE2MTMsMjAuMjMyMjU4MSBDMTIuNjQ1MTYxMywyMC45MzA2MzEgMTMuMjExMzA0NCwyMS40OTY3NzQyIDEzLjkwOTY3NzQsMjEuNDk2Nzc0MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMUVGRkZBIiBjeD0iMjAuMjMyMjU4MSIgY3k9IjIwLjIzMjI1ODEiIHI9IjIuNTI5MDMyMjYiPjwvY2lyY2xlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
        background-position: 50%;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
    }

    .games-picker .checker-content .selected-checker-item .selected-checker-light {
        background: #1ffdfa;
        box-shadow: 0 0 4px 0 rgba(31, 253, 250, .5);
        transition: all .2s ease-out;
    }

    .games-picker .checker-content .selected-checker-item .games-info > .games-icon {
        filter: unset;
        transition: filter .2s ease-out;
    }

    .games-picker .checker-content .selected-all-games .games-info > .games-icon {
        filter: unset;
    }

    .games-picker .checker-content .selected-all-games {
        color: #bacef1;
    }
</style>
