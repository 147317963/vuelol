import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/v2/game',
    method: 'get',
    params
  })
}

