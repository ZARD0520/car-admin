import { request } from "./request"

//停车场状态
export function getParking(){
    return request({
        url:'/getParking'
    })
}

//今日缴费
export function getToday(){
    return request({
        url:'/getToday'
    })
}

//历史缴费
export function getHistory(){
    return request({
        url:'/getHistory'
    })
}