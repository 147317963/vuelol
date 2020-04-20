import axios from 'axios'; // 引入axios
import router from '../router'; //引入路由
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
import {Toast} from 'vant';
import Vue from "vue";
import VueSocketIO from 'vue-socket.io' //webSocket
// import socketio from 'socket.io-client';


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

//定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。
router.beforeEach((to, from, next) => {
    //判断该路由是否需要验证
    if(to.meta.requireAuth){
        //是否有token
        if(localStorage.token){
            //有就直接可以访问
            next();

        }else {
            //没有就跳转到登录界面
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else {
        //不需要登录验证直接给与同行
        next();
    }


});

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        if (localStorage.token) { //判断token是否存在
            config.params = {
                // rd: Date.parse(new Date()),
                token:localStorage.token,//将token设置成请求头
                ...config.params,
            };
            // config.headers.Authorization = localStorage.token;  //将token设置成请求头
        }
        if(config.method==='post'){
             Toast.loading({
                message: '加载中...',
                overlay:true
            });
        }
        return config;
    },
    error => {
        return Promise.reject(error);

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
                    //错误提示返回500状态码
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

