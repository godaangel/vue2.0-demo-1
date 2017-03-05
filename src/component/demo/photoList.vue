<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">图片列表</h3>
			<div class="dz-photo-list dz-flex-wrap">
				<div class="dz-flex-con">
					<div class="dz-photo"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo dz-thumb"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo dz-thumb"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo dz-photo-sm dz-thumb"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo dz-photo-sm"></div>
				</div>
				<div class="dz-flex-con">
					<div class="dz-photo dz-photo-sm"></div>
				</div>
			</div>
		</div>
		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、图片使用flex布局，大小可自行调节</p>
			<p>2、将图片作为div的背景设置，通过<span class="color-orange">cover</span>来控制图片居中自适应</p>
			<p class="details-intro">如要替换则替换background属性即可</p>
			<p>3、图片有两种大小，通过dz-photo-sm来加载小图，不加则是大图</p>
			<p>4、若加入dz-thumb则表示带边框</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		}
	}
</script>