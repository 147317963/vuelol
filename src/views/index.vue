<template>
   <div class="home-page router-view">
       <match-tab @fatherActive="fatherActive"  :active="active"></match-tab>
       <games-picker :gameList="gameList" :active="active"></games-picker>
       <match-info></match-info>
       <loading-bkg></loading-bkg>
       <scroll-list></scroll-list>
   </div>



</template>

<script>
    import ScrolLlist from  '@/components/scroll-list'
    import MatchInfo from '@/components/match-info'
    import LoadingBkg from '@/components/loading-bkg'
    import MatchTab from '@/components/match-tab'
    import GamesPicker from '@/components/games-picker'
    export default {
        name: "index",
        data() {
            return {
                active:0,
                gameList:[],
            }
        },
        methods: {//条用方法
            fatherActive(value){
                this.active = value;
            },
            getGameList(){
                let _this = this;
                this.$get(this.$api.game).then(res => {
                    if(res.code == 200){
                        _this.gameList = res.datas;

                    }

                });
            },

        },
        mounted() {//加载完毕后
            this.getGameList();
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            'match-tab': MatchTab,
            'games-picker': GamesPicker,
            'match-info': MatchInfo,
            'scroll-list': ScrolLlist,
            'loading-bkg': LoadingBkg,
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
        .home-page {
                height: 100%;
        }

        .router-view {
                width: 100%;

        }
</style>