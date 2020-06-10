import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    /**
     * Note: sub-menu only appear when route children.length >= 1
     * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
     *
     * hidden: true                   如果设置为真，项目将不会显示在侧栏(默认为假)
     * alwaysShow: true               如果设置为真，将始终显示根菜单
     *                                如果不设置alwaysShow，当项目有多个子路由时，
     *                                它将成为嵌套模式，否则不显示根菜单
     * redirect: noRedirect           如果设置noRedirect将不会在面包屑中重定向
     * name:'router-name'             该名称由<keep-alive>(必须设置!!)
     * meta : {
    roles: ['admin','editor']    控制页面角色(您可以设置多个角色)
    index: 0                     用户来路由跳转动画
    requireAuth:true               true 是需要验证登录
    title: 'title'               名称显示在侧栏和面包屑(推荐设置)
    icon: 'home'                 图标显示在侧栏中
    noCache: true                如果设置为真，页面将不会被缓存(默认为假)
    affix: true                  如果设置为真，则标记将附加在标记视图中
    breadcrumb: false            如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧栏将突出显示您设置的路径
    children: [
            {
                path: 'collection',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
                name: 'Collection',
                component: Collection
            },

        ]
  }
     */

    //  vue-router学习笔记  记录开发中的点点滴滴

//
//     跳转路由的几种方式：
//
//   1、声明式： 1) 根据路由路径（/home/sort/detail）跳转 <router-link :to="{path: '/home/sort/detail', query:{id: 'abc'}}">点击查看子页面</router-link>
//              2) 根据路由名称（detail）跳转 <router-link :to="{name: 'detail', params:{id: 'abc'}}">点击查看子页面</router-link>
//                 :to=""  可以实现绑定动态的 路由 和 参数
//
// 2、编程式： 1） this.$router.push({path: '/home/sort/detail',query:{id: 'abc'}})
//            2） this.$router.push({name: 'detail',params:{id: 'abc'}})
//
// 备注： params 和 query 传参的区别：
//             1、params传参时  参数不会出现在url的路径上面， 但是刷新页面时param里面的数据会消失
//             2、query传参时   参数出现在url的路径上面， 刷新页面时query里面的数据不变

    // 1.  不带参数 形如：http://localhost:3000/#/home/newslist

    // router.js 路由配置
// { path: '/home', name：'home' component: Home }
//
// this.$router.push('/home')
// this.$router.push({name:'home'})
// this.$router.push({path:'/home'})
//
// 2.1. params传参   形如（例如从商品进入详情）：http://localhost:3000/#/home/13
//
// // router.js 路由配置
// { path: '/home/:id', name: 'home', component: Home } //或者
// { path: '/home:id', name: 'home', component: Home }
//
// this.$router.push('/home/' + id)
// this.$router.push({name:'home',params: {id:id}})  // 只能用 name

// params传参数 (类似post) 直接跟参数的形式
// 不配置path ,第一次可请求,刷新页面id会消失
// 配置path,刷新页面id会保留

// html 取参  $route.params.id
// script 取参  this.$route.params.id


// 2.2. query传参 形如（例如从商品进入详情）：http://localhost:3000/#/home?id=13
//
//     // router.js 路由配置
// { path: '/home', name: 'home', component: Home }
//
// this.$router.push('/home?id=' + id)
// this.$router.push({name:'home',query: {id:id}})
// this.$router.push({path:'/home',query: {id:id}})

// query传参数 (类似get,url后面会显示参数)
// html 取参  $route.query.id
// script 取参  this.$route.query.id

    {
        path: "*",
        redirect: "/"
    },
    {
        //登录
        path: '/login',
        name:'name',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:0
        }
    },
    {
        //个人中心
        path: '/personal',
        name:'personal',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/personal/index.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: true,  //true 需要登录权限
            index:0,
        },
    },

    {
        path: '/personal/betsHistory',
        name: 'betsHistory',
        component: () => import('@/views/personal/bets-history.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false,  //true 需要登录权限
            index:1,
        },
    },


    {
        //注册
        path: '/register',
        name:'register',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/register/index.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:1,
        }
    },
    {   //首页
        path: '/',
        name:'/',
        component: () => import('@/views/home/index.vue'),
        keepAlive: true,//是否刷新页面
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:1
        },

    },
    {
        //押注
        path: '/betting/:match_id',
        name:'betting',
        component: () => import("@/views/betting/index.vue"),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:2
        }
    },
    {  //赛季
        path: "/tournament/:tournament_id",
        name:'tournament',
        component: () => import("@/views/tournament/index.vue"),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:2,
        }
    },
    {
        //游戏规则
        path: '/bettingRules',
        name:'bettingRules',
        component: () => import("@/views/rules/index.vue"),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:2,
        },
    },
    {
        //关于公司
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( '@/views/about/index.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: false, //false 不需要登录权限
            index:1,
        }
    },
    {
        //设置
        path: '/settings',
        name: 'settings',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/settings/index.vue'),
        meta: { // 在路由配置中加入meta:{requireAuth: true}
            requireAuth: true, //false 不需要登录权限
            index:1,
        }
    },
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router
