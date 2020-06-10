const getters = {
  token: state => state.user.token,//token
  userInfo:state=>state.user.userInfo,//用户相关信息

  configList:state => state.config.configList,//获得配置列表

  announcementList: state => state.announcement.announcementList,//获得公告列表


  gamePickerVisibility:state=>state.game.gamePickerVisibility,//游戏菜单是否显示,
  selectedGameList:state=>state.game.selectedGameList,//选择游戏列表,
  gameList: state => state.game.gameList,//游戏列表



  shoppingCart:state =>state.cart.shoppingCart,//购物车
  showCartDetail:state =>state.cart.showCartDetail,//显示购物车



  matchList:state=>state.match.matchList,//比赛列表,
  oddsList:state=>state.match.oddsList,//所有赔率列表,
  homeMatchType:state=>state.match.homeMatchType,//获取数据类型,

  isChinese:state => state.app.isChinese,//中文
  overlayShow:state => state.app.overlayShow,//遮罩层
  noticeShow:state => state.app.noticeShow,//点击通知后显示公告
  betSlipPop:state => state.app.betSlipPop,//TAB选中 今日 滚盘 赛前
  betSlipPopBodyShow:state => state.app.betSlipPopBodyShow,//TAB选中 今日 滚盘 赛前
  winStatus:state => state.app.winStatus,//输赢状态 正常 输  赢
  matchStatus:state => state.app.matchStatus,//比赛状态 正常 封盘 已结算
  oddsStatus:state => state.app.oddsStatus,// 赔率状态 正常 封盘 已结算
  matchStage:state => state.app.matchStage,//比赛阶段
  betList:state => state.app.betList,//投注列表
  matchRefresh:state => state.app.matchRefresh,//比赛列表是否刷新
  gameMenuRefresh:state => state.app.gameMenuRefresh,//游戏列表是否刷新






  //切记二维数组一定要转换成数组 不然无法访问
}
export default getters
