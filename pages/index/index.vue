<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->

		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<!--注意：需要把图片当成模块来使用，否则可能不会被打包-->
		<image ref="imgref" class="logo" :src="require('@/static/logo.png')"></image>
		<!--属性绑定-->
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view>{{age}}</view>
			<image v-bind:src="img"></image>
		</view>
		<!--v-if和v-for-->
		<view v-for="(item,i) in arr" :key="i">名字：{{item.name}}---年龄：{{item.age}}</view>
		<view v-if="flag">显示我</view>
		<!--点击事件-->
		<button @click="tapHandle(1,$event)">点我传参</button>
		<button @click.self="printTitle">点我不传参</button>
		<button @click.stop="title = 'ggg'">点我修改title</button>
		<button @click="title='123'">修改title</button>
		<view id="target">target</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				num: 123,
				age: 18,
				img: 'http://destiny001.gitee.io/image/monkey_02.jpg',
				arr: [{
						name: '刘能',
						age: 29
					},
					{
						name: '赵四',
						age: 39
					},
					{
						name: '宋小宝',
						age: 49
					},
					{
						name: '小沈阳',
						age: 59
					}
				],
				flag: true,
			}
		},
		onLoad() {
			console.log("onLoad")
			this.getInfo();
		},
		created() {
			console.log("created")
		},
		mounted() {
			console.log("mounted")
			//$refs在小程序平台不支持，在h5平台支持
			console.log(this.$refs.imgref, "9999999999999")
		},
		updated() {
			console.log("updated")
		},
		methods: {
			tapHandle(num, event) {
				console.log(num, event)
			},
			getInfo() {
				// 注意：想要拿到元素实例，需要在实例已经挂载到页面上才可以 
				// 需要加上.in(this)
				const query = uni.createSelectorQuery().in(this);
				query.select('#target').boundingClientRect(data => {
					console.log(data)
				}).exec();
			}

		},
		onReachBottom(){
			console.log("触底了")
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
