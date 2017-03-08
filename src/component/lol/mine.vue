<style lang="scss" scoped>
	.dz-body{
		padding-bottom: 3.5rem;
	}
</style>

<template>
	<div class="dz-body">
		<p>我是个人中心</p>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {

			}
		},
		created(){
			var that = this;
			Modal.hideLoading();
		},
		mounted(){
		},
		methods:{
			
		}
	}
</script>