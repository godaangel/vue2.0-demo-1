<style lang="scss">
	
</style>

<template>
<div id="firstcomponent">
	<h1>I am a firstcomponent -- 首页. <i class="iconfont icon-shezhi"></i></h1>
	<a> written by {{ author }} </a>
	<router-link to="/first/10086">第一页</router-link>
	<router-link to="/second/godaagenl">第二页</router-link>
</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				author: "warrenyang"
			}
		}
	}
</script>