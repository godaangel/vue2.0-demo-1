<style lang="scss" scoped>
	.dz-body{
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
	}
</style>

<template>
	<div class="dz-body">
		<router-link class="dz-btn dz-btn-danger next-step" to="/match/normal/stepone">
			下一步
		</router-link>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {

			}
		},
		created(){
			var that = this;
			// Modal.hideLoading();
		},
		mounted(){
			this.$bus.emit('changeHeaderTitle', '选择角色');
		},
		methods:{
			
		}
	}
</script>