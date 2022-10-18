import request from '@/utils/request'

export default{
    login(loginVo){
        return request({
            url: `/api/user/login`,
            method: 'post',
            data: loginVo
        })
    },
    // 获取用户信息
    getUserInfo(){
        return request({
            url: `/api/user/auth/getUserInfo`,
            method: 'get'
        })
    },
    //用户认证
    saveUserAuth(userAuth){
        return request({
            url: `/api/user/auth/userAuth`,
            method: 'post',
            data: userAuth
        })
    }
}