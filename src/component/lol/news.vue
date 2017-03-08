<style lang="scss" scoped>
	.dz-body{
		padding-bottom: 3.5rem;
	}
</style>

<template>

	<div class="dz-body">
		<router-link v-for="item in itemList" class="dz-item-list dz-with-img" :to="{ name: '', params: { name: item.title }}">
			<div class="dz-item-img"></div>
			<div class="dz-item-info">
				<p class="dz-item-title dz-text-overflow-1">{{item.title}}</p>
				<p class="dz-item-sub-title dz-text-overflow-2">{{item.subTitle}}</p>
				<p class="dz-item-other-info">{{item.createTime}}</p>
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {
				itemList:[
					
				]
			}
		},
		created(){
			var that = this;
			setTimeout(function(){
				that.itemList = [{title:'1', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'1234', subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'}];
				Modal.hideLoading();
			},100);
		},
		mounted(){
		},
		methods:{
			
		}
	}
</script>