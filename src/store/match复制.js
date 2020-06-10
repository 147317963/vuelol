import {getList} from '@/api/match'


const state = {
    matchList: [],
    oddsList:{},
}
const mutations = {
    SET_MATCH_LIST: (state, list) => {
        let listNew = [];


        Object.values(list).forEach((item,index) => {
            listNew.push(JSON.parse(JSON.stringify(Object.assign(item))))

            if (Object.prototype.hasOwnProperty.call(item, 'odds')) {
                listNew[index]['odds'] = [];
                Object.values(item['odds']).forEach((items) => {
                    // console.log(items);
                    listNew[index]['odds'].push(Object.assign(items, {
                        bet_money: '',
                        change: false,
                        keyboard: false,
                        enable_parlay: item['enable_parlay']
                    }))
                })
                //没有赔率任何东西都没
                // const data = {status: 4, change: false, keyboard: false}
                // if (!listNew[item['id']]['odds'].length) {
                //     listNew[item['id']]['odds'].push(data)
                //     listNew[item['id']]['odds'].push(data)
                // }


            }

            if (Object.prototype.hasOwnProperty.call(item, 'team')) {
                //申明为数组
                listNew[index]['team'] = [];
                Object.values(item['team']).forEach((items) => {
                    listNew[index]['team'].push (Object.assign(items))
                })
            }

        })
        state.matchList = listNew;



        state.oddsList = {}

        state.matchList.forEach(item=>{
            if (Object.prototype.hasOwnProperty.call(item, 'odds')) {
                item['odds'].forEach((items) => {
                    state.oddsList[items['id']]= Object.assign(items);
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
