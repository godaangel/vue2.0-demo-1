// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router/index.js'
import router from './router/demo.js' //演示demo路由 【此处可替换为自己的】

/**
 * 尽量不要动 start
 */
import VueResource from 'vue-resource'
import VueScroller from 'vue-scroller'

Vue.use(VueResource)
Vue.use(VueScroller)

import {ToastPlugin, AlertPlugin, ConfirmPlugin, WiiPage, WiiNavbar, WiiTabbar, WiiPanel, WiiCells, WiiCellTitle, WiiCellTips, WiiInput, WiiTextarea, WiiCheckbox, WiiRadio, WiiSelect, WiiDatetime, WiiCityPicker, WiiImage, WiiImageGroup, WiiList, WiiListItem, WiiFilter, WiiNoData, WiiLoading, WiiArticle, WiiPreview, WiiPreviewItem, WiiButton} from 'wy-components';


var components = [WiiPage, WiiNavbar, WiiTabbar, WiiPanel, WiiCells, WiiCellTitle, WiiCellTips, WiiInput, WiiTextarea, WiiCheckbox, WiiRadio, WiiSelect, WiiDatetime, WiiCityPicker, WiiImage, WiiImageGroup, WiiList, WiiListItem, WiiFilter, WiiNoData, WiiLoading, WiiArticle, WiiPreview, WiiPreviewItem, WiiButton];

components.map(component => {
    Vue.component(component.name, component);
});

Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);

import FastClick from 'fastclick';
FastClick.attach(document.body);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  Vue.$wii.toast.show({
    text: '加载中',
    type: 'loading',
    time: 5000
  });
  next();
});

router.afterEach((to, from) => {
  Vue.$wii.toast.hide();
})
/**
 * 尽量不要动 end
 */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
