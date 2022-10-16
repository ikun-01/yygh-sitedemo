import request from '@/utils/request'
const api_path = '/api/user/wx'
export default{
    getLoginParam(){
        return request({
            url: `${api_path}/getLoginParam`,
            method: 'get'
        })
    }
}