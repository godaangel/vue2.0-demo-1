<style lang="scss" scoped>
	@import '../../assets/css/mixins.scss';
	.dz-body{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding-bottom: 3.5rem;
		background: url('/src/assets/imgs/lol/u6.jpg');
		.match-head{
			width: 18rem;
			margin: 0 auto;
			margin-top: 1rem;
			.match-head-top{
				padding: 0.8rem 0;
				border-bottom: 1px solid #666;
				.head-img{
					height: 3.5rem;
					width: 3.5rem;
					border-radius: 50%;
					background: #ccc;
					display: inline-block;
					vertical-align: middle;
					border: 2px solid #fff;
				}
				.user-info{
					display: inline-block;
					width: 13rem;
					vertical-align: middle;
					padding-left: 0.5rem;
					.text{
						color: #fff;
						font-size: 1.1rem;
						line-height: 1.5;
						&.dz-text-overflow-1{
							font-size: 1.3rem;
						}
						span{
							vertical-align: middle;
							color: #fff;
							display: inline-block;
						}
						.level{
							background: #E54214;
							padding: 0rem 0.6rem;
							font-size: 0.875rem;
							margin-left: 0.8rem;
							border-radius: 0.3rem;
						}
					}
				}
			}
			.match-head-bottom{
				padding: 0.6rem 0.2rem;
				.text{
					color: #fff;
					font-size: 1.1rem;
					&.fr{
						float: right;
					}
				}
			}
		}
		.match-btn{
			width: 18rem;
			position: absolute;
			top: 50%;
			left: 50%;
			background: #E54214;
			height: 3rem;
			line-height: 3rem;
			text-align: center;
			font-size: 1.3rem;
			@include transformXY(-50%,-50%);
			&:active{
				background: #C0392B;
			}
		}
		.match-footer{
			width: 19rem;
			position: absolute;
			bottom: 6rem;
			left: 50%;
			@include transformX(-50%);
			@include flexbox();
			@include box-line(single);
		    @include flex-wrap(nowrap);
		    @include justify-content(space-around);
			.other-match-btn{
				@include flex-value(1);
				width: 100%;
				display: block;
				padding: 0 0.5rem;
				.dz-btn{
					width: 100%;
					display: block;
					height: 3rem;
					line-height: 3rem;
					background: #000;
					border: 1px solid #666;
					color: #fff;
					&:active{
						background: #333;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="dz-body">
		<div class="match-head">
			<div class="match-head-top">
				<div class="head-img"></div>
				<div class="user-info">
					<div class="text dz-text-overflow-1">虚空之眼虚空之眼虚空之眼</div>
					<div class="text"><span>UID: 9090909</span><span class="level">lv36</span></div>
				</div>
			</div>
			<div class="match-head-bottom">
				<span class="text">对战局数: 565</span>
				<span class="text fr">胜率: 80.0%</span>
			</div>
		</div>
		<router-link class="dz-btn dz-btn-danger match-btn" to="/match/normal">
			快速匹配
		</router-link>
		<div class="match-footer">
			<div class="other-match-btn">
				<router-link to="" class="dz-btn">高级匹配</router-link>
			</div>
			<div class="other-match-btn">
				<router-link to="" class="dz-btn">自带打手</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Modal from '../../static/modal.js';
	export default {
		data () {
			var that = this;
			return {

			}
		},
		created(){
			var that = this;
			Modal.hideLoading();
		},
		mounted(){
			this.$bus.emit('changeHeaderTitle', '匹配');
		},
		methods:{
			
		}
	}
</script>