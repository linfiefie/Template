<template>
	<view>
		这只头部组件
		{{msg}}
		<button @click="msg='哈哈'">修改</button>
		<button @click="send">向父亲传递数据</button>
	</view>
</template>

<script>
	export default {
		props:['name','age'],
		data() {
			return {
				msg:"你好"
			};
		},
		updated(){
			console.log("updated~~~~~~~~~~~~")
		},
		created(){
			console.log(this.name,this.age)
		},
		methods:{
			send(){
				this.$emit("func","你想要的数据")
			}
		}
	}
</script>

<style>

</style>
