import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BScroll from 'better-scroll' //鼠标上下滚动插件
import { TweenLite } from 'gsap' //TweenMax动画库
import {post,get} from './utils/http'
import store from "./utils/store";
import api from '@/api/index'
import Vant from 'vant';
import 'vant/lib/index.css';


import '@/assets/css/animate.css';
// import '@/assets/fonts/iconfont.css';

Vue.config.productionTip = false;
Vue.prototype.$BScroll = BScroll;
Vue.prototype.$TweenLite = TweenLite;

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(Vant);



// Vue.use(VueSocketio, 'http://www.llgj.com.com:9501');

new Vue({
  router,
  store,//挂载一下前面定义的store
  render: h => h(App)
}).$mount('#app');
