import request from '@/utils/request'

const api_name = '/admin/cmn/dict'

export default{
    // 查询所有的省 和医院等级
    findByDictCode(dictCode){
        return request({
            url: `${api_name}/findByDictCode/${dictCode}`,
            method: 'get'
        })
    },
    // 查询下级
    findByParentId(parentId){
        return request({
            url: `${api_name}/findChildData/${parentId}`,
            method: 'get'
        })
    }
}
