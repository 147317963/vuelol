import axios from 'axios'; // 引入axios
import store from '@/store';
import {Toast} from 'vant';


const service = axios.create({
    timeout: 10000, // 请求超时时间
    // baseURL:'http://192.168.8.118',
    // headers :{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
})


// 请求拦截器
service.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        if (store.getters.token) { //判断token是否存在
            // config.params = {
            //     // rd: Date.parse(new Date()),
            //     token:localStorage.token,//将token设置成请求头 以get形式发送给服务器
            //     ...config.params,
            // };
            // config.headers.common['Authorization'] = localStorage.token;  //将token设置成请求头A
            config.headers['Authorization'] = store.getters.token;  //将token设置成请求头A
        }
        // config.headers['Origin'] = 'https://www.ray51.com';
        // config.headers[':authority'] = 'esportsgamelink.com';
        // console.log(config);
        // if(config.method==='post'){
        //      Toast.loading({
        //         message: '加载中...',
        //         overlay:true
        //     });
        // }
        return config;
    },
    error => {
        return Promise.reject(error);

    }
    );

// 响应拦截器
service.interceptors.response.use(
    response => {
        // if(response.config.method==='post'){
        //     Toast.clear();
        // }
        if (response.data.code!==200) {
            Toast({
                message: response.data.message,
                duration: 1000,
                forbidClick: true
            });
            // 403:需要登录或者重新登录;
            if (response.data.code === 403) {
                store.dispatch('user/resetToken')
            }

            //抛出错误
            return Promise.reject(new Error (response.data.message || 'Error'));

        }else {
            //等于200都算成功
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

export default service


