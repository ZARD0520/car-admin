import axios from 'axios'

export function request(config:any){
    const instance = axios.create({
        baseURL:'http://localhost:3024',
        timeout:5000
    })
    // 请求拦截
    return instance(config)
}