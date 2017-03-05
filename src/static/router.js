import VueRouter from "vue-router";
import Demo from '../component/demo/index.vue';
import ItemList from '../component/demo/itemList.vue';
import PhotoList from '../component/demo/photoList.vue';
import SlideMenu from '../component/demo/slideMenu.vue';
import MenuList from '../component/demo/menuList.vue';
import Form from '../component/demo/form.vue';
import ButtonList from '../component/demo/buttonList.vue';
import Pop from '../component/demo/pop.vue';
import Toast from '../component/demo/toast.vue';

import ErrorTpl from '../component/error.vue';

// 定义组件, 也可以像从别的文件引入
// const First = {
//     template: '<div><h2>我是第 {{$route.params.id}} 个子页面</h2></div>'
// };

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [{
        path: '/demo',
        component: Demo,
    }, {
        path: '/itemlist/:name',
        component: ItemList
    }, {
        path: '/photolist/:name',
        component: PhotoList
    }, {
        path: '/slidemenu/:name',
        component: SlideMenu
    }, {
        path: '/menulist/:name',
        component: MenuList
    }, {
        path: '/form/:name',
        component: Form
    }, {
        path: '/buttonlist/:name',
        component: ButtonList
    }, {
        path: '/pop/:name',
        component: Pop
    }, {
        path: '/toast/:name',
        component: Toast
    }, {
        path: '/',
        redirect: '/demo'
    }, {
        path: '/error/:name/:message',
        component: ErrorTpl
    }, {
        path: '*',
        redirect: '/error/404/没有找到页面哦'
    }]
});

export default router;