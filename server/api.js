//数据请求接口

// 引入封装的axios实例
import axios from "./index"


const serve = {
    getDate(){
        return axios('/nuxt/nuxt',{
            method:'get'
        })
    },
    postLogin(data){
        return axios('/nuxt/nuxt',{
            method:'post',
            data:data
        })
    }
}

export default serve