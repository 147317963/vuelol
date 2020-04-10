<template>
   <div class="home-page router-view">
       <match-info @fatherActive="fatherActive"  :active="active"></match-info>
       <games-picker :active="active"></games-picker>
   </div>



</template>

<script>
    import MatchInfo from '@/components/match-info'
    import GamesPicker from '@/components/games-picker'
    export default {
        name: "index",
        data() {
            return {
                active:0
            }
        },
        methods: {//条用方法
            fatherActive(value){
                this.active = value;
            }

        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            'match-info': MatchInfo,
            'games-picker': GamesPicker,
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