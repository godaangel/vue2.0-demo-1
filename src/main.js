import Vue from 'vue';
import VueBus from 'vue-bus';
import App from './App.vue';
import VueRouter from "vue-router";

//引入初始化移动端适配大小文件
import './static/normalize.js'; //单独的js如果没有对象export,则不需要命名以及from;
//引入弹窗文件
import Modal from './static/modal.js';

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueBus);

//引入路由文件router.js
// import Router from './static/router.js';
import Router from './static/lol_router.js';

Router.beforeEach((to, from, next) => {
	Modal.loading();
	$("body").scrollTop(0);
	next();
})

Router.afterEach(route => {
	Modal.hideLoading();
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: Router,
    render: h => h(App)
}).$mount('#app');