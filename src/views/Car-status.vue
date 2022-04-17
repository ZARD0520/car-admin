<template>
	<div id="car">
		<admin-slot>
			<template #title>
				社区车位情况
				<div class="search">
					<input type="text" placeholder="请输入停车位号码" v-model="parkNumber">
					<button @click="search">搜索</button>
				</div>
			</template>
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
import { getParking,searchParking } from "@/network/car"
import { computed, onBeforeMount, ref } from "vue-demi";
export default {
	components: {
		adminSlot,
	},
	setup() {
		// 停车场状态对象
		const parking = ref({})
		// 停车场号码
		const parkNumber = ref('')

		const parkTime = computed(()=>{
			var time = Date.now()
			if(parking.value){
				return time
			}
		})

		// 搜索
		const search = async ()=>{
			try{
				const {data} = await searchParking({parklot:parkNumber.value})
				if(!data.dataArr){
					return alert('要搜索的车位不存在')
				}
				const arr = data.dataArr.filter((item)=>{
					if(item!==undefined && item!==null){
						return item
					}
				})
				parking.value = arr
			}catch(e){
				console.log(e);
			}
		}

		// 生命周期
		onBeforeMount(async ()=>{
			//请求停车场状态
			try{
				const {data} = await getParking();
				parking.value = data.data
			}catch(e){
				console.log(e);
			}
		})
		
		return { parking,parkTime,parkNumber,search };
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
.search{
	font-size: 24px;
	text-align: right;
	margin-right:30px;
}
.search > button {
	margin-left:10px;
	background-color: #fff;
	color:rgb(0, 124, 128);
}
</style>
