import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 国际化支持
import '@/i18n/index'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
