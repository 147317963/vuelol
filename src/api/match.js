import request from '@/utils/request'
export function getList(params) {
    return request({
        url: '/v2/match',
        method: 'get',
        params
    })
}
