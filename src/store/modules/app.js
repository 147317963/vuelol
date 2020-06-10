const state = {

    gameMenuShow: false,//游戏菜单列表
    matchRefresh: false,//刷新比赛列表
    gameMenuRefresh: false,//刷新游戏菜单列表
    tabIndex: 0,//TAB菜单选中,
    betSlipPop: false,//弹出投注框
    betSlipPopBodyShow: false,//弹出投注详细信息
    noticeShow: false,//通知显示
    overlayShow: false,//遮罩层
    winStatus: {
        '正常': {
            win: -1,
            name: '正常'
        },
        '败': {
            win: 0,
            name: '败'
        },
        '胜': {
            win: 1,
            name: '胜'
        }
    },
    matchStatus: {
        '未开始': {
            status: 1,
            name: '未开始'
        },
        '滚盘中': {
            status: 2,
            name: '滚盘中'
        },
        '已结束': {
            status: 3,
            name: '已结束'
        },

    },//比赛状态
    oddsStatus: {
        '正常': {
            status: 1,
            name: '正常'
        },
        '已封盘': {
            status: 2,
            name: '已封盘'
        },
        '隐藏': {
            status: 4,
            name: '隐藏'
        },
        '已结束': {
            status: 5,
            name: '已结束'
        }
    },//赔率状态
    matchStage: {
        'map1': {
            match_stage: 'map1',
            name: '地图一'
        },
        'map2': {
            match_stage: 'map2',
            name: '地图二'
        },
        'map3': {
            match_stage: 'map3',
            name: '地图三'
        },
        'map4': {
            match_stage: 'map4',
            name: '地图四'
        },
        'map5': {
            match_stage: 'map5',
            name: '地图五'
        },
        'map6': {
            match_stage: 'map6',
            name: '地图六'
        },
        'map7': {
            match_stage: 'map7',
            name: '地图七'
        },
        'map8': {
            match_stage: 'map8',
            name: '地图八'
        },
        'map9': {
            match_stage: 'map9',
            name: '地图九'
        },
        'r1': {
            match_stage: 'r1',
            name: '第一局'
        },
        'r2': {
            match_stage: 'r2',
            name: '第二局'
        },
        'r3': {
            match_stage: 'r3',
            name: '第三局'
        },
        'r4': {
            match_stage: 'r4',
            name: '第四局'
        },
        'r5': {
            match_stage: 'r5',
            name: '第五局'
        },
        'r6': {
            match_stage: 'r6',
            name: '第六局'
        },
        'r7': {
            match_stage:'r7',
            name: '第七局'
        },
        'r8': {
            match_stage:'r8',
            name: '第八局'
        },
        'r9': {
            match_stage:'r9',
            name: '第九局'
        },
        'final': {
            match_stage:'final',
            name: '全场'
        },
        'q1': {
            match_stage:'q1',
            name: '第一节'
        },
        'q2': {
            match_stage:'q2',
            name: '第二节'
        },
        'q3': {
            match_stage:'q3',
            name: '第三节'
        },
        'q4': {
            match_stage:'q4',
            name: '第四节'
        },
        'q5': {
            match_stage:'q5',
            name: '第五节'
        },
        'q6': {
            match_stage:'q6',
            name: '第六节'
        },
        'q7': {
            match_stage:'q7',
            name: '第七节'
        },
        'q8': {
            match_stage:'q8',
            name: '第八节'
        },
        'q9': {
            match_stage:'q9',
            name: '第九节'
        },
        '1st':{
            match_stage:'1st',
            name: '上半场'
        }
    },//比赛阶段
    betList:[],//投注列表

}

const mutations = {
    SET_OVERLAY_SHOW: (state, show) => {
        state.overlayShow = show;
    },
    SET_NOTICE_SHOW: (state, show) => {
        state.noticeShow = show;
    },
    SET_GAME_MENU_SHOW: (state, show) => {
        state.gameMenuShow = show;
    },
    SET_MATCH_REFRESH: (state, show) => {
        state.matchRefresh = show;
    },
    SET_GAME_MENU_REFRESH: (state, show) => {
        state.gameMenuRefresh = show;
    },
    SET_TAB_INDEX: (state, index) => {
        state.tabIndex = index;
    },
    SET_BET_SLIP_POP: (state, show) => {
        state.betSlipPop = show;
    },
    SET_BET_SLIP_POP_BODY_SHOW: (state, show) => {
        state.betSlipPopBodyShow = show;
    },
    SET_BET_LIST: (state, list) => {
        state.betList = list;
    },
    ADD_BET_LIST: (state, list) => {
        // state.betList.unshift(list);
        state.betList.unshift(list);
    },
    UPDATE_BET_LIST: (state, list) => {
        const {index, data} = list;
        state.betList.splice(index, 1, data)
    },
    DELETE_BET_LIST: (state, index) => {
        state.betList.splice(index, 1)
    },
}
const actions = {
    setOverlayShow({commit}, show) {
        commit('SET_OVERLAY_SHOW', show)
    },
    setNoticeShow({commit}, show) {
        commit('SET_NOTICE_SHOW', show)
    },
    setGameMenuShow({commit}, show) {
        commit('SET_GAME_MENU_SHOW', show)
    },
    setMatchRefresh({commit}, show) {
        commit('SET_MATCH_REFRESH', show);
    },
    setGameMenuRefresh({commit}, show) {
        commit('SET_GAME_MENU_REFRESH', show);
    },
    setTabIndex({commit}, index) {
        commit('SET_TAB_INDEX', index);
    },
    setBetSlipPop({commit}, show) {
        commit('SET_BET_SLIP_POP', show);
    },
    setBetSlipPopBodyShow({commit}, show) {
        commit('SET_BET_SLIP_POP_BODY_SHOW', show);
    },
    setBetList({commit}, list) {
        commit('SET_BET_LIST', list);
    },
    addBetList({commit}, list) {
        commit('ADD_BET_LIST', list);
    },
    updateBetList({commit}, list) {
        commit('UPDATE_BET_LIST', list);
    },
    deleteBetList({commit}, index) {
        commit('DELETE_BET_LIST', index);
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
