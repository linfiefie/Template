<template>
	<view>
		<Head :name="'张三'" :age="123" @func="receiveFromChild"></Head>
		<text>这是城市页面</text>
		<text>{{msg | msgFormat('1','2')}}</text>
		<view>当前城市 {{city}}</view>
		<view>{{mcity}}</view>
		<button @click="changeCity('苏州')">修改城市</button>
	</view>
</template>

<script>
	import Head from '@/components/head/head.vue'
	//使用mapState mapMutations mapGetters映射vuex数据到组件
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				msg: '曾经，我也是一个单纯的少年，单纯的我，傻傻的问，谁是世界上最单纯的男人'
			};
		},
		//过滤器在小程序中可以使用，但是自定义指令在小程序中不可以使用
		filters: {
			msgFormat: function(msg, arg, arg2) {
				return msg.replace(/少年/g, arg + arg2)
			}
		},
		components: {
			Head
		},
		methods: {
			receiveFromChild(data) {
				console.log("收到孩子的数据", data)
			},
			...mapMutations({
				changeCity:'changeCity'
			})
		},
		computed: {
			...mapState({
				city:'city'
			}),
			...mapGetters({
				mcity:'mcity'
			})
		},
		onPullDownRefresh(){
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},5000)
		}
	}
</script>

<style lang="less">

</style>
