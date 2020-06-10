<template>
    <section class="match-info" @click.stop="$store.dispatch('app/setNoticeShow',true)">
        <div class="home-notice">
            <div class="notice-icon"></div>
            <div class="vux-marquee" ref="notice">
                <ul class="vux-marquee-box"
                    :style="'transform: translate3d(0px, '+bottom+'px, 0px); transition: transform 300ms ease 0s;'" >
                    <li class="notice-item" v-for="item in announcementList" :key="item.id" >
                        <div>{{item['cn_body']}}</div>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "notice",
        computed: {
            ...mapGetters([
                'announcementList',
            ])
        },
        data() {
            return {
                bottom:0,
            }
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后


            this.timer=setInterval( ()=> {
                const  Height = this.$refs.notice.offsetHeight;

                this.bottom = this.bottom - Height;


                if(Math.abs(this.bottom)>=this.$refs.notice.childNodes[0].offsetHeight){
                    this.bottom = 0;
                }
            }, 3000);




        },
        beforeCreate() {//初始化前
        },
        beforeDestroy(){//组件销毁前
            clearInterval(this.timer);
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
    .home-page .match-info {
        margin-left: 8px;
        margin-right: 8px;
        height: 40px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        background: #0c121f;
        border-bottom: 1px solid #182031;
        font-size: 1.2rem;
        color: #00befe
    }
    .home-page .match-info .home-notice {
        width: 100%;
        margin-right: auto;
    }

    .home-page .match-info .home-notice .notice-icon {
        background-position: 50%;
        background-repeat: no-repeat;
        width: 22px;
        height: 22px;
        margin-left: 16px;
        margin-right: 8px;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTcgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhazlkYo8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLmjInpkq4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOC4wMDAwMDAsIC00NDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLlhazlkYoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LjAwMDAwMCwgNDQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwQkVGRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDAwMDAwLCAxMS4wMDAwMDApIHNjYWxlKC0xLCAxKSB0cmFuc2xhdGUoLTEzLjAwMDAwMCwgLTExLjAwMDAwMCkgIiB4PSIxMiIgeT0iMyIgd2lkdGg9IjIiIGhlaWdodD0iMTYiIHJ4PSIxIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMUVGRkZBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi41MDAwMDAsIDExLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTYuNTAwMDAwLCAtMTEuMDAwMDAwKSAiIHg9IjE2IiB5PSI4IiB3aWR0aD0iMSIgaGVpZ2h0PSI2IiByeD0iMC41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiBmaWxsPSIjMUVGRkZBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC41MDAwMDAsIDExLjAwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtMTguNTAwMDAwLCAtMTEuMDAwMDAwKSAiIHg9IjE4IiB5PSI1IiB3aWR0aD0iMSIgaGVpZ2h0PSIxMiIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iIzAwQkVGRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNy41MDAwMDAsIDEyLjUwMDAwMCkgc2NhbGUoLTEsIDEpIHRyYW5zbGF0ZSgtNy41MDAwMDAsIC0xMi41MDAwMDApICIgeD0iNyIgeT0iMTAiIHdpZHRoPSIxIiBoZWlnaHQ9IjUiIHJ4PSIwLjUiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLDEzIEwzLDEzIEM0LjEwNDU2OTUsMTMgNSwxMi4xMDQ1Njk1IDUsMTEgQzUsOS44OTU0MzA1IDQuMTA0NTY5NSw5IDMsOSBMMSw5IEwxLDcgTDMsNyBDNS4yMDkxMzksNyA3LDguNzkwODYxIDcsMTEgQzcsMTMuMjA5MTM5IDUuMjA5MTM5LDE1IDMsMTUgTDEsMTUgTDEsMTMgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjMDBCRUZFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjUwMDAwMCwgMTEuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC00LjUwMDAwMCwgLTExLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy40MjYwNzMxLDE3LjE4MDk4OTYgTDcuNDI1MzM4NzUsMTcuMTc5ODcwNiBMMTIuMzM2MDEwNCwxMy4yNTIyNDM1IEMxMi4zNjE5NjYyLDEzLjIyOTE3OSAxMi4zODkxMjgyLDEzLjIwNzQ0NzMgMTIuNDE3MzkyLDEzLjE4NzE1MzMgTDEyLjQzMDY5NDYsMTMuMTc2NTEzNyBMMTIuNDMxMjc4NiwxMy4xNzczNTk2IEMxMi41OTI3NDA0LDEzLjA2NTUyMzkgMTIuNzg4NzE4MiwxMyAxMywxMyBDMTMuNTUyMjg0NywxMyAxNCwxMy40NDc3MTUzIDE0LDE0IEMxNCwxNC4zNDE0ODc1IDEzLjgyODgzMDksMTQuNjQyOTk2MyAxMy41Njc2MSwxNC44MjM0MDkxIEwxMy41NjgwODQ3LDE0LjgyNDA5NjcgTDguNzE0MjYwNDEsMTguNjk5ODgwNSBDOC42NTcyNzg1OSwxOC43NTgwMjU3IDguNTkzMjUzNDYsMTguODA5MjQyNiA4LjUyMzU2NTc0LDE4Ljg1MjE1MDQgTDguNTIzMDQwNzcsMTguODUyNTY5NiBDOC4zNzA4MzQxOCwxOC45NDYwNDkgOC4xOTE3MTc1NiwxOSA4LDE5IEM3LjQ0NzcxNTI1LDE5IDcsMTguNTUyMjg0NyA3LDE4IEM3LDE3LjY2MTI3MjggNy4xNjg0MTMwOCwxNy4zNjE4ODA3IDcuNDI2MDczMSwxNy4xODA5ODk2IFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwQkVGRSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNTAwMDAwLCAxNi4wMDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTEwLjUwMDAwMCwgLTE2LjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC42NTg3MDU3MSw4Ljc1MjQxODY1IEM4LjYzNjIyNDI0LDguNzcyMTE2MDMgOC42MTI4NTIzMyw4Ljc5MDgyMiA4LjU4ODY1ODIzLDguODA4NDY4MzEgTDguNTM1OTY0OTcsOC44NTA2MzE3MSBMOC41MzMwNDU3Miw4Ljg0NjI0MDE3IEM4LjM3ODc0NTk3LDguOTQzNjM3NyA4LjE5NTk1NTA1LDkgOCw5IEM3LjQ0NzcxNTI1LDkgNyw4LjU1MjI4NDc1IDcsOCBDNyw3LjY2MTI3IDcuMTY4NDE1OTEsNy4zNjE4NzU2NCA3LjQyNjA3OTU4LDcuMTgwOTg1MDcgTDcuNDI1MzM4NzUsNy4xNzk4NzA2MSBMMTIuMjg2MzUwOSwzLjI5OTQ5NjI2IEMxMi40Njc4MDgsMy4xMTQ2NTU0NCAxMi43MjA1MTQ0LDMgMTMsMyBDMTMuNTUyMjg0NywzIDE0LDMuNDQ3NzE1MjUgMTQsNCBDMTQsNC4zNDE0ODQ1MiAxMy44Mjg4MzM5LDQuNjQyOTkxMDUgMTMuNTY3NjE2OSw0LjgyMzQwNDMzIEwxMy41NjgwODQ3LDQuODI0MDk2NjggTDguNjU4NzA1NzEsOC43NTI0MTg2NSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    }
    .vux-marquee {
        height: 34px;
        width: 100%;
        overflow: hidden;
    }
    .vux-marquee-box, .vux-marquee-box li {
        margin: 0;
        width: 100%;
    }
    .vux-marquee-box {
        padding: 0;
        height: auto;
    }
    .home-page .match-info .home-notice .notice-item, .home-page .match-info .home-notice {
        height: 34px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }
    .home-page .match-info .home-notice .notice-item {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 16px
    }
</style>
