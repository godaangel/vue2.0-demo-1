<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">菜单项</h3>
			<div class="dz-menu-list-group">
				<router-link class="dz-menu-list" to="/itemlist/二级列表项">
					<i class="iconfont icon-list dz-icon-left color-green"></i>
					<span class="dz-menu-title">带图标和跳转</span>
					<i class="iconfont icon-right dz-icon-right"></i>
				</router-link>
			</div>
			<div class="dz-menu-list-group">
				<a class="dz-menu-list" href="#">
					<span class="dz-menu-title">带跳转</span>
					<i class="iconfont icon-right dz-icon-right"></i>
				</a>
				<a class="dz-menu-list" href="javascript:void(0);">
					<span class="dz-menu-title">不带跳转</span>
				</a>
			</div>
		</div>
		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、菜单分为<span class="color-orange">带图标</span>和<span class="color-orange">不带图标</span>两种，只需要加入或删除图标元素</p>
			<p>2、不带图标的可以分为<span class="color-orange">带跳转</span>和<span class="color-orange">不带跳转</span>两种，跳转按钮也是图标元素</p>
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