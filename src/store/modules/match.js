import {getList} from '@/api/match'
import _ from 'lodash';//数字插件


const state = {
    matchList: [],
    oddsList: {},
}
const mutations = {
    SET_MATCH_LIST: (state, list) => {
        if (list.length === 0) {
            state.matchList = list
        }
        list.forEach(item => {
            // if (Object.prototype.hasOwnProperty.call(item, 'odds')) {
            //     item['odds'].forEach((items) => {
            //
            //
            //         items = Object.assign(items, {
            //             bet_money: '',
            //             change: false,
            //             keyboard: false,
            //         })
            //
            //
            //     })
            //
            // }
            const index = _.findIndex(state.matchList, {id: item.id})
            if (index === -1) {
                state.matchList.push(item);
            } else {
                //替换数据
                state.matchList.splice(index, 1, item)


            }

        })


        // state.oddsList = {}

        state.matchList.forEach(item => {
            if (Object.prototype.hasOwnProperty.call(item, 'odds')) {
                item['odds'].forEach((items) => {
                    // if (!Object.prototype.hasOwnProperty.call(state.oddsList, items['id'])) {
                    state.oddsList[items['id']] = Object.assign(items);
                    // }

                })

            }
        })


    },
    UPDATE_MATCH_LIST: (state, list) => {
        const {index, data} = list;
        state.matchList.splice(index, 1, data)
    },


}
const actions = {
    getMatchList({commit}, data) {
        return new Promise((resolve, reject) => {
            getList(data).then(res => {
                const {result} = res.data
                commit('SET_MATCH_LIST', result);
                resolve()
            }).catch(e => {
                reject(e)
            })
        })
    },
    setMatcList({commit}, list) {
        commit('SET_MATCH_LIST', list);
    },
    updateMatcList({commit}, list) {
        commit('UPDATE_MATCH_LIST', list);
    },


}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
