<template>
	<div id="head">
		<div class="logo-name">
			<img src="@/assets/icon/car.png" alt="" />
			智慧车管后台管理
		</div>
		<div class="login">
			<login />
		</div>
	</div>
</template>

<script>
import { reactive } from "vue-demi";
import login from "../admin-login/admin-login.vue";
export default {
	components: {
		login,
	},
	setup() {
		const app = reactive({});
	},
};
</script>

<style scoped>
#head {
	height: 100%;
	background-color: rgb(0, 170, 128);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.logo-name {
	color: aliceblue;
	font-size: 30px;
	margin-left: 40px;
	display: flex;
	align-items: center;
}
img {
	height: 80px;
	width: 80px;
	margin-right: 10px;
}
</style>
