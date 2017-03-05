<style lang="scss">

</style>

<template>
	<div class="dz-body">
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

		<div class="dz-form-group">
			<div class="dz-form-cell">
				<div class="dz-form-head">
					<span class="dz-form-label">checkbox</span>
				</div>
				<div class="dz-form-body check">
					<label class="dz-single-cr">
						<input type="checkbox" class="dz-checkbox">
						<label>中国</label>
					</label>
					<label class="dz-single-cr">
						<input type="checkbox" class="dz-checkbox">
						<label>美国</label>
					</label>
					<label class="dz-single-cr">
						<input type="checkbox" class="dz-checkbox">
						<label>韩国</label>
					</label>
					<label class="dz-single-cr">
						<input type="checkbox" class="dz-checkbox">
						<label>日本</label>
					</label>
					<label class="dz-single-cr">
						<input type="checkbox" class="dz-checkbox">
						<label>火星环岛海</label>
					</label>
				</div>
			</div>
			<div class="dz-form-cell">
				<div class="dz-form-head">
					<span class="dz-form-label">radio</span>
				</div>
				<div class="dz-form-body">
					<label class="dz-single-cr block">
						<input type="radio" name="radios" class="dz-radio">
						<label>中国</label>
					</label>
					<label class="dz-single-cr">
						<input type="radio" name="radios" class="dz-radio">
						<label>美国</label>
					</label>
				</div>
			</div>
		</div>

		<div class="dz-form-group text-center padding-15">
			<button class="dz-btn dz-btn-lg dz-btn-success">提交</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {
				
			}
		},
		mounted(){
			setTimeout(function(){
				Modal.hideLoading();
			},1000);
		},
		methods:{
			
		}
	}
</script>