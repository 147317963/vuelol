import {login, logout, getInfo} from '@/api/user'
import {getToken, setToken, removeToken} from '@/utils/auth'
import CryptoJS from 'crypto-js';


const state = {
    token:getToken(),
    info:[],
}

const mutations = {
    //用户信息
    SET_INFO: (state,info) => {
        state.info = info;
    },
    //设置token
    SET_TOKEN: (state, token) => {
        state.token = token
    },

}

const actions = {
    // 用户登录
    login({commit}, userInfo) {
        // deviceId= 0b07a868db269792a4528edb81527795 最好带这个数据传输  防止爆破
        const key = CryptoJS.enc.Utf8.parse('1234567890654321'); //为了避免补位，直接用16位的秘钥
        const iv = CryptoJS.enc.Utf8.parse('1234567890123456'); //16位初始向量
        const {username, password,checked} = userInfo
        return new Promise((resolve, reject) => {
            login({
                username: username.trim(), password: CryptoJS.AES.encrypt(password, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }).toString()
            }).then(res => {
                const {data} = res
                commit('SET_TOKEN', data.token);
                setToken(data.token)
                if(checked){
                    localStorage.setItem('username',username)
                    localStorage.setItem('password',password)
                }else {
                    localStorage.removeItem('username')
                    localStorage.removeItem('password')
                }
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 获取用户信息
    getInfo({commit}) {
        return new Promise((resolve, reject) => {
            getInfo().then(res => {
                const {result} = res.data
                commit('SET_INFO', result)
                resolve(result)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 用户注销
    logout({commit, state,dispatch}) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_INFO', [])
                removeToken()
                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // 删除令牌
    resetToken({commit}) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_INFO', [])
            removeToken()
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

