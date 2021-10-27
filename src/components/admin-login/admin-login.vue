<template>
	<div id="head">
		<img src="@/assets/icon/admin.svg" class="admin" />
		<div class="login">
			<a href="javascript:;"><span>登录</span></a>
			or
		</div>
		<div class="register">
			<a href="javascript:;"><span>&nbsp;注册</span></a>
		</div>
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
#head {
	font-size: 16px;
	color: aliceblue;
	display: flex;
	flex-direction: row;
	margin-right: 20px;
}
.admin {
	height: 36px;
	width: 36px;
	margin-right: 10px;
}
a {
	text-decoration-line: none;
}
span {
	color: aliceblue;
}
span:hover {
	color: rgb(99, 99, 99);
}
</style>
