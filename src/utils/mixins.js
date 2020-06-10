import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters([
            'matchList',
            'oddsList',
            'oddsStatus',
            'betList',
        ])
    },
    data() {
        return {
            oddsRisingTime:'',
            oddsDroppingTime:'',
        }
    },

     mounted() {
         // this.sockets.subscribe('match', data => {
         //     console.log('welcome data ', data)
         // })

         (async () => {
            // Subscribe to a channel.
           let sub = this.socket.subscribe( "match")
            // let data = await this.socket.receiver('#publish').once()

            for await (let data of sub) {
                // ...
                if(data['source'] ==='odds'){
                    data['odds'].forEach(item => {
                        if(this.oddsList[item['id']]){
                            Object.assign(this.oddsList[item['id']],item)
                        }
                    })
                }else if(data['source'] ==='match'){

                        const index = this.matchList.findIndex(item=>item.id === data['match']['id']);
                        if(index !== -1){
                            this.$store.dispatch("match/updateMatcList", {
                                'index':index,
                                'data':Object.assign(this.matchList[index],data['match'])
                            })

                        }
                    console.log(data)

                }

                this.$socket.emit('matchupdate', data)

            }





        })();

              this.$store.dispatch('announcement/getAnnouncementList')

              this.$store.dispatch('game/getGameList')
              this.$store.dispatch('config/getConfigList')


    },

    // sockets: {
    //     //查看socket是否渲染成功
    //     connect() {
    //         console.log("链接成功");
    //         //提交列队
    //         setTimeout(() => {
    //             // this.$socket.emit('match');
    //         }, 1000)
    //
    //     },
    //     //检测socket断开链接
    //     disconnect() {
    //         console.log("断开链接");
    //     },
    //     reconnect() {
    //         console.log("重新链接");
    //     },
    //     //客户端接收后台传输的socket事件
    //     matchCallback(data) {
    //         //如果是赔率就更改
    //         if (data['source'] === 'odds') {
    //
    //
    //             data['odds'].forEach((item) => {
    //
    //                 if (Object.prototype.hasOwnProperty.call(this.oddsList, item['id'])) {
    //
    //                     const oldOdds =  parseFloat(this.oddsList[item['id']]['odds'])
    //                     const newOdds =  parseFloat(item['odds'])
    //
    //                     if (oldOdds > newOdds) {
    //
    //                         this.oddsList[item['id']]['tag'] = 'btn-odds-dropping';
    //
    //                     } else if (oldOdds < newOdds) {
    //
    //                         this.oddsList[item['id']]['tag'] = 'btn-odds-rising';
    //
    //                     }
    //                     setTimeout(() => {
    //                         this.oddsList[item['id']]['tag'] = ''
    //                     }, 6000);
    //                     //检测是否在投注单
    //                     this.oddsList[item['id']] = Object.assign(item, {
    //                         change: this._.findIndex(this.betList, {id: item['id']}) !== -1,
    //                     })
    //
    //                 }
    //
    //
    //             })
    //             //更新比赛状态
    //         } else if (data['source'] === 'match') {
    //
    //
    //         }
    //
    //
    //     },
    //
    // },
}
