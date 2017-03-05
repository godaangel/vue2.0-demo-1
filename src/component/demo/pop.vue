<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">弹出框</h3>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-info">弹出提示框alert</button>
			</div>
			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-md dz-btn-self">自定义弹出框</button>
			</div>
		</div>
		<!-- pop start -->
		<div id="demo-1" class="dz-pop" style="display: none;">
			<div class="dz-pop-body">
				<div class="dz-pop-head">系统提示</div>
				<div class="dz-pop-middle">
					<p>这是提示内容</p>
				</div>
				<div class="dz-pop-foot">
					<span class="dz-pop-comfirm">确定</span>
				</div>
			</div>
			<div class="dz-pop-bg"></div>
		</div>
		<!-- pop end -->
		<!-- pop start -->
		<div id="demo-2" class="dz-pop" style="display: none;">
			<div class="dz-pop-body">
				<div class="dz-pop-head">自定义弹窗</div>
				<div class="dz-pop-middle">
					<p>这里可以自定义</p>
					<p>这里可以自定义</p>
					<p>这里可以自定义</p>
				</div>
				<div class="dz-pop-foot">
					<span class="dz-pop-comfirm">确定</span>
					<span class="dz-pop-cancel">取消</span>
				</div>
			</div>
			<div class="dz-pop-bg"></div>
		</div>
		<!-- pop end -->

		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、弹窗可以使用alert弹窗，也可以<span class="color-orange">自定义弹窗内容</span>，包括输入框等</p>
			<p class="details-intro">需配合js使弹窗展示，原生或框架都可</p>
			<p>2、点击确定后的事件需要自定义</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				
			}
		},
		mounted() {
			$(".dz-btn-info").on("click",function(){
				$("#demo-1").show();
			});
			$("#demo-1 .dz-pop-comfirm").on("click",function(){
				$("#demo-1").hide();
			});

			$(".dz-btn-self").on("click",function(){
				$("#demo-2").show();
			});
			$("#demo-2 .dz-pop-comfirm").on("click",function(){
				$("#demo-2").hide();
			});
			$("#demo-2 .dz-pop-cancel").on("click",function(){
				$("#demo-2").hide();
			});
		}
	}
</script>