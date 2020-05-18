import request from '@/utils/request'
export function getList(params) {
    return request({
        url: '/v1/match',
        method: 'get',
        params
    })
}
