import request from '@/utils/request'
export function betorder(data) {
    return request({
        url: '/v1/order',
        method: 'post',
        data
    })
}
