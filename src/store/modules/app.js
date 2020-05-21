const state = {

    gameMenuShow:false,//游戏菜单列表
    matchRefresh:false,//刷新比赛列表
    gameMenuRefresh:false,//刷新游戏菜单列表
}

const mutations = {
    SET_GAME_MENU_SHOW:(state, show)=>{
        state.gameMenuShow = show;
    },
    SET_MATCH_REFRESH:(state,show)=>{
        state.matchRefresh = show;
    },
    SET_GAME_MENU_REFRESH:(state,show)=>{
        state.gameMenuRefresh = show;
    },
}
const actions = {
    setGameMenuShow({ commit }, show) {
        commit('SET_GAME_MENU_SHOW', show)
    },
    setMatchRefresh({ commit },show) {
        commit('SET_MATCH_REFRESH', show);
    },
    setGameMenuRefresh({ commit },show) {
        commit('SET_GAME_MENU_REFRESH', show);
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
