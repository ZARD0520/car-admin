import { request } from "./request"

//停车场状态
export function getParking(){
    return request({
        url:'/getParking',
        method:'post'
    })
}

//搜索停车场状态
export function searchParking(params:string){
    return request({
        url:'/searchParking',
        method:'post',
        data:params,
    })
}

//今日缴费
export function getToday(params:string){
    return request({
        url:'/getToday',
        method:'post',
        data:params
    })
}

//历史缴费
export function getHistory(){
    return request({
        url:'/getHistory',
        method:'post'
    })
}