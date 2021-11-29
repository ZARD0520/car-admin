<template>
	<el-dialog v-model="registerVisible" title="注册" @close="back" width="400px">
		<el-form :model="form">
            <el-form-item label="手机号">
                <el-input 
                    v-model="form.phone"
                    placeholder="请输入手机号"
                    >
                </el-input>
            </el-form-item>
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
				<el-button type="primary" @click="register">注册</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script>
import { useStore } from "vuex";
import { toRefs, computed } from "vue";
import { reactive } from "vue-demi";
import { registerAdmin } from "../../network/login";

export default {
	name: "registerDialog",
	setup() {
		const store = useStore();
		const registerVisible = computed(() => store.state.registerDialog);
		const state = reactive({
			form: {
                phone:"",
				user: "",
				password: "",
			},
		});

		//返回
		function back() {
			store.commit("changeRegister", false);
		}
        //注册请求
		async function register() {
            const obj = state.form
            try{
				const { data } = await registerAdmin(obj)
				alert(data.message)
			}catch(e){
				console.log(e);
			}
            store.commit("changeRegister", false);
            state.form = {
                phone:"",
				user: "",
				password: "",
            }
			console.log(obj);
		}
		return { ...toRefs(state), registerVisible, back, register };
	},
};
</script>

<style scoped>
</style>
