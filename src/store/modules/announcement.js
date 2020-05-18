import { getList } from '@/api/announcement'


const state = {
    announcementList:[],


}
const mutations = {
    SET_ANNOUNCEMENT_LIST: (state, list) => {
        let listNew=[];
        for(let i  in list){
            listNew.push(list[i]) //值 ['aaa' 190 'man']

        }
        state.announcementList = listNew;

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
