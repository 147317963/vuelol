import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/v1/game',
    method: 'get',
    params
  })
}

