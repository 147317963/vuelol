<template>
  <div id="app">
    <app-header></app-header>
    <div class="weui-tab">
      <div id="vux_view_box_body" class="weui-tab__panel vux-fix-safari-overflow-scrolling">
        <transition mode="out-in" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
          <router-view/>
        </transition>
      </div>

    </div>
    <bet-slip-pop></bet-slip-pop>
  </div>
</template>
<script>
  import BetSlipPop  from '@/components/bet/bet-slip-pop'
  import AppHeader from '@/components/app-header'
  export default {
    name: "app",
    data() {
      return {}
    },
    methods: {//条用方法
    },
    mounted() {//加载完毕后
    },
    beforeCreate() {//初始化前
    },
    updated() {//更新数据
    },
    components: {//注册组件
      'app-header': AppHeader,
      'bet-slip-pop': BetSlipPop,
    },
    watch: {
      //data(val, newval) {
      //console.log(val)
      //console.log(newval)
      //}
    }
  }
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  #app {
    /*height: calc(100% - 48px);*/
    /*max-width: 375px;*/
    height: 100%;
  }
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 1.4rem;
    line-height: normal;
    text-align: center;
    color: #bacef1;
    background-color: #0c121f;
  }

  img {
    pointer-events: none;
  }
  * {
    box-sizing: border-box;
  }
  .weui-tab {
    position: relative;
    height: calc(100% - 48px);
  }
  .weui-tab__panel {
    box-sizing: border-box;
    height: 100%;
    /*padding-bottom: 50px;*/
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
  html {
    font-size: 62.5%;
  }
  body, html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
</style>
