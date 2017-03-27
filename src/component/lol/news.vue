<style lang="scss" scoped>
	.dz-body{
		padding-bottom: 3.5rem;
	}
</style>

<template>
	<div class="dz-body">
		<template v-for="item in itemList">
			<news-item :item="item"></news-item>
		</template>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../static/modal.js';
	import NewsItem from './news/newsItem.vue';
	export default {
		data () {
			var that = this;
			return {
				itemList:[
					
				]
			}
		},
		components: { 
		    NewsItem
		},
		created(){
			var that = this;
			setTimeout(function(){
				that.itemList = [{title:'大浪淘沙', id: 1, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'恭喜', id: 2, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'喜大普奔，喜气临门', id: 3, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'4', id: 101, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'5', id: 101, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'6', id: 101, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'},
					{title:'7', id: 101, subTitle:'我是副标题我是副标题', createTime:'2016-03-22 16:57'}];
				Modal.hideLoading();
			},100);
		},
		mounted(){
			this.$bus.emit('changeHeaderTitle', '新闻');
		},
		methods:{
			
		}
	}
</script>