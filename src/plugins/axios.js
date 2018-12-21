import Vue from 'vue';
import axios from 'axios';

// github: https://github.com/axios/axios

// request拦截器
axios.interceptors.request.use(config => {
    return config;
});

// response拦截器
axios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err);
});

Vue.prototype.$http = axios;
