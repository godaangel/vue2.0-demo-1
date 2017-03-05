<style lang="scss" scoped>
	.dz-body{
		padding-bottom: 3.5rem;
	}
</style>

<template>
	<div class="dz-body">
		<div class="dz-photo-list dz-flex-wrap">
			<div class="dz-flex-con" v-for="item in itemList">
				<div class="dz-photo"></div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {
				itemList:[
					{title:'发现--北京', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'发现--北京', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'发现--北京', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'}
				]
			}
		},
		mounted(){
			setTimeout(function(){
				Modal.hideLoading();
			},0);
		},
		methods:{
			
		}
	}
</script>