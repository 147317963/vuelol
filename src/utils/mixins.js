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

    mounted() {


        (async () => {

            // Subscribe to a channel.
            let sub1 = this.socket.subscribe( "match");
            // let data = await this.socket.receiver('#publish').once()
            for await (let data of sub1) {
                // ...
                if(data['source'] ==='odds'){
                    data['odds'].forEach(item => {
                        if(this.oddsList[item['id']]){
                            console.log(item)
                            const oldOdds =  parseFloat(this.oddsList[item['id']]['odds'])
                            const newOdds =  parseFloat(item['odds'])
                            if (oldOdds > newOdds &&  item['status'] === this.oddsStatus['正常']['status']) {

                                    this.oddsList[item['id']]['tag'] = 'btn-odds-dropping';



                            } else if (oldOdds < newOdds &&  item['status'] === this.oddsStatus['正常']['status']) {


                                    this.oddsList[item['id']]['tag'] = 'btn-odds-rising';


                            }
                            setTimeout(() => {
                                this.oddsList[item['id']]['tag'] = ''
                            }, 6000);
                         // let  throttled =  this._.debounce(()=>{
                         //        this.oddsList[item['id']]['tag'] = ''
                         //    }, 6000, { 'maxWait': 6000,'trailing': true });
                         //    throttled()
                            const index = this._.findIndex(this.betList, {id: item['id']});

                            if(index !== -1){
                                const list={
                                    index:index,
                                    data:JSON.parse(JSON.stringify(Object.assign(this.betList[index],item, {
                                        change: true,
                                    })))
                                }
                                this.$store.dispatch('app/updateBetList', list)

                            }
                            this.oddsList[item['id']] = Object.assign(this.oddsList[item['id']],item)
                        }
                    })
                }else if(data['source'] ==='match'){

                }

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
