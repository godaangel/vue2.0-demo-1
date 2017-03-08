<style lang="scss" scoped>
	.dz-head{
		background: #000;
	}
</style>

<template>
<header class="dz-head">
	<i class="iconfont icon-left left-icon go-back" @click="goback()" v-if="!showGuide"></i>
	<span class="title">{{title}}</span>
</header>
</template>

<script type="text/javascript">

	//引入路由文件router.js
	import Router from '../static/lol_router.js';
	import CONSTANT from '../static/constant.js';
	export default {
		data() {
			var that = this;
			// console.log(that.$route)
			return {
				title: CONSTANT.value[that.$route.params.title] ? CONSTANT.value[that.$route.params.title] : "我的个人App",
				showGuide: that.$route.meta ? that.$route.meta.showGuide : false
			}
		},
		methods: {
			goback() {
				Router.go(-1);
			}
		},
		watch: {
			'$route' (to, from) {
				// 对路由变化作出响应...
				this.showGuide = to.matched[0].meta ? to.matched[0].meta.showGuide : false;
				this.title = CONSTANT.value[to.params.title] ? CONSTANT.value[to.params.title] : '我的个人App';
				// console.log(to.params.title);
			}
		}
	}
</script>