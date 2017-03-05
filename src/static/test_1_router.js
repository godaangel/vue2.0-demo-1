import VueRouter from "vue-router";
import Index from '../component/test_1/index.vue';
import Faxian from '../component/test_1/faxian.vue';
import Form from '../component/test_1/form/form.vue';

import ErrorTpl from '../component/error.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'hash',
    // base: __dirname,
    // linkActiveClass: 'active-link',//如果传参为中文，则没办法自动激活
    routes: [{
        path: '/index/:title',
        component: Index,
    }, {
        path: '/faxian/:title',
        component: Faxian,
    }, {
        path: '/form/:name',
        name: 'form',
        component: Form,
    }, {
        path: '/',
        redirect: '/index/index'
    }, {
        path: '/error/:name/:message',
        component: ErrorTpl
    }, {
        path: '*',
        redirect: '/error/404/没有找到页面哦'
    }]
});

export default router;