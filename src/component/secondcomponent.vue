<style lang="scss">
	
</style>

<template>
<div id="firstcomponent">
	<h1>I am a secondcomponent.</h1>
	<a> written by {{ secondAuthor }} </a>
</div>
</template>

<script type="text/javascript">
	
	export default {
		data () {
			var that = this;
			return {
				secondAuthor: that.$route.params.name
			}
		}
	}
</script>