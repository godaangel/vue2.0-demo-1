<style lang="scss">
	.router-link-active{
		.iconfont,span{
			color:#000;
		}
		color:#000;
	}
</style>

<template>
	<div class="fixed-footer" v-if="showGuide">
		<div class="flex vertical-middle">
			<router-link class="flex-item link" to="/match/match">
				<i class="iconfont icon-zuanshi"></i>
				<span>匹配</span>
			</router-link>
			<router-link class="flex-item link" to="/news/news">
				<i class="iconfont icon-list"></i>
				<span>新闻</span>
			</router-link>
			<router-link class="flex-item link" to="/video/video">
				<i class="iconfont icon-photo"></i>
				<span>视频</span>
			</router-link>
			<router-link class="flex-item link" to="/mine/mine">
				<i class="iconfont icon-haoyou"></i>
				<span>我的</span>
			</router-link>
		</div>
	</div>
</template>

<script type="text/javascript">
	// import CONSTANT from '../../static/constant.js';
	export default {
		data() {
				var that = this;
				return {
					showGuide: that.$route.meta ? that.$route.meta.showGuide : false
				}
			},
			methods: {

			},
			watch: {
				'$route' (to, from) {
					// 对路由变化作出响应...
					this.showGuide = (to.matched[0].meta ? to.matched[0].meta.showGuide : false);
				}
			}
	}
</script>