<template>
   <div class="home-page router-view">

           <match-tab></match-tab>
           <game-menu></game-menu>
           <notice v-if="tabIndex===0||tabIndex===1"></notice>
           <date v-else></date>
           <loading :show="matchRefresh"></loading>
           <scroll-list></scroll-list>
           <notice-popup></notice-popup>


   </div>



</template>

<script>
    import scrollList from  '@/components/match/scroll-list'
    import notice from '@/components/notice'
    import matchTab from '@/components/tab'
    import gameMenu from '@/components/GameMenu'
    import loading from '@/components/loading'
    import noticePopup from '@/components/notice/notice-popup'
    import date from '@/components/date'
    import {mapGetters} from "vuex";
    export default {
        name: "home",
        computed: {
            ...mapGetters([
                'matchRefresh',
                'tabIndex',
            ])
        },
        data() {
            return {

            }
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
            console.log(this.$route.query)

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            scrollList,
            notice,
            matchTab,
            gameMenu,
            loading,
            noticePopup,
            date
        },
        watch: {
        },

    }
</script>

<style scoped>
        .home-page {
                height: 100%;
        }

        .router-view {
                width: 100%;

        }
</style>
