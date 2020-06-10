<template>
    <div   class="odds-group-title" v-if="title">
        <div  class="empty-badge">&nbsp;</div>
        <div  class="title">{{title}}</div>
    </div>
</template>

<script>
    export default {
        name: "OddsGroupTitle",
        props: {
            title: String
        },
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
</style>
