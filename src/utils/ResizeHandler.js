

export default {


  mounted() {
    this.$store.getters.announcementList.length ||  this.$store.dispatch('announcement/getAnnouncementList')
    this.$store.getters.gameList.length ||  this.$store.dispatch('game/getGameList')
    this.$store.getters.configList.length ||  this.$store.dispatch('config/getConfigList')
  },

}
