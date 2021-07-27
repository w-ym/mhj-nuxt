//数据请求接口

// 引入封装的axios实例
import axios from "./index"


const serve = {
    getDate(){
        return axios('/headerdata1/headerdata1',{
            method:'get'
        })
    },
    postLogin(data){
        return axios('/headerdata1/headerdata1',{
            method:'post',
            data:data
        })
    }
}

export default serve