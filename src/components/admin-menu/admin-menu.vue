<template>
	<div id="menu">
		<el-menu
			background-color="aliceblue"
			text-color="#000"
			default-active="1"
		>
			<el-menu-item @click="jump('today')" index="1">
				<i class="el-icon-document"></i>
				<span>今日缴费记录</span>
			</el-menu-item>
			<el-menu-item @click="jump('history')" index="2">
				<i class="el-icon-document"></i>
				<span>历史缴费记录</span>
			</el-menu-item>
			<el-menu-item @click="jump('car')" index="3">
				<i class="el-icon-document"></i>
				<span>社区车位状态</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import { reactive } from "vue-demi";
import { useRouter } from 'vue-router'
export default {
	setup() {
		const router = useRouter()
		function jump(name){
			if(name==='today'){
				router.push('/today')
			}else if(name==='history'){
				router.push('/history')
			}else if(name==='car'){
				router.push('/car')
			}
		}
		return { jump }
	},
};
</script>

<style scoped>
#menu {
	height: 100%;
}
</style>
