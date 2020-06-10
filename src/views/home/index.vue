<template>
    <div class="home-page router-view">

        <match-tab></match-tab>
        <game-picker></game-picker>
        <notice v-if="homeMatchType===0||homeMatchType===1 ||homeMatchType===2"></notice>
        <date v-else></date>
        <loading :show="showLoading"></loading>

        <div class="scroll-list">

            <vue-Scroll :ops="scrollOps" ref="scroller"

                        @refresh-start="pullRefresh"
                        @load-start="pushLoad"
                        @handle-scroll-complete="handleScroll"
            >
                <div slot="refresh-start">
                    <div class="refresh-text">
                        刷新中...
                    </div>

                </div>
                <div slot="refresh-active">
                    <div class="refresh-text">下拉刷新</div>

                </div>
                <div slot="refresh-deactive">
                    <div class="refresh-text">下拉刷新</div>
                </div>
                <transition name="matchList.length <= 30 ? 'fade':''">
                    <div v-show="homeMatchList().length">
                        <template v-for="(item)  in homeMatchList()">
                            <match-card :match-data="item" :key="item.id"></match-card>
                        </template>

                    </div>
                </transition>
            </vue-Scroll>


            <!--            </better-scroll>-->


        </div>

        <notice-popup :show="showAnnouncement"></notice-popup>


    </div>


</template>

<script>
    // import scrollList from '@/components/match/scroll-list'
    import MatchCard from '@/components/home/MatchCard.vue';
    import MatchCardButton from '@/components/home/MatchCardButton.vue';
    import notice from '@/components/notice'
    import matchTab from '@/components/tab'
    import GamePicker from '@/components/home/GamePicker'
    import loading from '@/components/loading'
    import noticePopup from '@/components/notice/notice-popup'
    import date from '@/components/date'
    import {mapGetters} from "vuex";

    export default {
        name: "home",
        computed: {
            ...mapGetters([
                'matchList',
                'selectedGameList',
                'isChinese',
                'homeMatchType'
            ]),
            homeMatchType: {
                get() {
                    return this.$store.getters.homeMatchType
                },
                set(value) {
                    this.$store.dispatch("setHomeMatchType", value)
                }
            },

        },
        data() {
            return {
                matchPage: 1,
                upcomingMatchPage: 1,
                showLoading: false,
                loadOver: false,
                //滚动到的高度
                scrollTop: 0,
                //年月日信息
                dateText: "",
                //显示atePicker 提供选择
                showDatePicker: false,
                showAnnouncement: false,
                upcomingLoadOver: true,

                listQuery: {
                    page: 1,
                    match_type: 2,
                },
                scrollOps: {
                    vuescroll: {
                        mode: "slide",
                        pullRefresh: {
                            enable: true
                        },
                        pushLoad: {
                            enable: false,
                            auto: true,
                            autoLoadDistance: 50
                        }
                    },
                    bar: {
                        disable: true
                    }
                }
            }
        },
        methods: {//条用方法

            init() {

                return new Promise((resolve, reject) => {
                    this.$store.dispatch('match/setMatcList', []);
                    this.dateText = '';
                    this.showLoading = true
                    this.loadOver = false
                    this.matchPage = 1
                    this.upcomingLoadOver = true

                    this.$store.dispatch('match/getMatchList', {
                        page: this.matchPage,
                        match_type: this.homeMatchType
                    }).then(() => {
                        resolve()

                    }).catch(e => {
                        reject(e)
                    })
                    this.$store.dispatch('game/getGameList')


                })

                // this.$store.dispatch('match/setMatcList', []);
                // this.dateText = '';
                // this.showLoading = true
                // this.loadOver = false
                // this.matchPage = 1
                // this.upcomingLoadOver = true
                // setTimeout(() => {
                //     this.$store.dispatch('match/getMatchList', {
                //         page: this.matchPage,
                //         match_type: this.homeMatchType
                //     })
                //     this.$store.dispatch('game/getGameList')
                //     this.showLoading = false
                // }, 300)

            },
            //选中游戏才会显示
            homeMatchList() {
                return this.selectedGameList.length ? this.matchList.filter(e => this.selectedGameList.find(n => n.id === e.game_id)) : this.matchList
            },

            // 滚动到选择 日期 首个数组位置
            selectDate(date) {
                //发现该日期第一个数组索引
                const index = this.homeMatchList.findIndex(item => this.moment(item.start_time).format() === date)
                //   跳到该索引的
                const y = 216 * index > 0 ? 216 * index : -1;
                this.$refs.scroller.scrollTo({
                    y: y
                })
                //滚动条 y的位置
                this.scrollTop = y
                this.showDatePicker = false
            },
            openAnnouncement() {
                this.messageList.length ?
                    (() => {
                        this.showAnnouncement = true;
                        this.$store.commit("toggleCartDetail", !1)
                    })() : ''

            },
            openDatePicker() {
                this.matchSchedule.length && this.matchSchedule.length > 1 ?
                    (() => {
                        this.showDatePicker = true;
                        this.$store.commit("toggleCartDetail", !1)
                    })() : ''
            },
            //返回当前日期
            matchSchedule() {
                let date = [];
                this.homeMatchList().forEach((item) => {
                    let dateData = this.moment(item.start_time).format()
                    if (!date.find(item => item === dateData)) {
                        date.push(dateData)
                    }


                })
                return date
                // console.log(e)
                // return    concat(e)
            },
            pushLoad(vm, refreshDom, done) {
                console.log(vm, refreshDom, 'pushLoad');
            },
            //判断TAB 选项
            isEarlyOrOverMatch() {
                return 3 === this.homeMatchType || 4 === this.homeMatchType
            },
            //当滚动结束的时候触发
            handleScroll() {

                this.isEarlyOrOverMatch() ? this.scrollTop = this.$refs.scroller.getPosition().scrollTop : ''
            },
            pullRefresh(vm, refreshDom, done) {
                // console.log(vm, refreshDom, 'handleStart',done);
                this.init().then(()=>{
                    this.showLoading = false
                    done()
                })

            },

        },
        mounted() {//加载完毕后

            //  是否是推广过来的 设置推广ID
            const inviteCode = Object.keys(this.$route.query)
            if (inviteCode.length) {
                localStorage.setItem('inviteCode', inviteCode[0])
            }


            this.init().then(()=>{
                this.showLoading = false
            })
            // localStorage.setItem('invite_code',username)

        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
            MatchCardButton,
            MatchCard,
            notice,
            matchTab,
            GamePicker,
            loading,
            noticePopup,
            date
        },
        watch: {
            'homeMatchType'() {
                // this.initList()
                this.scrollOps.vuescroll.pushLoad.enable = 4 === this.homeMatchType
            },
            'selectedGamesList'() {
                this.isEarlyOrOverMatch() ? this.dateText = this.homeMatchList()[0] ? this.moment(this.matchList[index].start_time).format() : "" : ''
            },
            // updateMatchCount() {
            //     this.updateMatchCount ?  this.$api.game.getGameList(),this.$store.commit("setUpdateMatchCount", !1) : ''
            // },
            'scrollTop'() {
                //获得日期信息
                if (this.isEarlyOrOverMatch() && this.matchList.length && this.scrollTop > -1) {
                    const index = Math.floor(this.scrollTop / 216);
                    this.matchList[index] ? this.dateText = this.moment(this.matchList[index].start_time).format() : ''
                }
            }
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

    .scroll-list {
        height: calc(100% - 86px);
        padding-left: 8px;
        padding-right: 8px;
    }

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
</style>
