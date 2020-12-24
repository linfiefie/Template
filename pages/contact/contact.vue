<template>
	<view>
		联系人页面
		<uni-badge text="1"></uni-badge>
		<uni-badge text="2" type="success"></uni-badge>
		<uni-badge text="3" type="primary" :inverted="true"></uni-badge>
		<uni-grid :column="3">
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
			<uni-grid-item>
				<text class="text">文本</text>
			</uni-grid-item>
		</uni-grid>
		<span class="iconfont icon-icon_zhanghao"></span>
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-ui/uni-badge/uni-badge.vue";
	import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-ui/uni-grid-item/uni-grid-item.vue";
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			uniBadge,
			uniGrid,
			uniGridItem
		}
	}
</script>

<style lang="scss">
	.box{
		.xx{}
	}
</style>
