import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //头部显示
        headerKefu:0,
        //上拉刷新出现loading
        matchRefresh:false,
        //显示游戏列表按钮
        gameListShow:0,
        //游戏列表数组
        gameList: [],
        //比赛列表
        match:[],
        //公告列表
        announcement:[],

    },
    getters: {
        getName(state) {
            return 'hello ' + state.name;
        }
    },
    mutations: {
        setGameListShow(state,numer ) {
            state.gameListShow = numer;
        }
    },
    actions: {
        actionSetName(context, name) {
            setTimeout(() => {
                context.commit('mutationSetName', name);
            }, 1000);
        }
    }
});
export default store;