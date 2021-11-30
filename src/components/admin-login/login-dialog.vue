<template>
	<el-dialog v-model="loginVisible" title="登录" @close="back" width="400px">
		<el-form :model="form">
			<el-form-item label="用户名">
				<el-input
					v-model="form.user"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input
					v-model="form.password"
					show-password
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="back">返回</el-button>
				<el-button type="primary" @click="login">登录</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
import { useStore } from "vuex";
import { toRefs, computed } from "vue";
import { onBeforeMount,reactive } from "vue-demi";
import { loginAdmin } from "../../network/login";

export default {
	name: "loginDialog",
	setup() {
		const store = useStore();
		const loginVisible = computed(() => store.state.loginDialog);
		const state = reactive({
			form: {
				user: "",
				password: "",
			},
		});

		//函数区
		function back() {
			store.commit("changeLogin", false);
		}
		async function login() {
			try{
				const {data} = await loginAdmin(state.form)
				localStorage.setItem('token',data.token)
				localStorage.setItem('user',data.username)
				console.log(data);
			}catch(e){
				console.log(e);
			}
			store.commit("changeLogin", false);
			state.form = {
				user: "",
				password: "",
            }
			location.reload()
		}
		return { ...toRefs(state), loginVisible, back, login };
	},
};
</script>

<style scoped>
</style>
