<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">滑动菜单</h3>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-info">左侧滑出</button>
			</div>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-self">上部滑出</button>
			</div>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-warning">下部滑出</button>
			</div>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-danger">右侧滑出</button>
			</div>
		</div>

		<div>
		<!-- left-menu start -->
		<div class="dz-slide-menu dz-left-menu">
			<div class="dz-slide-menu-body">
				<p style="padding-top: 4rem;">我是左侧滑出框</p>
			</div>
			<div class="dz-slide-menu-bg"></div>
		</div>
		<!-- left-menu end -->

		<!-- top-menu start -->
		<div class="dz-slide-menu dz-top-menu">
			<div class="dz-slide-menu-body">
				<p style="padding-top: 4rem;">我是上部滑出框</p>
			</div>
			<div class="dz-slide-menu-bg"></div>
		</div>
		<!-- top-menu end -->

		<!-- bottom-menu start -->
		<div class="dz-slide-menu dz-bottom-menu">
			<div class="dz-slide-menu-body">
				<p style="padding-top: 4rem;">我是下部滑出框</p>
			</div>
			<div class="dz-slide-menu-bg"></div>
		</div>
		<!-- bottom-menu end -->

		<!-- right-menu start -->
		<div class="dz-slide-menu dz-right-menu">
			<div class="dz-slide-menu-body">
				<p style="padding-top: 4rem;">我是右侧滑出框</p>
			</div>
			<div class="dz-slide-menu-bg"></div>
		</div>
		<!-- right-menu end -->
		</div>

		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、滑出框高度和宽度可以自定义</p>
			<p>2、必须class dz-slide-menu 默认为左侧滑出框</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		mounted(){
			$(".dz-form-group").on("click",function(){
				var index = $(this).index()-1;
				$(".dz-slide-menu").eq(index).addClass("show");
			});
			$(".dz-slide-menu-bg").on("click",function(){
				$(this).parent().removeClass("show");
			});
		}
	}
</script>