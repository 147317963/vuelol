import axios from 'axios'; // 引入axios
import router from '../router'; //引入路由
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import {Toast} from 'vant';
import Vue from "vue";
import VueSocketIO from 'vue-socket.io' //webSocket


// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://192.168.8.118';
} else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://192.168.8.118';
}
Vue.use(new VueSocketIO({
    debug: process.env.NODE_ENV == 'development'?true:false,
    connection: axios.defaults.baseURL+':9501',
}));

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断

        if(config.method==='post'){
             Toast.loading({
                message: '加载中...',
                overlay:true
            });
        }
        return config;
    },
    error => {
        return Promise.error(error);

    });

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if(response.config.method==='post'){
            Toast.clear();
        }
        if (response.data.code) {
            switch (response.data.code) {
                // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
                case 200:
                    break;
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    });
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    });
                    // 清除token
                    localStorage.removeItem('token');

                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        });
                    }, 1000);
                    break;
                // 404请求不存在
                case 404:
                    Toast({
                        message: '网络请求不存在',
                        duration: 1500,
                        forbidClick: true
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Toast({
                        message: response.data.message,
                        duration: 1500,
                        forbidClick: true
                    });

            }


            return response;
        }
    },
    error => {

        Toast({
            message: '请检查网络',
            duration: 1500,
            forbidClick: true
        });


        return Promise.reject(error);



    }

);
router.beforeEach((to, from, next) => {
    // 判断当前路由以及路由的父路由中是否包含meta，meta里是否有requiredAuth
    // to.matched中包含当前路由以及父路由
    // 如果判断出to.matched中某个路由里有meta.requiredAuth
    // console.log(to);

    if (to.matched[0]) {

        next()

    } else {
        //没有该URL 就跳转到首页
        next({
            path:'/'
        })
    }
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

