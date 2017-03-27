<style lang="scss">
	.error-title{
		margin-top: 1rem;
		padding: 1rem;
		font-size: 1.5rem;
	}
	.error-message{
		padding: 1rem;
		line-height: 1.5;
		font-size: 1rem;
		a{
			font-weight: bold;
			color: #1ABC9C;
		}
	}
</style>

<template>
	<div class="dz-body text-center">
		<h2 class="error-title">{{message}}</h2>
		<p class="error-message">您可以 <a @click="goback()">返回上一页</a><br>或者<br><router-link to="/">返回首页</router-link></p>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../static/modal.js';
	export default {
		data () {
			var that = this;
			return {
				message: that.$route.params.message
			}
		},
		methods:{
			goback(){
				history.go(-1);
			}
		},
		mounted(){
			// console.log('----')
			setTimeout(function(){
				Modal.hideLoading();
			},0);
			this.$bus.emit('changeHeaderTitle', '找不到页面');
		}
	}
</script>