<template>
	<view>
		消息页面
		<button @click="send">点我发送请求</button>
		<view v-if="movieData">
			<text>电影名字：{{movieData.originalName}}</text>
			<view>
				导演：
				<text v-for="item in movieData.director">
					{{item.data[0].name}}
				</text>
			</view>
			<view>电影信息
				{{movieData.data[0].genre}}
				{{movieData.data[0].language}}
				{{movieData.data[0].description}}
				{{movieData.data[0].country}}
			</view>
		</view>
		<button @click="chooseImg" type="primary">上传图片</button>
		<view>
			<image v-for="item in imgArr" :src="item" :key="index"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				movieData: null,
				imgArr: []
			};
		},
		methods: {
			send() {
				uni.request({
					url: "https://movie.querydata.org/api?id=1302425",
					success: (res) => {
						console.log(res)
						const resobj = res.data;
						this.movieData = resobj;
					}
				})
			},
			chooseImg() {
				uni.chooseImage({
					count: 9,
					success: res => {
						this.imgArr = res.tempFilePaths
						console.log(this.imgArr)
					}
				})
			}
		}
	}
</script>

<style lang="less">

</style>
