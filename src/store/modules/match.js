import {getList} from '@/api/match'
// import _ from 'lodash';//数字插件


const state = {
    matchList: [],
    oddsList: {},
    homeMatchType:2,
    // homeMatchList: [],
    // oddsDetail: "",
    // tournamentList: [],
    // newBettingData: !1,
    // newTournamentList: !1,
    // newMatchData: !1,
    // newHomeMatchList: [],
    // updateMatchCount: !1
}
const mutations = {
    SET_MATCH_LIST: (state, list) => {

        if (list.length === 0) {
            console.log(list.length);
            state.matchList = list
            return
        }

        // if(){
        //
        // }
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
            const index = state.matchList.findIndex(items => items.id === item.id)

            // findIndex(item => item.id === list.id)
            if (index === -1) {
                state.matchList.push(item);
            } else {
                //替换数据
                state.matchList.splice(index, 1, item)


            }

        })


        // state.oddsList = {}

        /**
         * 更新赔率 只要更新oddsList就行
         * 优势 oddsList 赔率内存地址 指向的是 matchList 地址 所以会双向更新   即时刷新 matchList 也会是最新的赔率
         * 唯一缺点 oddsList 会无线膨胀 随着matchList刷新 就会有新的oddsList.push 进来
         */

        state.matchList.forEach(item => {
            if (Object.prototype.hasOwnProperty.call(item, 'odds')) {
                item['odds'].forEach((items) => {
                    if (Object.prototype.hasOwnProperty.call(state.oddsList, items['id'])) {
                        if(state.oddsList[items['id']]['last_update'] > items['last_update']){
                             Object.assign(items,state.oddsList[items['id']]);
                        }

                    }

                    state.oddsList[items['id']] = Object.assign(items);


                })

            }
        })


    },
    UPDATE_MATCH_LIST: (state, list) => {
        const {index, data} = list;
        state.matchList.splice(index, 1, data)
    },
    DELETE_MATCH_LIST: (state, index) => {
        state.matchList.splice(index, 1)
    },
    SET_HOME_MATCH_TYPE:(state, index)=>{
        state.homeMatchType = index
    }

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
    deleteMatcList({commit}, index) {
        commit('DELETE_MATCH_LIST', index);
    },
    setHomeMatchType ({commit}, index) {
        commit('SET_HOME_MATCH_TYPE', index);
    },


}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
