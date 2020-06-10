<template>
    <section class="match-info">
        <div  class="home-date">
            <div  class="arrow-icon arrow-left-dark"></div>
            <div  class="calendar-center">
                <div  class="calendar-icon"></div>
                <div >2020年5月27日 周三</div>
                <div >&nbsp;</div>
            </div>
            <div  class="arrow-icon arrow-right arrow-right"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {//条用方法
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
            //data(val, newval) {
            //console.log(val)
            //console.log(newval)
            //}
        }
    }
</script>

<style scoped>
     .match-info {
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
        color: #00befe;
    }
     .match-info .home-date .calendar-center, .match-info .home-date {
         display: -ms-flexbox;
         display: flex;
         -ms-flex-align: center;
         align-items: center;
     }
     .match-info .home-date .arrow-icon {
         padding: 12px;
         background-position: 50%;
         background-repeat: no-repeat;
         width: 6px;
         height: 12px;
         background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNnB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA2IDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5pel5pyfLeWJjeS4gOWkqeWPr+eCueWHuzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb27liIflm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUuMDAwMDAwLCAtMTA3Mi4wMDAwMDApIiBmaWxsPSIjMDBCRUZFIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuaXpeacny3liY3kuIDlpKnlj6/ngrnlh7siIHBvaW50cz0iMTI1IDEwODQgMTI1IDEwNzIgMTMxIDEwNzggMTI5LjcxNDI4NiAxMDc5LjI4NTcxIj48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
     }
     .match-info .home-date .arrow-left-dark {
         transform: rotate(180deg);
     }
     .match-info .home-date .arrow-left-dark, .match-info .home-date .arrow-right-dark {
         background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNnB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA2IDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5pel5pyfLeWJjeS4gOWkqeS4jeWPr+eCueWHuzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLpm7fnq57mioAyLjAtY29weSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb27liIflm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODUuMDAwMDAwLCAtMTA3Mi4wMDAwMDApIiBmaWxsPSIjNTI2NTg1Ij4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuaXpeacny3liY3kuIDlpKnkuI3lj6/ngrnlh7siIHBvaW50cz0iMTg1IDEwODQgMTg1IDEwNzIgMTkxIDEwNzggMTg5LjcxNDI4NiAxMDc5LjI4NTcxIj48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
     }
     .match-info .home-date .calendar-center {
         width: 155px;
         height: 40px;
         -ms-flex-pack: justify;
         justify-content: space-between;
         margin-left: 14px;
         margin-right: 14px;
     }
     .match-info .home-date .calendar-icon {
         background-position: 50%;
         background-repeat: no-repeat;
         width: 22px;
         height: 22px;
         margin-right: 4px;
         background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ml6XljoZAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0i6Zu356ue5oqAMi4wLWNvcHktMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb27liIflm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDguMDAwMDAwLCAtOTcyLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5pel5Y6GIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMDguMDAwMDAwLCA5NzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTUiIGZpbGw9IiMxRUZGRkEiIHg9IjciIHk9IjEwIiB3aWR0aD0iOCIgaGVpZ2h0PSIxIiByeD0iMC41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTUiIGZpbGw9IiMxRUZGRkEiIHg9IjciIHk9IjEzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiByeD0iMC41Ij48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNiw0IEwxNiw0IEMxNy42NTY4NTQyLDQgMTksNS4zNDMxNDU3NSAxOSw3IEwxOSwxNSBDMTksMTYuNjU2ODU0MiAxNy42NTY4NTQyLDE4IDE2LDE4IEw2LDE4IEM0LjM0MzE0NTc1LDE4IDMsMTYuNjU2ODU0MiAzLDE1IEwzLDcgQzMsNS4zNDMxNDU3NSA0LjM0MzE0NTc1LDQgNiw0IFogTTYsNiBDNS40NDc3MTUyNSw2IDUsNi40NDc3MTUyNSA1LDcgTDUsMTUgQzUsMTUuNTUyMjg0NyA1LjQ0NzcxNTI1LDE2IDYsMTYgTDE2LDE2IEMxNi41NTIyODQ3LDE2IDE3LDE1LjU1MjI4NDcgMTcsMTUgTDE3LDcgQzE3LDYuNDQ3NzE1MjUgMTYuNTUyMjg0Nyw2IDE2LDYgTDYsNiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMwMEJFRkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNCIgZmlsbD0iIzAwQkVGRSIgeD0iNyIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS00IiBmaWxsPSIjMDBCRUZFIiB4PSIxNCIgeT0iMyIgd2lkdGg9IjEiIGhlaWdodD0iNCIgcng9IjAuNSI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
     }
</style>
