


import {CHANGEBREAD} from "./constant"
export default function breadReducer(preState:any="+++++++++", action:any) {

    const { type, data } = action
    console.log(type,data)
    switch (type) {
        case CHANGEBREAD:
            localStorage.setItem('store',JSON.stringify(data))
            return data
        default:
            return preState
    }

}