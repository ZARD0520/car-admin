import { request } from "./request"

//注册
export function registerAdmin(params:any){
    return request({
        url:'/getParking',
        method:'post',
        data:params
    })
}

//登录
export function loginAdmin(params:any){
    return request({
        url:'/loginAdmin',
        method:'post',
        data:params
    })
}