import { getList } from '@/api/game'


const state = {
    gameList:[],


}
const mutations = {
    SET_GAME_LIST: (state, list) => {
        let listNew=[];
        for(let i  in list){

            if(!Object.prototype.hasOwnProperty.call(list[i],'selected')){
                listNew.push(Object.assign(list[i], {selected:true}))
            }
        }
        state.gameList = listNew;
    },
    UPDATE_GAME_LIST:(state, list) => {
        const { index, data } = list;
        state.gameList.splice(index,1,data)
    }

}
const actions = {
    getGameList({ commit }) {
        return new Promise((resolve,reject) => {
            getList().then(res => {
                const {result} = res.data
                commit('SET_GAME_LIST', result);
                resolve()
            }).catch(e => {
                reject(e)
            })
        })
    },
    setGameList({ commit },list){
        commit('SET_GAME_LIST', list);
    },
    updateGmaeList({ commit },list){
        commit('UPDATE_GAME_LIST', list);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
