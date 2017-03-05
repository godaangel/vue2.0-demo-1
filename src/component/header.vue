<style lang="scss">
	
</style>

<template>
<header class="dz-head">
	<i class="iconfont icon-left left-icon go-back" @click="goback()" v-if="subTitle"></i>
	<span class="title">{{subTitle?subTitle:title}}</span>
</header>
</template>

<script type="text/javascript">
	// $('body').on('click','.go-back',function(){
	// 	history.go('-1');
	// });

	//引入路由文件router.js
	import Router from '../static/test_1_router.js';
	import CONSTANT from '../static/constant.js';
	export default {
		data () {
			var that = this;
			return {
				title: CONSTANT.value[that.$route.params.title]?CONSTANT.value[that.$route.params.title].name:"我的个人App",
				subTitle: that.$route.params.name
			}
		},
		methods: {
			goback(){
				Router.go(-1);
			}
		},
		watch:{
			'$route' (to, from) {
				// 对路由变化作出响应...
				// console.log(to)
				this.subTitle = to.params.name;
				this.title = CONSTANT.value[to.params.title]?CONSTANT.value[to.params.title].name:'我的个人App';
				// console.log(to.params.title);
			}
		}
	}
</script>