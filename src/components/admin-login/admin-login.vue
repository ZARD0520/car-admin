<template>
	<div id="head">
		<img src="@/assets/icon/admin.svg" class="admin" />
		<div class="login">
			<a href="javascript:;" @click="changeLogin"><span>登录</span></a>
			or
		</div>
		<div class="register">
			<a href="javascript:;" @click="changeRegister"><span>&nbsp;注册</span></a>
		</div>
		<l-dialog />
		<r-dialog />
	</div>
</template>

<script>
import { useStore } from "vuex";
import lDialog from "./login-dialog.vue";
import rDialog from "./register-dialog.vue"

export default {
	components: {
		lDialog,
		rDialog,
	},
	setup() {
		const store = useStore();

		//函数区
		function changeLogin() {
			store.commit("changeLogin", true);
		}
		function changeRegister() {
			store.commit("changeRegister",true);
		}
		return {
			changeLogin,changeRegister
		};
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
