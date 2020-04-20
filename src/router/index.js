import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
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
    name: 'index',
    // component: index
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue'),
    meta: { // 在路由配置中加入meta:{requireAuth: true}
      requireAuth: false //false 不需要登录权限
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
    {
      //登录
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/login.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //修改密码
      path: '/forgotPassword',
      name: 'forgotPassword',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/forgot-password.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: true  //true 需要登录权限
      }
    },
    {
      //规则
      path: '/bettingRules',
      name: 'bettingRules',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/betting-rules.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //注册
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/register.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: false //false 不需要登录权限
      }
    },
    {
      //个人中心
      path: '/personal',
      name: 'personal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/personal/index.vue'),
      meta: { // 在路由配置中加入meta:{requireAuth: true}
        requireAuth: true  //true 需要登录权限
      }
    },
    {
      //关于公司
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/about.vue')
    },
    {
      //设置
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../components/settings/index.vue')
    },
]

const router = new VueRouter({
  routes
})

export default router
