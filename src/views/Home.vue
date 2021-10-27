<template>
	<div class="home">
		<el-container>
			<el-header>
				<aHeader />
			</el-header>
			<el-aside>
				<aMenu />
			</el-aside>
			<el-main>
				<router-view/>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import aHeader from "@/components/admin-header/admin-header.vue";
import aMenu from "@/components/admin-menu/admin-menu.vue";

export default {
	components: {
		aHeader,
		aMenu,
	},
	setup() {
		//const data = reactive({})
	},
};
</script>

<style scoped>
.home {
	height: 100%;
}
.el-container {
	height: 100%;
}
.el-header {
	height: 100px;
}
.el-aside {
	height: 100%;
	margin-left: 20px;
}
</style>
