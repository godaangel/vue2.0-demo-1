<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 class="padding-15">表单项</h3>
			<div class="dz-form-group">
				<div class="dz-form-cell dz-switch-cell">
					<div class="dz-form-head">
						<span class="dz-form-label">开关按钮</span>
					</div>
					<div class="dz-form-body text-right">
						<input type="checkbox" class="dz-switch">
					</div>
				</div>
			</div>
			<div class="dz-form-group">
				<div class="dz-form-cell">
					<div class="dz-form-head">
						<span class="dz-form-label">表单填写</span>
					</div>
					<div class="dz-form-body">
						<input type="text" class="dz-form-input" placeholder="填写数据">
					</div>
				</div>
				<div class="dz-form-cell">
					<div class="dz-form-head">
						<span class="dz-form-label">填写密码</span>
					</div>
					<div class="dz-form-body">
						<input type="password" class="dz-form-input" placeholder="填写密码">
					</div>
				</div>
			</div>
			<div class="dz-form-group">
				<div class="dz-form-cell dz-select-cell">
					<div class="dz-form-head">
						<span class="dz-form-label">大选择框</span>
					</div>
					<div class="dz-form-body dz-select-lg">
						<select class="dz-select">
							<option value="1">选择1</option>
							<option value="2">选择2</option>
						</select>
						<i class="iconfont icon-angelBottom dz-icon-right"></i>
					</div>
				</div>
				<div class="dz-form-cell dz-select-cell">
					<div class="dz-form-head">
						<span class="dz-form-label">小选择框</span>
					</div>
					<div class="dz-form-body dz-select-md">
						<select class="dz-select">
							<option value="1">选择1</option>
							<option value="2">选择2</option>
						</select>
						<i class="iconfont icon-angelBottom dz-icon-right"></i>
					</div>
				</div>
				<div class="dz-form-cell dz-select-cell">
					<div class="dz-form-head">
						<select class="dz-select dz-form-label">
							<option value="1">支付宝</option>
							<option value="2">银行卡号</option>
						</select>
						<i class="iconfont icon-angelBottom dz-icon-right"></i>
					</div>
					<div class="dz-form-body">
						<input type="text" class="dz-form-input" placeholder="填写账号">
					</div>
				</div>
			</div>

			<div class="dz-form-group text-center padding-15">
				<button class="dz-btn dz-btn-lg dz-btn-success">提交</button>
			</div>
		</div>
		<div class="demo-intro">
			<h3>样式说明</h3>
			<p>1、表单选择分为大和小，注意对应样式class的引用</p>
			<p class="details-intro">若label为选择，大小不合适时需要在源码调整</p>
			<p>2、开关按钮受text-right控制所以往右，可根据需要调整</p>
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