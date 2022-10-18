import request from '@/utils/request'
const api_path = 'api/user/patient'

export default{
    //就诊人列表
    findList(){
        return request({
            url: `${api_path}/auth/findAll`,
            method: 'get'
        })
    },
    // 添加就诊人信息
    save(patient){
        return request({
            url: `${api_path}/auth/save`,
            method: 'post',
            data: patient
        })
    },
    // 修改就诊人信息
    updateById(patient){
        return request({
            url: `${api_path}/auth/update`,
            method: 'put',
            data: patient
        })
    },
    // 查看就诊人信息
    getById(id){
        return request({
            url: `${api_path}/auth/get/${id}`,
            method: 'get'
        })
    },
    // 删除就诊人信息
    removeById(id){
        return request({
            url: `${api_path}/auth/remove/${id}`,
            method: 'delete'
        })
    }
}