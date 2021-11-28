<template>
	<div id="history">
		<admin-slot>
			<template #title>历史缴费流水账</template>
			<template #content>
				<el-table :data="historyList" style="width: 100%">
					<el-table-column type="expand">
						<template #default="props">
							<el-timeline>
								<el-timeline-item
									v-for="(item, index) in props.row.contentList"
									:key="index"
									:timestamp="item.hasPay?(`缴费时间：` + item.payTime):'未缴费'"
									:type="'primary'"
								>
									<el-card>
										<h3 class="card-car">
											车牌号：{{ item.carNum }}
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
import { onBeforeMount,reactive,ref } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		// 历史数据对象
		const historyList = ref([]);

		onBeforeMount(async ()=>{
			//请求历史缴费
			try{
				const {data} = await getHistory();
				data.data.forEach(item => {
					item.contentList.forEach(cItem => {
						if(cItem.payTime){
							let date = new Date(parseInt(cItem.payTime))
							cItem.payTime =  (date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
							console.log(cItem.payTime);
						}
					})
				});
				//赋值
				historyList.value = data.data;
				console.log(data);
			}catch(e){
				console.log(e);
			}
		})

		return { historyList };
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
