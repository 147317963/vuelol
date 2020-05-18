import { getList } from '@/api/match'


const state = {
    matchList:[],
    matchRefresh:false,

}
const mutations = {
    SET_MATCH_LIST: (state, list) => {
        let listNew=[];
        for(let i  in list){
            listNew.push(list[i]) //值 ['aaa' 190 'man']

        }
        state.matchList = listNew;

    },
    SET_MATCH_REFRESH:(state,show)=>{
        state.matchRefresh = show;
    }
}
const actions = {
    getMatchList({ commit }) {
        return new Promise((resolve,reject) => {
            getList().then(res => {
                const {result} = res.data
                commit('SET_MATCH_LIST', result);
                resolve()
            }).catch(e => {
                reject(e)
            })
        })
    },
    setMatchRefresh({ commit },show) {
        commit('SET_MATCH_REFRESH', show);
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
