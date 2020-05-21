const getters = {
  token: state => state.user.token,//token
  userInfo:state=>state.user.userInfo,//用户相关信息
  configList:state => state.config.configList,//获得配置列表
  announcementList: state => state.announcement.announcementList,//获得公告列表
  gameList: state => state.game.gameList,//游戏列表
  matchList:state=>state.match.matchList,//比赛列表,



  matchRefresh:state => state.app.matchRefresh,//比赛列表是否刷新
  gameMenuShow:state=>state.app.gameMenuShow,//游戏菜单是否显示,
  gameMenuRefresh:state => state.app.gameMenuRefresh,//游戏列表是否刷新
}
export default getters
