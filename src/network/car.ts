import { request } from "./request"

//停车场状态
export function getParking(){
    return request({
        url:'/getParking',
        method:'post'
    })
}

//今日缴费
export function getToday(){
    return request({
        url:'/getToday',
        method:'post'
    })
}

//历史缴费
export function getHistory(){
    return request({
        url:'/getHistory',
        method:'post'
    })
}