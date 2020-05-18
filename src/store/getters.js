const getters = {
  token: state => state.user.token,//token
  configList:state => state.config.configList,//获得配置列表
  announcementList: state => state.announcement.announcementList,//获得公告列表
  gameList: state => state.game.gameList,//游戏列表
  gameMenuShow:state=>state.game.gameMenuShow,//游戏菜单是否显示,
  matchList:state=>state.match.matchList,//比赛列表,
  matchRefresh:state => state.match.matchRefresh,//游戏是否存在初始化加载
}
export default getters
