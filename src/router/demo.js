import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const IndexTpl = resolve => {
    require.ensure(['../views/demo/index.vue'], () => {
        resolve(require('../views/demo/index.vue'))
    })
}

const BookListTpl = resolve => {
    require.ensure(['../views/demo/book/list.vue'], () => {
        resolve(require('../views/demo/book/list.vue'))
    })
}

const BookEditTpl = resolve => {
    require.ensure(['../views/demo/book/edit.vue'], () => {
        resolve(require('../views/demo/book/edit.vue'))
    })
}

const BookDetailTpl = resolve => {
    require.ensure(['../views/demo/book/detail.vue'], () => {
        resolve(require('../views/demo/book/detail.vue'))
    })
}

const MineTpl = resolve => {
    require.ensure(['../views/demo/mine/index.vue'], () => {
        resolve(require('../views/demo/mine/index.vue'))
    })
}

// 创建一个路由器实例
// 并且配置路由规则
const router = new Router({
    mode: 'hash',
    // base: __dirname,
    // linkActiveClass: 'active-link',//如果传参为中文，则没办法自动激活
    routes: [{
        path: '/bookindex',
        component: IndexTpl,
        name: 'bookindex'
    }, {
        path: '/index',
        component: BookListTpl,
        name: 'bookList'
    }, {
        path: '/book/edit',
        component: BookEditTpl,
        name: 'bookEdit'
    }, {
        path: '/book/detail',
        component: BookDetailTpl,
        name: 'bookDetail'
    }, {
        path: '/mine',
        component: MineTpl,
        name: 'mine'
    }, {
        path: '/',
        redirect: '/index',
        name: 'default'
    }]
});

export default router;