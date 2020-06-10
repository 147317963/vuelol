const state = {
    RIMG_URL: "",
    APP_URL: "",
    CHAT_URL: "",
    GAME_INDEX: 0,
    MERCHANT_INDEX: 0,
    IMG_URL: "//www.nmgdjkj.com/",
    GAME_API_HOST_LIST: ["https://incpgameinfo.esportsworldlink.com/v2/", "https://esportsgamelink.com/v2/", "https://cfgameinfo.raybet.ai/v2/"],
    MERCHANT_API_HOST_LIST: ["https://incpapi.365betlink.com", "https://www.raybetlink.com", "https://cfapi.raybet.ai"]

}
const mutations = {

    SET_RIMG_URL:(state, url)=> {
        state.RIMG_URL = url
    },
    SET_APP_URL:(state, e) =>{
        state.APP_URL = url
    },
    switchGameApiHost: (state,n)=>{
        state.GAME_INDEX = state.GAME_INDEX + 1 === state.GAME_API_HOST_LIST.length ? '' :  state.GAME_INDEX + 1, state.GAME_API_HOST = state.GAME_API_HOST_LIST[state.GAME_INDEX]
    },
}
const actions = {

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
