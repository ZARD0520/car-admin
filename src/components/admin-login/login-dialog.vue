<template>
    <el-dialog v-model="loginVisible" title="登录">
        <el-form :model="form">
            <el-form-item label="用户名">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="loginVisible = false">返回</el-button>
                <el-button type="primary" @click="loginVisible = false">登录</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { reactive } from 'vue-demi'
export default {
    setup() {
        const state = reactive({
            loginVisible:false,
            form:{
                user:'',
                password:''
            }
        })
    },
}
</script>

<style scoped>

</style>