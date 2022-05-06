import request from './index'
// import qs from 'qs';
// 登录
export function findId(data: any) {
    console.log(data)
    return request({
        url: '/findId',
        method: 'post',
        data,
    })
}

export function findAll(data: any) {
    console.log(data)
    return request({
        url: '/find',
        method: 'post',
        data
    })
}
/**
 * 
 * @param data 
 * @returns 
 */
export function delById(data: any) {
    console.log(data)
    return request({
        url: '/delById',
        method: 'post',
        data
    })
}

export function addUser(data: any) {
    console.log(data)
    return request({
        url: '/addUser',
        method: 'post',
        data
    })
}

export function findRhttp(data: any) {
    return request.get(
        '/findRhttp',
        { params: data }
    )
}

export function findAdmin(data: any) {
    return request.get(
        '/findRhttp',
        { params: data }
    )
}

export function getCpu() {
    return request.get(
        '/getCpu',
    )
}