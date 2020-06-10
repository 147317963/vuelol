import { getList } from '@/api/announcement'


const state = {
    announcementList:[],


}
const mutations = {
    SET_ANNOUNCEMENT_LIST: (state, list) => {

        state.announcementList = list;

    },

}
const actions = {
    getAnnouncementList({ commit }) {
        return new Promise((resolve,reject) => {
            getList().then(res => {
                const {result} = res.data
                commit('SET_ANNOUNCEMENT_LIST', result);
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
