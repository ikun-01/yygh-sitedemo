import request from '@/utils/request'

const api_path = '/api/order/orderInfo'

export default {
    submitOrder(scheduleId,patientId){
        return request({
            url: `${api_path}/auth/submitOrder/${scheduleId}/${patientId}`,
            method: 'post'
        })
    },
    //订单详情
    getOrders(orderId) {
        return request({
            url: `${api_path}/auth/getOrders/${orderId}`,
            method: `get`
        })
    }
}