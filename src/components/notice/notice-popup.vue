<template>
    <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="vux-popup-dialog base-popup vux-popup-bottom vux-popup-show" v-show="noticeShow"
             style="max-height: 50vh;">
            <div class="base-popup-container">
                <section class="header">
                    <div>公告详情</div>
                    <div class="center-title"></div>
                    <div class="close-btn" @click.stop="$store.dispatch('app/setNoticeShow',false)"></div>
                </section>
                    <div>
                        <section class="slot">
                            <ul class="notice-list">
                                <li class="notice-list-item" v-for="item in announcementList" :key="item.id">
                                    <div class="title">{{item['cn_title']}}</div>
                                    <div class="time">{{item['create_time']}}</div>
                                    <div class="body">{{item['cn_body']}}</div>
                                </li>
                            </ul>
                        </section>
                    </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "notice-popup",
        computed: {
            ...mapGetters([
                'noticeShow',
                'announcementList',
            ])
        },
        data() {
            return {
                // ops: {
                //     vuescroll: {
                //         mode: 'slide',
                //         // zooming:false,
                //         pullRefresh: {
                //             enable: true,
                //         },
                //     },
                //     scrollPanel: {
                //         scrollingX: false,
                //     },
                //     bar: {
                //         disable: true,
                //     },
                //     // preventDefaultOnMove: true,
                // },
            }
        },
        methods: {//条用方法
            // handleStart(vm, refreshDom, done) {
            //
            //
            //         this.$store.dispatch('announcement/getAnnouncementList').then(() => {
            //             done();
            //         })
            //
            //
            // },
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
        },
        watch: {
            // noticeShow(val) {
            //     if (val === true) {
            //         this.$nextTick(() => {
            //             this.$refs["scroll"].refresh();
            //         })
            //     }
            // }
        }
    }
</script>

