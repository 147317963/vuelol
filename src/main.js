import Vue from 'vue';
import App from '@/App.vue'
import router from '@/router'
import store from "@/store";
import '@/icons' // icon
import '@/permission'; //permission control
import BScroll from 'better-scroll' //鼠标上下滚动插件
import { TweenLite } from 'gsap' //TweenMax动画库
import Vant from 'vant';
import { Lazyload } from 'vant';
import _ from 'lodash';//数字插件
import moment from "moment";//时间插件
// import VueLazyload from 'vue-lazyload' //图片懒加载
import VueSocketIO from "vue-socket.io";
import '@/styles/index.less';
import 'vant/lib/index.css';



Vue.config.productionTip = false;
Vue.prototype.$BScroll = BScroll;
Vue.prototype.$TweenLite = TweenLite;
Vue.prototype.moment= moment;
Vue.prototype._=_;
//使用JSON.stringify和JSON.parse可以解决问题
//给vue搞个clone方法    Object.assign 这样的话 复制的对象修改就不会影响到原始对象
Vue.prototype.clone = function (o) {
  if (!o) return ''
  return JSON.parse(JSON.stringify(o))
}

Vue.use(Vant);
// or with options
Vue.use(Lazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  error: 'data:image/png;base64,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',
  loading: 'data:image/png;base64,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',
  attempt: 1
})

Vue.use(new VueSocketIO({
  debug: process.env.NODE_ENV == 'development'?true:false,
  connection: 'http://192.168.8.118:9501',
}));




new Vue({
  router,
  store,//挂载一下前面定义的store
  render: h => h(App)
}).$mount('#app');
