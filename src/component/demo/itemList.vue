<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">展示列表</h3>
			<a class="dz-item-list" href="#">
				<div class="dz-item-info">
					<p class="dz-item-title dz-text-overflow-1">我是主标题，我最多为一行。我不带图片</p>
					<p class="dz-item-sub-title dz-text-overflow-2">我是副标题我是副标题，我最多为两行。我是副标题我是副标题，我最多为两行</p>
				</div>
			</a>
			<a class="dz-item-list dz-with-img" href="#">
				<div class="dz-item-img"></div>
				<div class="dz-item-info">
					<p class="dz-item-title dz-text-overflow-1">我是主标题，我带图片</p>
					<p class="dz-item-sub-title dz-text-overflow-2">我是副标题我是副标题，我最多为两行。我是副标题我是副标题，我最多为两行</p>
				</div>
			</a>
			<a class="dz-item-list dz-with-img" href="#">
				<div class="dz-item-img"></div>
				<div class="dz-item-info">
					<p class="dz-item-title dz-text-overflow-1">我是主标题</p>
					<p class="dz-item-sub-title dz-text-overflow-2">我是副标题我是副标题</p>
					<p class="dz-item-other-info">2016-03-22 16:57</p>
				</div>
			</a>
			<a class="dz-item-list dz-with-img dz-img-middle" href="#">
				<div class="dz-item-img"></div>
				<div class="dz-item-info">
					<p class="dz-item-title dz-text-overflow-1">我的图片居中</p>
					<p class="dz-item-sub-title dz-text-overflow-2">我是副标题我是副标题，我最多为两行。我是副标题我是副标题，我最多为两行</p>
					<p class="dz-item-other-info">2016-03-22 16:57</p>
				</div>
			</a>
		</div>
		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、列表样式分为<span class="color-orange">带图片</span>和<span class="color-orange">不带图片</span>两种；</p>
			<p class="details-intro">其中，<span class="color-orange">带图片</span>的列表需要加上样式Class【dz-with-img】；</p>
			<p>2、带图片的样式又分为图片保持在<span class="color-orange">上部</span>以及<span class="color-orange">图片居中</span>两种；</p>
			<p class="details-intro"><span class="color-orange">图片居中</span>的列表需要加上样式Class【dz-img-middle】；</p>
			<p>3、该列表高度是自适应列表里面内容的，可以修改源码样式来调整高度；</p>
			<p>4、【dz-text-overflow-1】和【dz-text-overflow-2】分别表示该行文字仅能显示一行和两行，超出部分用省略号代替。</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			// alert(this.$route.params.name)
			return {
				author: "warrenyang"
			}
		}
	}
</script>