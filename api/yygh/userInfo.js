import request from '@/utils/request'

export default{
    login(loginVo){
        return request({
            url: `/api/user/login`,
            method: 'post',
            data: loginVo
        })
    }
}