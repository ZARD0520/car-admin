import axios from 'axios'

export function request(config:any){
    const instance = axios.create({
        baseURL:'http://localhost:3024',
        timeout:5000
    })
    // 请求拦截
    instance.interceptors.request.use(
        (config:any)=>{
            if(sessionStorage.getItem('token')){
                const token = sessionStorage.getItem('token')
                config.headers.Authorization = 'Bearer '+token
            }
            return config
        },err=>{
            return Promise.reject(err)
        }
    )

    return instance(config)
}