<template>
	<div id="pay">
		<admin-slot>
			<template #title>今日缴费流水账</template>
			<template #content>
				<div class="pay-tree">
					<el-timeline>
						<el-timeline-item
							v-for="(item, index) in todayList"
							:key="index"
							:timestamp="!item.hasPay?(`未缴费`):(`缴费时间：${item.payTime}`)"
							:type="item.type"
						>
							<el-card>
								<h3 class="card-car">车牌号：{{ item.carNum }}</h3>
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
import { onBeforeMount,reactive,ref } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		// 今日数据对象
		const todayList = ref({});

		onBeforeMount(async ()=>{
			//请求今日缴费
			try{
				let date = new Date()
				let todayPay = await getToday({date:date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()});
				//时间数据处理
				todayPay.data.data[0].contentList.forEach(item => {
					if(item.payTime){
						let time = new Date(parseInt(item.payTime))
						item.payTime = time.getHours()+':'+time.getMinutes()
					}
				});
				todayList.value = todayPay.data.data[0].contentList;
				console.log(todayList.value);
			}catch(e){
				console.log(e);
			}
		})
		return { todayList };
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
