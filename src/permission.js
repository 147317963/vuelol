import router from '@/router'
import {getToken} from '@/utils/auth' // 从cookie获取令牌


//定义完路由后，我们主要是利用vue-router提供的钩子函数beforeEach()对路由进行判断。
router.beforeEach((to, from, next) => {
     console.log(to);

    // 确定用户是否已登录
    const hasToken = getToken();

    //判断该路由是否需要验证
    if(to.meta.requireAuth){
        //是否有token
        if(hasToken){
            //有就直接可以访问
            next();

        }else {
            //没有就跳转到登录界面
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }else {
        //不需要登录验证直接给与同行
        next();
    }


});

