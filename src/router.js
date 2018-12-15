import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

// 通过注入路由器，我们可以在任何组件内通过
// this.$router 访问路由器，也可以通过 this.$route 访问当前路由：

// 当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
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
            path: '/lifecycle',
            children: [
                {
                    path: 'overview',
                    component: () => import(/* webpackChunkName: "lifecycle" */ './views/lifecycle/index.vue')
                }
            ]
        },
        {
            // 动态路径参数以冒号开头
            path: '/user/:id'

            // 一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params
        }
    ]
});
