import { getList } from '@/api/game'


const state = {
    gameList: {},
    gamePickerVisibility: false,//游戏菜单列表
    selectedGameList:[],//选择游戏列表


}
const mutations = {
    SET_GAME_LIST: (state, list) => {
        let listNew={};
        // listNew.push( {selected:true})
        Object.values(list).forEach(item => {
            listNew[item['id']] = Object.assign(item)
        })


        state.gameList = listNew;
    },
    UPDATE_GAME_LIST:(state, list) => {
        const { index, data } = list;
        state.gameList.splice(index,1,data)
    },
    TOGGLE_GAME_PICKER_VISIBILITY: (state, show) => {
        state.gamePickerVisibility = show;
    },
    SET_SELECTED_GAME_LIST:(state,data)=>{
        if(data.length === 0){
            state.selectedGameList = data
            return
        }
        const index= state.selectedGameList.findIndex(item => item.id === data.id)
        if (index > -1){
            state.selectedGameList.splice(index, 1)
        }else {
            state.selectedGameList.push(data)
        }


    },

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
    },
    toggleGamePickerVisibility({commit}, show) {
        commit('TOGGLE_GAME_PICKER_VISIBILITY', show)
    },
    setSelectedGameList ({commit}, data) {
        commit('SET_SELECTED_GAME_LIST', data)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
