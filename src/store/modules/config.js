import { getList } from '@/api/config'
const state = {
    configList:[],
}
const mutations = {
    SET_CONFIG_LIST: (state, list) => {

        state.configList = list;

    },

}
const actions = {
    getConfigList({ commit }) {
        return new Promise((resolve,reject) => {
            getList().then(res => {
                const {result} = res.data
                commit('SET_CONFIG_LIST', result);
                resolve()
            }).catch(e => {
                reject(e)
            })
        })
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
