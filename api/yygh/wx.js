import request from '@/utils/request'
const api_path = '/api/user/wx'
export default{
    getLoginParam(){
        return request({
            url: `${api_path}/getLoginParam`,
            method: 'get'
        })
    },
    // 创建订单支付二维码
    createNative(orderId){
        return request({
            url: `/api/order/weixin/createNative/${orderId}`,
            method: 'get'
        })
    },
    // 查询订单信息
    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },
    // 取消预约
    cancelOrder(orderId) {
        return request({
            url: `/api/order/orderInfo/auth/cancelOrder/${orderId}`,
            method: 'get'
        })
    }
}