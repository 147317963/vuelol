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
    sockets: {
      //查看socket是否渲染成功
      connect() {
        console.log("链接成功");
        //提交列队
        setTimeout(() => {
          this.$socket.emit('match');
        },1000)

      },
      //检测socket断开链接
      disconnect() {
        console.log("断开链接");
      },
      reconnect() {
        console.log("重新链接");
      },
      //客户端接收后台传输的socket事件
      matchCallback(data) {

        //如果是赔率就更改
        if(data['source']==='odds'){
          data['odds'].forEach((item) => {

            //  匹配的创建的赛事ID索引
            const matchIndex = _.findIndex(this.$store.getters.matchList,(o)=> {
              return o.id == item['match_id']
            });
            //找不到匹配场次
            if(matchIndex==-1) return;

            const oddsIndex = _.findIndex(this.$store.getters.matchList[matchIndex]['odds'],(o)=> {
              return o.id == item['id']
            });
            //找不到该赔率
            if(oddsIndex==-1) return;



            if (Number(this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['odds']) > Number(item['odds'])) {

              this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['tag'] = 'btn-odds-dropping';
              // _.throttle(()=>{
              //     this.$store.state.match[mindex]['odds'][oindex]['tag'] = ''
              // },6000);
              setTimeout(() => {
                this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['tag'] = ''
              }, 6000);
            } else if (Number(this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['odds']) < Number(item['odds'])) {

              this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['tag'] = 'btn-odds-rising';
              setTimeout(() => {
                this.$store.getters.matchList[matchIndex]['odds'][oddsIndex]['tag'] = ''
              }, 6000);
            }

            //合并数组
            this.$store.getters.matchList[matchIndex]['odds'][oddsIndex] = Object.assign(this.$store.getters.matchList[matchIndex]['odds'][oddsIndex], item);



            // this.$TweenLite.to(this.$store.state.match[matchIndex]['odds'][oddsIndex], 0.3, {odds: item['odds']});
            console.log(matchIndex,oddsIndex);




          })
          //更新比赛状态
        }else if(data['source']==='match'){
          //  匹配的创建的赛事ID索引
          const matchIndex = _.findIndex(this.$store.state.match,(o)=> {
            return o.id == item['match_id']
          });
          //找不到匹配场次
          if(matchIndex==-1) return;

          //合并数组
          this.$store.state.match[matchIndex] = Object.assign(this.$store.state.match[matchIndex], item);

        }



      },

    },
    methods: {//条用方法
    },
    mounted() {//加载完毕后
      // this.$socket.emit('connect');
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
