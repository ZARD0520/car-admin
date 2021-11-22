<template>
	<div id="history">
		<admin-slot>
			<template #title>历史缴费流水账</template>
			<template #content>
				<el-table :data="app.historyList" style="width: 100%">
					<el-table-column type="expand">
						<template #default="props">
							<el-timeline>
								<el-timeline-item
									v-for="(item, index) in props.row.carList"
									:key="index"
									:timestamp="`缴费时间：` + item.time"
									:type="item.type"
								>
									<el-card>
										<h3 class="card-car">
											车牌号：{{ item.car }}
										</h3>
										<p>收费：{{ item.price }}元</p>
									</el-card>
								</el-timeline-item>
							</el-timeline>
						</template>
					</el-table-column>
					<el-table-column label="日期" prop="date" />
				</el-table>
			</template>
		</admin-slot>
	</div>
</template>

<script>
import adminSlot from "@/components/admin-content/admin-content.vue";
import {getHistory} from "@/network/car"
import { onBeforeMount,reactive } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		onBeforeMount(async ()=>{
			//请求历史缴费
			try{
				let historyPay = await getHistory();
				console.log(historyPay);
			}catch(e){
				console.log(e);
			}
		})
		const app = reactive({
			historyList: [
				{
					date: "2010-01-01",
					carList: [
						{
							time: "10:00",
							car: "粤A88888",
							price: "9",
							type: "primary",
						},
						{
							time: "10:01",
							car: "粤A66666",
							price: "10",
							type: "primary",
						},
					],
				},
				{
					date: "2010-01-02",
					carList: [
						{
							time: "09:00",
							car: "粤A88888",
							price: "8",
							type: "primary",
						},
						{
							time: "09:31",
							car: "粤A66666",
							price: "11",
							type: "primary",
						},
					],
				},
			],
		});
		return { app };
	},
};
</script>

<style scoped>
.el-timeline {
	margin-left: 20px;
	width: 80%;
}
.card-car {
	margin-bottom: 6px;
}
</style>
