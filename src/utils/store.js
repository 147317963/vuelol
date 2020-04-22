import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //头部标签
        title: '',
        //头部显示类型    0带人头和logo还有客服  1 返回按钮 带标题   2 返回按钮 带设置
        headerType: 0,
        //上拉刷新出现loading
        matchRefresh: false,
        //显示游戏列表按钮
        gameListShow: false,
        //游戏列表数组
        gameList: [
            {
                id: 1,
                game_name: "DOTA2",
                game_logo: "/file/60d062143c4cc70ac9e36e3e61c372f1.svg",
                status: 1,
                short_name: "DOTA2"
            },
            {
                id: 2,
                game_name: "CSGO",
                game_logo: "/file/e6edb8165fc906c02ed6dc74dafb1702.svg",
                status: 1,
                short_name: "CS:GO"
            },
            {
                id: 3,
                game_name: "英雄联盟",
                game_logo: "/file/4a920eed6bc2bef7862e0a51fe469ff4.svg",
                status: 1,
                short_name: "LOL"
            },
            {
                id: 4,
                game_name: "王者荣耀",
                game_logo: "/file/5155ce2645f2486533bd28f9e9c2026e.svg",
                status: 1,
                short_name: "KOG"
            },
            {
                id: 5,
                game_name: "篮球",
                game_logo: "/file/f299629fdf01bfb98c7b2686700c9cd7.svg",
                status: 1,
                short_name: "Basketball"
            },
            {
                id: 6,
                game_name: "MMA",
                game_logo: "/file/2e5d8e1b2e333b233d8d4063a7d4300e.svg",
                status: 1,
                short_name: "MMA"
            },
            {
                id: 7,
                game_name: "穿越火线",
                game_logo: "/file/10039ea1b2c720e26f0c0a5fdd8e8ae1.svg",
                status: 1,
                short_name: "CF"
            },
            {
                id: 8,
                game_name: "守望先锋",
                game_logo: "/file/c30a43b86ebd99d76c3652234befce15.svg",
                status: 1,
                short_name: "Overwatch"
            },
            {
                id: 9,
                game_name: "星际争霸II",
                game_logo: "/file/f0abdb1c6d408973875bf17f8015b335.svg",
                status: 1,
                short_name: "StarCraft2"
            },
            {
                id: 10,
                game_name: "火箭联盟",
                game_logo: "/file/adb213d45ff762a6c9d9d5bb5bd7be4b.svg",
                status: 1,
                short_name: "Rocket League"
            },
            {
                id: 11,
                game_name: "足球",
                game_logo: "/file/896b863382a913294251a6daadcaaab9.svg",
                status: 1,
                short_name: "Soccer"
            },
            {
                id: 12,
                game_name: "彩虹六号",
                game_logo: "/file/8561a708439fcee7e401900170a7f539.svg",
                status: 1,
                short_name: "Rainbow 6"
            },
            {
                id: 13,
                game_name: "炉石传说",
                game_logo: "/file/4fbea59631b613e64626584e0284190a.svg",
                status: 1,
                short_name: "Hearthstone"
            },
            {
                id: 14,
                game_name: "NBA2K",
                game_logo: "/file/231c6a2bf90dc1fad0fc427aeb33eafd.svg",
                status: 1,
                short_name: "NBA2K"
            },
            {
                id: 15,
                game_name: "FIFA",
                game_logo: "/file/bc89fb93ee7b515a276595f9fa211759.svg",
                status: 1,
                short_name: "FIFA"
            },
            {
                id: 16,
                game_name: "实况足球",
                game_logo: "/file/aeeadb46cb94334ff0bd693b5e8fd3a6.svg",
                status: 1,
                short_name: "PES"
            },
            {
                id: 17,
                game_name: "使命召唤",
                game_logo: "/file/829a498b4f4abcc0163c5d2f1837f8d9.svg",
                status: 1,
                short_name: "COD"
            },
            {
                id: 18,
                game_name: "绝地求生",
                game_logo: "/file/7184f7a8546e31e6b50f227964d6b4b9.svg",
                status: 1,
                short_name: "PUBG"
            },
            {
                id: 19,
                game_name: "魔兽争霸3",
                game_logo: "/file/6760b72f17ddb2801f99d3467a489ae8.svg",
                status: 1,
                short_name: "WOW3"
            }
        ],
        //比赛列表
        match: [],
        //用户信息
        user:[],
        //公告列表
        announcement: [],
        //下注显示按钮
        betSlipPop: false,
        betSlipPopBody: false,
        //下注订单
        betOrderInfo: [],
        //赔率有变化
        oddsChange: false,
    },
    getters: {
        getName(state) {
            return 'hello ' + state.name;
        }
    },
    mutations: {
        "<MUTATION_PREFIX><EVENT_NAME>"() {
            // do something
        }
    },
    actions: {
        "<ACTION_PREFIX><EVENT_NAME>"() {
            // do something
        }
    }

});
export default store;