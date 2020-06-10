<template>
    <div class="touranment-page router-view">
        <loading :show="matchRefresh"></loading>
        <section  class="teams-bet-title">
            <div  class="empty-badge">&nbsp;</div>
            <div >赛事竞猜</div>
        </section>

        <scroll-list></scroll-list>


    </div>


</template>

<script>
    import scrollList from '@/components/match/scroll-list';
    import loading from '@/components/loading'
    import {mapGetters} from "vuex";
    export default {
        name: "index",
        computed: {
            ...mapGetters([
                'matchRefresh',
            ])
        },
        components: {//注册组件
            scrollList,
            loading,
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

        watch: {}
    }
</script>

<style scoped>
    .touranment-page{
        height: 100%;
    }

    .router-view {
        width: 100%;
    }
    .touranment-page .teams-bet-title {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.2rem;
        margin-left: 8px;
        color: #758bb5;
        padding-top: 8px;
        padding-left: 8px;
        padding-right: 8px;
    }
    .touranment-page .empty-badge {
        width: 2px;
        height: 9px;
        background: #bacef1;
        margin-right: 4px;
    }
</style>
