import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
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
    requireAuth:true               true 是需要验证登录
    title: 'title'               名称显示在侧栏和面包屑(推荐设置)
    icon: 'home'                 图标显示在侧栏中
    noCache: true                如果设置为真，页面将不会被缓存(默认为假)
    affix: true                  如果设置为真，则标记将附加在标记视图中
    breadcrumb: false            如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置路径，侧栏将突出显示您设置的路径
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

    //首页
    path: '/',
    component: () => import('@/views/index/index.vue'),
    keepAlive: true,//是否刷新页面
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: false //false 不需要登录权限
    },

    },
    {
      //登录
      path: '/login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //押注
      path: '/betting/:id',
      component: () => import("@/views/betting/index.vue"),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //游戏规则
      path: '/rules',
      component: () => import("@/views/rules/index.vue"),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      },
    },
    {
      //注册
      path: '/register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/register/index.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //个人中心
      path: '/personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/personal/index.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: true  //true 需要登录权限
      }
    },
    {
      //关于公司
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( '@/views/about/index.vue')
    },
    {
      //设置
      path: '/settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/settings/index.vue')
    },
]

const router = new VueRouter({
  routes
})

export default router
