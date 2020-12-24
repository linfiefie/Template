<template>
	<view>
		<!-- #ifdef H5 -->
		<!--在h5显示-->
		<view>h5</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<!--在微信小程序显示-->
		<view>微信</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-ALIPAY -->
		<!--在支付宝小程序显示-->
		<view>支付</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad () {
		  //#ifdef MP-WEIXIN
		  console.log('微信小程序')
		  //#endif
		  //#ifdef H5
		  console.log('h5页面')
		  //#endif
		}
	}
</script>

<style>
/* #ifdef H5 */
view{
  height: 100px;
  line-height: 100px;
  background: red;
}
/* #endif */

/* #ifdef MP-WEIXIN */
view{
  height: 100px;
  line-height: 100px;
  background: green;
}
/* #endif */
</style>
