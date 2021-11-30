<template>
	<div id="head">
		<img src="@/assets/icon/admin.svg" class="admin" />
		<div v-if="status">{{adminName}}</div>
		<div v-show="!status">
			<div class="login">
			<a href="javascript:;" @click="changeLogin"><span>登录</span></a>
			or
			</div>
			<div class="register">
				<a href="javascript:;" @click="changeRegister"><span>&nbsp;注册</span></a>
			</div>
		</div>
		<l-dialog />
		<r-dialog />
	</div>
</template>

<script>
import { useStore } from "vuex";
import { ref,onBeforeMount } from "vue";
import lDialog from "./login-dialog.vue";
import rDialog from "./register-dialog.vue"

export default {
	components: {
		lDialog,
		rDialog,
	},
	setup() {
		const store = useStore();
		const status = ref('');
		const adminName = ref('');
		
		// 登录态和账号
		onBeforeMount(()=>{
			status.value = localStorage.getItem('token')
			adminName.value = localStorage.getItem('user')
		})

		//函数区
		function changeLogin() {
			store.commit("changeLogin", true);
		}
		function changeRegister() {
			store.commit("changeRegister",true);
		}
		return {
			changeLogin,changeRegister,status,adminName
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
