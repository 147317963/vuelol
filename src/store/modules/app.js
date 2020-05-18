const state = {

    name:'Raybet',
    config:[],
}
const mutations = {
    SET_GAME_LIST: (state, list) => {
        let listNew=[];
        for(let i  in list){
            listNew.push(list[i]) //值 ['aaa' 190 'man']

        }
        state.config = listNew;

    },
    SET_CONFIG:(state, show)=>{
        state.gameMenuShow = show;
    }
}
const actions = {
    getConfig({ commit }) {
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
    setGameMenuShow({ commit }, show) {
        console.log(show);
        commit('SET_GAME_MENU_SHOW', show)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
