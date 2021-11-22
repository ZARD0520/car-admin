<template>
	<div id="pay">
		<admin-slot>
			<template #title>今日缴费流水账</template>
			<template #content>
				<div class="pay-tree">
					<el-timeline>
						<el-timeline-item
							v-for="(item, index) in app.payList"
							:key="index"
							:timestamp="`缴费时间：` + item.timestamp"
							:type="item.type"
						>
							<el-card>
								<h3 class="card-car">车牌号：{{ item.car }}</h3>
								<p>收费：{{ item.price }}元</p>
							</el-card>
						</el-timeline-item>
					</el-timeline>
				</div>
			</template>
		</admin-slot>
	</div>
</template>

<script>
import adminSlot from "@/components/admin-content/admin-content.vue";
import {getToday} from "@/network/car"
import { onBeforeMount,reactive } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		onBeforeMount(async ()=>{
			//请求今日缴费
			try{
				let todayPay = await getToday();
				console.log(todayPay);
			}catch(e){
				console.log(e);
			}
		})
		const app = reactive({
			payList: [
				{
					car: "粤A66666",
					price: "10",
					timestamp: "13:00",
					type: "primary",
				},
				{
					car: "粤A66666",
					price: "10",
					timestamp: "13:00",
					type: "primary",
				},
			],
		});
		return { app };
	},
};
</script>

<style scoped>
.pay-tree {
	width: 80%;
	margin: 0 auto;
}
.card-car {
	margin-bottom: 10px;
}
</style>