<style scoped>
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

    .base-popup {
        background: #232d42 !important;
        border-radius: 6px 6px 0 0;
    }

    .base-popup-container {
        overflow: hidden;
    }

    .base-popup-container .header {
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 24px;
        border-bottom: 1px solid #303c54;
        font-size: 1.2rem;
    }

    .base-popup-container .header .center-title {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .base-popup-container .header .close-btn {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        padding: 18px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhbPpl608L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29u5YiH5Zu+IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU0LjAwMDAwMCwgLTEyNzEuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSLlhbPpl60iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1NC4wMDAwMDAsIDEyNzEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MzY5NzI4NywxNi42NzU5MzA5IEM2LjcxNzQxNzkzLDE2LjY5NzI0MDQgNi42OTY5NTA4MSwxNi43MTc2OTkzIDYuNjc1NjMzMzgsMTYuNzM3MjQ1OCBMNi42NTg2NjA4OSwxNi43NTQyMTE0IEw2LjY1NzcxNDE4LDE2Ljc1MzI4NjIgQzYuNDgxOTAyMDcsMTYuOTA2OTE5MiA2LjI1MTgyMTEzLDE3IDYsMTcgQzUuNDQ3NzE1MjUsMTcgNSwxNi41NTIyODQ3IDUsMTYgQzUsMTUuNzU2NDQ2MyA1LjA4NzA2OTM1LDE1LjUzMzIyODcgNS4yMzE3NzkxNywxNS4zNTk3NzYxIEw1LjIyOTM3MDEyLDE1LjM1NzQyMTkgTDUuMjY2NzY5OTgsMTUuMzIwMDEyOCBDNS4yODM3OTA2MiwxNS4zMDE2NjggNS4zMDE0OTEyNywxNS4yODM5NjMxIDUuMzE5ODMxODQsMTUuMjY2OTM3OSBMOS41ODU3MjI4NCwxMSBMNS4zMTk4MzE4NCw2LjczMzA2MjA1IEM1LjMwMTQ5MTI3LDYuNzE2MDM2OTQgNS4yODM3OTA2Miw2LjY5ODMzMTk1IDUuMjY2NzY5OTgsNi42Nzk5ODcxNyBMNS4yMjkzNzAxMiw2LjY0MjU3ODEyIEw1LjIzMTc3OTE3LDYuNjQwMjIzODUgQzUuMDg3MDY5MzUsNi40NjY3NzEyOSA1LDYuMjQzNTUzNzEgNSw2IEM1LDUuNDQ3NzE1MjUgNS40NDc3MTUyNSw1IDYsNSBDNi4yNTE4MjExMyw1IDYuNDgxOTAyMDcsNS4wOTMwODA4IDYuNjU3NzE0MTgsNS4yNDY3MTM3NiBMNi42NTg2NjA4OSw1LjI0NTc4ODU3IEw2LjY3NTYzMzIsNS4yNjI3NTQwNyBDNi42OTY5NTA4MSw1LjI4MjMwMDY4IDYuNzE3NDE3OTMsNS4zMDI3NTk2IDYuNzM2OTcyODcsNS4zMjQwNjkxMiBMMTEuNzUyNzQ2NiwxMC4zMzc4Mjk2IEwxMS43NTA5Mzk2LDEwLjMzOTYxIEMxMS45MDU5NzA5LDEwLjUxNTc2MDMgMTIsMTAuNzQ2ODk5MyAxMiwxMSBDMTIsMTEuMjUzMTAwNyAxMS45MDU5NzA5LDExLjQ4NDIzOTcgMTEuNzUwOTM5NiwxMS42NjAzOSBMMTEuNzUyNzQ2NiwxMS42NjIxNzA0IEw2LjczNjk3Mjg3LDE2LjY3NTkzMDkgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsLW9wYWNpdHk9IjAuNyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGcgaWQ9IkNvbWJpbmVkLVNoYXBlIiBzdHJva2Utd2lkdGg9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjAwMDAwMCwgNS4wMDAwMDApIiBmaWxsLW9wYWNpdHk9IjAuNSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsNy40MTQ2MTQ4NSBMMS43MzY5NzI4NywxMS42NzU5MzA5IEMxLjcxNzQxNzkzLDExLjY5NzI0MDQgMS42OTY5NTA4MSwxMS43MTc2OTkzIDEuNjc1NjMzMzgsMTEuNzM3MjQ1OCBMMS42NTg2NjA4OSwxMS43NTQyMTE0IEwxLjY1NzcxNDE4LDExLjc1MzI4NjIgQzEuNDgxOTAyMDcsMTEuOTA2OTE5MiAxLjI1MTgyMTEzLDEyIDEsMTIgQzAuNDQ3NzE1MjUsMTIgMCwxMS41NTIyODQ3IDAsMTEgQzAsMTAuNzU2NDQ2MyAwLjA4NzA2OTM0OTYsMTAuNTMzMjI4NyAwLjIzMTc3OTE2OCwxMC4zNTk3NzYxIEwwLjIyOTM3MDExNywxMC4zNTc0MjE5IEwwLjI2Njc2OTk4MywxMC4zMjAwMTI4IEMwLjI4Mzc5MDYyMSwxMC4zMDE2NjggMC4zMDE0OTEyNjksMTAuMjgzOTYzMSAwLjMxOTgzMTg0MiwxMC4yNjY5Mzc5IEw0LjU4NTcyMjg0LDYgTDAuMzE5ODMxODQyLDEuNzMzMDYyMDUgQzAuMzAxNDkxMjY5LDEuNzE2MDM2OTQgMC4yODM3OTA2MjEsMS42OTgzMzE5NSAwLjI2Njc2OTk4NSwxLjY3OTk4NzE3IEwwLjIyOTM3MDExNywxLjY0MjU3ODEyIEwwLjIzMTc3OTE2OCwxLjY0MDIyMzg1IEMwLjA4NzA2OTM0OTYsMS40NjY3NzEyOSAwLDEuMjQzNTUzNzEgMCwxIEMwLDAuNDQ3NzE1MjUgMC40NDc3MTUyNSwwIDEsMCBDMS4yNTE4MjExMywwIDEuNDgxOTAyMDcsMC4wOTMwODA4MDA1IDEuNjU3NzE0MTgsMC4yNDY3MTM3NTggTDEuNjU4NjYwODksMC4yNDU3ODg1NzQgTDEuNjc1NjMzMiwwLjI2Mjc1NDA2OSBDMS42OTY5NTA4MSwwLjI4MjMwMDY4MyAxLjcxNzQxNzkzLDAuMzAyNzU5NjAzIDEuNzM2OTcyODcsMC4zMjQwNjkxMjIgTDYsNC41ODUzODUxNSBMNS4yNDcyNTM0Miw1LjMzNzgyOTU5IEw1LjI0OTA2MDM5LDUuMzM5NjA5OTggQzUuMDk0MDI5MTQsNS41MTU3NjAyOSA1LDUuNzQ2ODk5MyA1LDYgQzUsNi4yNTMxMDA3IDUuMDk0MDI5MTQsNi40ODQyMzk3MSA1LjI0OTA2MDM5LDYuNjYwMzkwMDIgTDUuMjQ3MjUzNDIsNi42NjIxNzA0MSBMNiw3LjQxNDYxNDg1IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMDAwMDAwLCA2LjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMy4wMDAwMDAsIC02LjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);
        border-left: 1px solid rgba(48, 60, 84, .5);
    }

    .base-popup-container .slot {
        height: calc(100% - 37px);
        overflow: hidden;
    }

    .notice-list {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .notice-list-item {
        padding: 24px;
        border-bottom: 1px solid #2e3a54;
    }

    .notice-list-item .title {
        font-size: 1.6rem;
        color: #fff;
        letter-spacing: 0;
    }

    .notice-list-item .time {
        margin-top: 4px;
        margin-bottom: 14px;
        font-size: 1rem;
        color: #526585;
    }

    .notice-list-item .body {
        color: #758bb5;
    }
</style>
