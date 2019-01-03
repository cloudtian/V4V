import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import NotFoundComponent from './views/NotFound.vue';

Vue.use(Router);

// 通过注入路由器，我们可以在任何组件内通过
// this.$router 访问路由器，也可以通过 this.$route 访问当前路由：

// 当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            component: NotFoundComponent
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/lifecycle-overview',
            name: 'lifecycle-overview',
            component: () => import(/* webpackChunkName: "lifecycle" */ './views/lifecycle/index.vue')
        }
        // {
        //     // 动态路径参数以冒号开头
        //     path: '/user/:id',
        //     component: User,

        //     // 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params

        //     children: [
        //         // 当 /user/:id 匹配成功， UserHome 会被渲染在User的 <router-view> 中
        //         { path: '', component: UserHome },
        //         {
        //             // 当 /user/:id/profile匹配成功
        //             // UserProfile 会被渲染在User的<router-view>中
        //             path: 'profile',
        //             component: UserProfile
        //         }
        //     ]
        // }
    ]
});

/**
 * router.push(location, onComplete?, onAbort?) 等同于 <router-link :to="...">
 * router.replace(location, onComplete?, onAbort?) 等同于 <router-link :to="..." replace>
 * router.go(n)
 *
 * 命名路由，命名视图，嵌套命名视图
 *
 * 使用 props 将组件和路由解耦
 * // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
 *
 */
