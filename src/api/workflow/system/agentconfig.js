import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/agentconfig/list',
    method: 'post',
    data
  })
}

// 查询数据字典
export function agentconfigSystem(data) {
  return request({
    url: '/sys-dic/dic',
    method: 'POST',
    data
  })
}

// 新增
export function addList(data) {
  return request({
    url: '/agentconfig/add',
    method: 'POST',
    data
  })
}

// 编辑
export function editList(data) {
  return request({
    url: '/agentconfig/edit',
    method: 'POST',
    data
  })
}

// 删除
export function deleteList(data) {
  return request({
    url: '/agentconfig/delete',
    method: 'POST',
    data
  })
}

