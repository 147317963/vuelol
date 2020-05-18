<template>
    <div class="match-tab">
        <transition mode="out-in" enter-active-class="animated fadeInUp">
        <section class="filter-matches" v-show="this.$store.getters.gameMenuShow===false">
            <div class="vux-tab-wrap match-tab">
                <div class="vux-tab-container">
                    <div class="vux-tab">
                        <div class="vux-tab-item" :style="this.left === 0?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'"  style="border: none;color:rgb(255, 255, 255);" @click.stop="styleObject(0)">
                            今日
                            <span class="match-number">{{today}}</span>
                        </div>
                        <span class="column-line"></span>
                        <div class="vux-tab-item" :style="this.left === 25?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'" @click.stop="styleObject(1)">
                            滚盘
                            <span class="match-number">{{rolling}}</span>
                        </div>
                        <span class="column-line"></span>
                        <div class="vux-tab-item" :style="this.left === 50?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'" @click.stop="styleObject(2)" >
                            赛前
                            <span class="match-number">58</span>
                        </div>
                        <span class="column-line"></span>
                        <div class="vux-tab-item" :style="this.left === 75?'border: none; color: rgb(255, 255, 255);':'border: none; color: rgb(186, 206, 241);'" @click.stop="styleObject(3)">
                            已结束
                        </div>
                        <span class="column-line"></span>
                        <div  class="vux-tab-ink-bar vux-tab-ink-bar-transition-forward"
                             :style="'display: block; height: 22px; background-color: transparent; left: '+left+'%; right: '+right+'%'">
                        </div>
                    </div>
                </div>
                <!--                <div class="vux-tab-ink-bar vux-tab-ink-bar-transition-forward" style="display: block; height: 22px; background-color: transparent; left: 50%; right: 25%;">&lt;!&ndash;&ndash;&gt;</div>-->
            </div>
            <div class="show-filter-games-btn" @click.stop="$store.dispatch('game/setGameMenuShow',true)"></div>
        </section>
        </transition>
        <transition mode="out-in" enter-active-class="animated fadeInUp">
            <section class="filter-games" v-show="this.$store.getters.gameMenuShow===true">
                <div class="hide-filter-games-btn" style="visibility: hidden;">&nbsp;&nbsp;
                </div>
                <div>游戏筛选</div>
                <div class="hide-filter-games-btn">
                    <div class="btn-content" @click.stop="$store.dispatch('game/setGameMenuShow',false)">✓</div>
                </div>
            </section>
        </transition>


    </div>

</template>

<script>
    // import _ from 'lodash';
    export default {
        name: "match-info",
        data() {
            return {
                left:0,
                right:75,
                today:0,
                rolling:0,



            }
        },
        methods: {//条用方法
            styleObject(value){
                if(value===0){
                    this.left = 0;
                    this.right = 75;
                }else if(value===1){
                    this.left = 25;
                    this.right = 50;
                }else if(value===2){
                    this.left = 50;
                    this.right = 25;
                }else if(value===3){
                    this.left = 75;
                    this.right = 0;
                }

            }
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
            '$store.getters.matchList': {
                handler(newValue) {
                    this.today =0;
                    this.rolling=0;
                    newValue.forEach((itme) => {
                        if(itme['status']===1 || itme['status']===2){
                            this.today++;
                        }
                        if(itme['status']===2){
                            this.rolling++;
                        }
                    });
                },
                deep: true
            },
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
        background-image: url('../../assets/images/svg/games.svg');
    }

    .match-tab .vux-tab-ink-bar {
        background-color: transparent;
        height: 44px;
        background-repeat: no-repeat;
        background-image: url('../../assets/images/svg/ink-bar.svg');
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
        background: linear-gradient(90deg,#0689f3,#019bbd);
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
