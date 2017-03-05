<style lang="scss">
	.router-link-active{
		.iconfont,span{
			color:#1ABC9C;
		}
		color:#1ABC9C;
	}
</style>

<template>
	<div class="fixed-footer" v-if="isShow">
		<div class="flex vertical-middle">
			<router-link class="flex-item link" to="/index/index">
				<i class="iconfont icon-boshi"></i>
				<span>首页</span>
			</router-link>
			<router-link class="flex-item link" to="/faxian/faxian">
				<i class="iconfont icon-zuanshi"></i>
				<span>发现</span>
			</router-link>
			<router-link class="flex-item link" to="/index/quanzi">
				<i class="iconfont icon-haoyou"></i>
				<span>圈子</span>
			</router-link>
			<router-link class="flex-item link" to="/index/mine">
				<i class="iconfont icon-shezhi"></i>
				<span>我的</span>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	import CONSTANT from '../../static/constant.js';
	export default {
		data () {
			var that = this;
			return {
				isShow: CONSTANT.value[that.$route.params.title]?CONSTANT.value[that.$route.params.title].showGuide:false
				// message: that.$route.params.message
			}
		},
		methods:{
			
		},
		watch:{
			'$route' (to, from) {
				// 对路由变化作出响应...
				this.isShow = CONSTANT.value[to.params.title]?CONSTANT.value[to.params.title].showGuide:false;
			}
		}
	}
</script>