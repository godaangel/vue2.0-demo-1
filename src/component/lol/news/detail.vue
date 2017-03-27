<style lang="scss" scoped>
	
</style>

<template>
	<div class="dz-body">
		<p class="text-center">{{title}}</p>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../../static/modal.js';
	export default {
		data () {
			Modal.loading();
			var that = this;
			console.log('id: '+that.$route.params.id);
			console.log('title: '+that.$route.params.title);
			return {
				id: that.$route.params.id,
				title: that.$route.params.title,
				detail: {}
			}
		},
		created(){
			var that = this;
			setTimeout(function(){
				Modal.hideLoading();
			},500);
		},
		mounted(){
			this.$bus.emit('changeHeaderTitle', this.title);
		},
		methods:{
			
		}
	}
</script>