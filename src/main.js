import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element';
import './plugins/axios';
import './mock';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 国际化支持
import '@/i18n/index';

Vue.config.productionTip = false;

NProgress.configure({
    showSpinner: false
});

// 在路由上绑定进度条
router.beforeEach((to, from, next) => {
    NProgress.start();

    next();
});
router.afterEach(() => {
    NProgress.done();
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
