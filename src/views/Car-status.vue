<template>
	<div id="car">
		<admin-slot>
			<template #title>社区车位情况</template>
			<template #content>
				<div v-for="(item,index) in app.parkList" :key="index">
					<div>{{index+1}}号停车位</div>
					<el-card :body-style="{ padding: '5px',display:'flex','flex-direction':'row' }">
						<div class="card" v-if="item.status">
							<img class="card-img" src="@/assets/image/car.jpg" alt="" />
							<div class="card-text">
								<p>{{item.car}}</p>
								<p>时长：{{item.time}}分钟</p>
								<p>预计费用：{{item.price}}元</p>
							</div>
						</div>
						<div class="card-else" v-else>
							空闲
						</div>
					</el-card>
				</div>
			</template>
		</admin-slot>
	</div>
</template>

<script>
import adminSlot from "@/components/admin-content/admin-content.vue";
import { getParking } from "@/network/car"
import { onBeforeMount, reactive } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		onBeforeMount(async ()=>{
			//请求停车场状态
			try{
				let parking = await getParking();
				console.log(parking);
			}catch(e){
				console.log(e);
			}
		})
		const app = reactive({
			parkList: [
				{
					car: "粤A66666",
					time: "26",
					price: "5",
					status:true
				},
				{
					car: "粤A66668",
					time: "59",
					price: "10",
					status:true
				},
				{
					status:false
				},
				{
					car: "粤A66668",
					time: "59",
					price: "10",
					status:true
				},
			],
		});
		return { app };
	},
};
</script>

<style scoped>
.el-card {
	width: 300px;
	height: 250px;
	margin-left:16px;
	margin-bottom:10px;
	text-align: left;
}
.card{
	display: flex;
	flex-direction: row;
}
.card-img {
	height: 240px;
	width: 160px;
	margin-right:10px;
}
.card-else {
	width: 100%;
	font-size: 36px;
	color: rgb(0, 124, 128);
	text-align: center;
	margin-top:100px;
}
</style>
