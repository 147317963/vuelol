import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        gameListShow:0,
        gameList: [],
        match:[],

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