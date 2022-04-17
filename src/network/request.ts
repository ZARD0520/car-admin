import axios from 'axios'

export function request(config:any){
    const instance = axios.create({
        baseURL:'http://47.112.128.68/carServer',
        //baseURL:'http://localhost:3028',
        timeout:5000
    })
    
    // 请求拦截
    instance.interceptors.request.use(
        (config:any)=>{
            if(config.super){
                return config
            }
            if(localStorage.getItem('token')){
                const token = sessionStorage.getItem('token')
                config.headers.Authorization = 'Bearer,'+token
                return config
            }
            return Promise.reject('请登录')
        },err=>{
            return Promise.reject(err)
        }
    )

    return instance(config)
}