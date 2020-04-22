const api = {
    //登录
    login: 'v1/login/user',
    //退出
    logout: 'v1/login/logout',
    //订单
    order:'v1/order/index',
    //个人报表
    report:'v1/report/index',
    //团队报表
    team: {
        index: 'v1/team/index',
    },
    //赔率
    odds:'v1/odds',
    //历史开奖数据
    history:'v1/history',
    //游戏list表
    game:'v1/game',
    //游戏list表
    match:'v1/match',
    //公告
    announcement:'v1/announcement',
    //获得相关配置
    config:'v1/config',
    //获得用户信息
    user:'v1/user'
};
export default api