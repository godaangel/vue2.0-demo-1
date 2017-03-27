<style lang="scss" scoped>
	
</style>

<template>
	<div class="dz-body">
		<router-link class="dz-btn dz-btn-danger next-step" to="/match/match">
			完成匹配
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
			this.$bus.emit('changeHeaderTitle', '快速匹配');
		},
		methods:{
			
		}
	}
</script>