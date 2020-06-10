const state = {
    shoppingCart: [],//购物车
    showCartDetail: false,//显示购物车
}

const mutations = {
    //添加到购物车
    ADD_TO_CART: (state, data) => {
        state.shoppingCart.length ? '' : state.showCartDetail = true
        let l = JSON.parse(data)
        Object.prototype.hasOwnProperty.call(l, "oldOdds") ? l.oldOdds = l.odds : 1 === state.shoppingCart.length && state.showCartDetail ? state.showCartDetail = false : state.shoppingCart.push(l)
    },
    //删除购物车表单
    REMOVE_FROM_CART: (state, data) => {
        //过滤掉等于要删除的ID
        state.shoppingCart = state.shoppingCart.filter(item => data.id !== item.id)
        state.shoppingCart.length ? '' : state.showCartDetail = false
    },
    //删除购物车表单全部
    REMOVE_ALL_FROM_CART: (state) => {
        state.shoppingCart = []
        state.showCartDetail = false
    },

    TOGGLE_CART_DETAIL:(state,show) => {
        state.showCartDetail = show
    },
}
const actions = {
    //添加到购物车
    addToCart({commit}, data) {
        commit('ADD_TO_CART', data);
    },
    //删除全部购物车数据
    removeAllFromCart({commit}) {
        commit('REMOVE_ALL_FROM_CART')
    },
    //删除购物车某条数据
    removeFromCart({commit}, data) {
        commit('REMOVE_FROM_CART', data);
    },
    //是否显示购物车
    toggleCartDetail ({commit}, show) {
        commit('TOGGLE_CART_DETAIL', show);
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
