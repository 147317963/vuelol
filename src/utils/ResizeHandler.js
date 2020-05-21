import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'matchList',
    ])
  },

  mounted() {
    this.$store.getters.announcementList.length ||  this.$store.dispatch('announcement/getAnnouncementList')
    this.$store.getters.gameList.length ||  this.$store.dispatch('game/getGameList')
    this.$store.getters.configList.length ||  this.$store.dispatch('config/getConfigList')
  },
  sockets: {
    //查看socket是否渲染成功
    connect() {
      console.log("链接成功");
      //提交列队
      setTimeout(() => {
        // this.$socket.emit('match');
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
          const matchIndex = _.findIndex(matchList,(o)=> {
            return o.id == item['match_id']
          });
          //找不到匹配场次
          if(matchIndex ===-1) return;

          const oddsIndex = _.findIndex(matchList[matchIndex]['odds'],(o)=> {
            return o.id == item['id']
          });
          //找不到该赔率
          if(oddsIndex ===-1) return;



          if (Number(matchList[matchIndex]['odds'][oddsIndex]['odds']) > Number(item['odds'])) {

            matchList[matchIndex]['odds'][oddsIndex]['tag'] = 'btn-odds-dropping';
            // _.throttle(()=>{
            //     this.$store.state.match[mindex]['odds'][oindex]['tag'] = ''
            // },6000);
            setTimeout(() => {
              matchList[matchIndex]['odds'][oddsIndex]['tag'] = ''
            }, 6000);
          } else if (Number(matchList[matchIndex]['odds'][oddsIndex]['odds']) < Number(item['odds'])) {

            matchList[matchIndex]['odds'][oddsIndex]['tag'] = 'btn-odds-rising';
            setTimeout(() => {
              matchList[matchIndex]['odds'][oddsIndex]['tag'] = ''
            }, 6000);
          }

          //合并数组
          matchList[matchIndex]['odds'][oddsIndex] = Object.assign(matchList[matchIndex]['odds'][oddsIndex], item);



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
        if(matchIndex===-1) return;

        //合并数组
        this.$store.state.match[matchIndex] = Object.assign(this.$store.state.match[matchIndex], item);

      }



    },

  },
}
