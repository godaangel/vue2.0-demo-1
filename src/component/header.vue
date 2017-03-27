<style lang="scss" scoped>
	.dz-head{
		background: #000;
		.title{
			margin: 0 3rem;
		}
	}
</style>

<template>
<header class="dz-head">
	<i class="iconfont icon-left left-icon go-back" @click="goback()" v-if="!showGuide"></i>
	<p class="title dz-text-overflow-1">{{title}}</p>
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
				title: CONSTANT.value[that.$route.params.title] ? CONSTANT.value[that.$route.params.title] : that.$route.params.title,
				showGuide: that.$route.meta ? that.$route.meta.showGuide : false
			}
		},
		methods: {
			goback() {
				Router.go(-1);
			},
			changeTitle(title) {
				// console.log(title)
				var that = this;
				that.title = title;
				// setTimeout(function(){
				// 	that.title = title;
				// },300);
			}
		},
		mounted(){
			this.$bus.on('changeHeaderTitle', this.changeTitle);
		},
		watch: {
			'$route' (to, from) {
				var that = this;
				// setTimeout(function(){
				// 	that.showGuide = to.matched[0].meta ? to.matched[0].meta.showGuide : false;
				// },300);
				// 对路由变化作出响应...
				that.showGuide = to.matched[0].meta ? to.matched[0].meta.showGuide : false;
				// this.title = '';
				// console.log(to.params.title);
			}
		}
	}
</script>