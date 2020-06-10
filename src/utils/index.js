import store from '@/store';

export default {



    //获得游戏logo url
    getGameIcon: function(id) {
         const game  = store.getters.gameList.find(function(item) {
                return  item.id === id
            })
        return game ?  store.getters.configList.img_url.value + game.logo :  ""
    },



}
