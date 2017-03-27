<style lang="scss" scoped>
	.dz-body{
		padding-bottom: 3.5rem;
	}
</style>

<template>
	<router-link class="dz-item-list dz-with-img" :to="{ name: 'newsDetail', params: { title: item.title, id: item.id }}">
		<div class="dz-item-img"></div>
		<div class="dz-item-info">
			<p class="dz-item-title dz-text-overflow-1">{{item.title}}</p>
			<p class="dz-item-sub-title dz-text-overflow-2">{{item.subTitle}}</p>
			<p class="dz-item-other-info">{{item.createTime}}</p>
		</div>
	</router-link>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {}
		},
		props:{
			item:[Object]
		},
		created(){
			
		},
		mounted(){
			// this.$bus.emit('changeHeaderTitle', '我是改变新闻');
		},
		methods:{
			
		}
	}
</script>