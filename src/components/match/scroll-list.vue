<template>
    <div class="scroll-list">

        <vue-Scroll :ops="scrollOps" ref="scroller"

                    @refresh-start="pullRefresh()"
                    @load-start="pushLoad()"
                    @handle-scroll-complete="handleScroll()"
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
                <div v-show="matchList.length">
                    <template v-for="(item)  in matchList">
                        <match-card :match-data="item" :key="item.id"></match-card>
                    </template>

                </div>
            </transition>
        </vue-Scroll>


        <!--            </better-scroll>-->


    </div>
</template>

<script>
    import MatchCard from '@/components/home/MatchCard.vue';
    import MatchCardButton from '@/components/home/MatchCardButton.vue';
    // import emptyList from '@/components/match/empty-list'
    import {mapGetters} from "vuex";

    export default {
        name: "scroll-list",
        computed: {
            ...mapGetters([
                'matchList',
                'matchRefresh'

            ]),
            homeMatchType: {
                get: function() {
                    this.$store.state.match.homeMatchType
                },
                set: function(n) {
                     this.$store.dispatch("setHomeMatchType", n)
                }
            },
        },
        components: {//注册组件
            MatchCardButton,
            MatchCard


        },
        data() {
            return {

                matchPage: 1,
                upcomingMatchPage: 1,
                showLoading: false,
                loadOver: false,
                scrollTop: 0,
                dateText: "",
                showDatePicker: false,
                showAnnouncement: false,
                upcomingLoadOver:true,
                messageList: [],

                listQuery: {
                    page: 1,
                    match_type: 2,
                },
                scrollOps: {
                    vuescroll: {
                        mode: 'slide',
                        // zooming:false,
                        pullRefresh: {
                            enable: true,
                        },
                    },
                    scrollPanel: {
                        scrollingX: false,
                    },
                    bar: {
                        disable: true,
                    },
                    // preventDefaultOnMove: true,
                },


            }
        },
        methods: {//条用方法
            async init() {
                this.listQuery = {
                    page: 1,
                    match_type: 2,
                }
                this.$store.dispatch('app/setMatchRefresh', true);
                this.$store.dispatch('match/setMatcList', []);

                this.$store.dispatch('match/getMatchList', this.listQuery).then(() => {
                    // if(this.matchList.length === 30){
                    //     this.listQuery.page = ++this.listQuery.page
                    //     this.$store.dispatch('match/getMatchList', this.listQuery)
                    // }
                    this.$store.dispatch('game/getGameList').then(() => {
                        this.$store.dispatch('app/setMatchRefresh', false);
                    })
                })


            },
            pullRefresh: function(vm, refreshDom, done) {
                 setTimeout(function() {
                    t.initList()
                     this.$store.dispatch('game/getGameList')
                     done()
                }, 300)
            },
            handleScroll(vm, refreshDom, done) {
                 this.isEarlyOrOverMatch ?  this.scrollTop = this.$refs.scroller.getPosition().scrollTop : x.b[25][1]++
            },
            // pullRefresh(vm, refreshDom, done) {
            //
            //     this.init().then(() => {
            //         done()
            //     })
            // },
            isEarlyOrOverMatch: function() {
                return  3 === this.homeMatchType ||  4 === this.homeMatchType
            },

        },
        mounted() {//加载完毕后

            this.init();


        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        watch: {
            tabIndex(newValue) {
                this.listQuery.status = newValue;
                this.init()
            }
        }
    }
</script>

<style scoped>

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
