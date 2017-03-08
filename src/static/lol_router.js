import VueRouter from "vue-router";
import News from '../component/lol/news.vue';
import Match from '../component/lol/Match.vue';
import Video from '../component/lol/video.vue';
import Mine from '../component/lol/mine.vue';

import ErrorTpl from '../component/error.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'hash',
    // base: __dirname,
    // linkActiveClass: 'active-link',//如果传参为中文，则没办法自动激活
    routes: [{
        path: '/news/:title',
        component: News,
        meta: {
            showGuide: true
        }
    }, {
        path: '/match/:title',
        component: Match,
        meta: {
            showGuide: true
        }
    }, {
        path: '/video/:title',
        component: Video,
        meta: {
            showGuide: true
        }
    }, {
        path: '/mine/:title',
        component: Mine,
        meta: {
            showGuide: true
        }
    }, {
        path: '/',
        redirect: '/news/news'
    }, {
        path: '/error/:name/:message',
        component: ErrorTpl
    }, {
        path: '*',
        redirect: '/error/404/没有找到页面哦'
    }]
});

export default router;