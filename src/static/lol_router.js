import VueRouter from "vue-router";
import News from '../component/lol/news.vue';
import Match from '../component/lol/Match.vue';
import Video from '../component/lol/video.vue';
import Mine from '../component/lol/mine.vue';

// 匹配
import NormalMatch from '../component/lol/match/normal.vue';
import NormalMatchOne from '../component/lol/match/normalStepOne.vue';

// 新闻
import NewsDetail from '../component/lol/news/detail.vue';

import ErrorTpl from '../component/error.vue';

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'hash',
    // base: __dirname,
    // linkActiveClass: 'active-link',//如果传参为中文，则没办法自动激活
    routes: [{
        path: '/news',
        component: News,
        name: 'news',
        meta: {
            showGuide: true
        }
    }, {
        path: '/news/detail/:id/:title',
        component: NewsDetail,
        name: 'newsDetail',
        meta: {
        }
    }, {
        path: '/match',
        component: Match,
        name: 'match',
        meta: {
            showGuide: true
        }
    }, {
        path: '/match/normal',
        component: NormalMatch,
        meta: {

        }
    }, {
        path: '/match/normal/stepone',
        component: NormalMatchOne,
        meta: {

        }
    }, {
        path: '/video',
        component: Video,
        meta: {
            showGuide: true
        }
    }, {
        path: '/mine',
        component: Mine,
        meta: {
            showGuide: true
        }
    }, {
        path: '/',
        redirect: '/match'
    }, {
        path: '/error/:title/:message',
        component: ErrorTpl
    }, {
        path: '*',
        redirect: '/error/404/没有找到页面哦'
    }]
});

export default router;