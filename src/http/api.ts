import request from './index'
// import qs from 'qs';
// 登录
export function findId(data:any) {

    console.log(data)
    return request({
        url: '/findId',
        method: 'post',
        data,
    })
}