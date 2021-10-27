<template>
	<div id="a-content">
		<slot name="title" class="title"></slot>
		<slot name="content" class="content"></slot>
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
}
</style>
