import request from '@/utils/request'

export default{
    sendCode(phone){
        return request({
            url: `/api/msm/send/${phone}`,
            mthod: 'get'
        })
    }
}