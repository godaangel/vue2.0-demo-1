<style lang="scss">
	
</style>

<template>
	<div>
		<div class="dz-body">
			<h3 style="font-size: 1rem;" class="padding-15 color-orange">欢迎使用DZUI</h3>
			<p style="font-size: 1rem;padding:0rem 1rem 1rem 1rem;line-height: 1.6;">DZUI封装了移动端web开发时所需要用到的一些基本的样式，用户可以通过这些样式进行快速开发。</p>
			<div class="dz-menu-list-group" v-for="(group,index) in menuList">
				<router-link class="dz-menu-list" :to="item.href" v-for="(item,index) in group">
					<i class="iconfont dz-icon-left color-green" :class="item.icon"></i>
					<span class="dz-menu-title">{{item.name}}</span>
					<i class="iconfont icon-right dz-icon-right"></i>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			var menuList = [
				[
					{
						name:'展示列表',
						href: '/itemlist/展示列表',
						icon: 'icon-list'
					},
					{
						name:'图片列表',
						href: '/photolist/图片列表',
						icon: 'icon-photo'
					}
				],
				[
					{
						name:'滑动菜单',
						href: '/slidemenu/滑动菜单',
						icon: 'icon-menu-slide'
					},
					{
						name:'菜单项',
						href: '/menulist/菜单项',
						icon: 'icon-tags'
					},
					{
						name:'表单项',
						href: '/form/表单项',
						icon: 'icon-edit'
					}
				],
				[
					{
						name:'按钮组',
						href: '/buttonlist/按钮组',
						icon: 'icon-position'
					}
				],
				[
					{
						name:'弹出框',
						href: '/pop/弹出框',
						icon: 'icon-message'
					},
					{
						name:'Toast',
						href: '/toast/Toast',
						icon: 'icon-biaoxingfill'
					},
					{
						name:'聊天界面',
						href: '/chatbox/聊天界面',
						icon: 'icon-chatboxworking'
					},
					{
						name:'checkbox & radio',
						href: '/buttonlist/checkbox&radio',
						icon: 'icon-boshi'
					}
				]
			]
			return {
				author: "warrenyang",
				menuList: menuList
			}
		}
	}
</script>