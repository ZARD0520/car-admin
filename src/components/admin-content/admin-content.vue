<template>
	<div id="a-content">
		<div class="title"><slot name="title"></slot></div>
		<div class="content"><slot name="content"></slot></div>
	</div>
</template>

<script>
import { reactive } from "vue-demi";
export default {
	setup() {
		const app = reactive({});
	},
};
</script>

<style scoped>
#a-content {
	height: calc(100vh - 100px);
	background-color: #fff;
}
.title {
	font-size: 28px;
	color: rgb(120, 120, 120);
	padding-top: 10px;
	padding-bottom: 20px;
}
.content{
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
}
</style>
