<template>
	<div id="car">
		<admin-slot>
			<template #title>社区车位情况</template>
			<template #content>
				<div v-for="(item,index) in parking" :key="index">
					<div>{{item.parklot}}号停车位</div>
					<el-card :body-style="{ padding: '5px',display:'flex','flex-direction':'row' }">
						<div class="card" v-if="item.hasCar">
							<img class="card-img" src="@/assets/image/car.jpg" alt="" />
							<div class="card-text">
								<p>{{item.carNum}}</p>
								<p>时长：{{parseInt(-(parseInt(item.startTime)-parkTime)/60000)}}分钟</p>
								<p>预计费用：{{parseInt(-(parseInt(item.startTime)-parkTime)/60000)-30 > 0 ? parseInt(-(parseInt(item.startTime)-parkTime)/1000000):0}}元</p>
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
import { computed, onBeforeMount, ref } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		// 停车场状态对象
		const parking = ref({})

		const parkTime = computed(()=>{
			var time = Date.now()
			if(parking.value){
				console.log(-(parseInt(parking.value[3].startTime)-time)/60000);
				console.log(time);
				return time
			}
		})

		// 生命周期
		onBeforeMount(async ()=>{
			//请求停车场状态
			try{
				const {data} = await getParking();
				parking.value = data.data
				console.log(parking);
			}catch(e){
				console.log(e);
			}
		})
		
		return { parking,parkTime };
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
