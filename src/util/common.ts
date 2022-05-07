export function getNum(text: any) {

    // console.log(parseFloat(text))
    var f_x = parseFloat(text);
    if (isNaN(f_x)) {
        return false;
    }
    f_x = Math.round(f_x * 100) / 100;
    // console.log(f_x)
    return f_x

}

export function getGhz(text: any) {

    var f_x = parseFloat(text);
    if (isNaN(f_x)) {
        return false;
    }
    f_x = f_x / 1000;
    return Math.round(f_x * 100)/100 + " GHz"

}

export function getMemory(text: any) {

    var f_x = parseFloat(text);
    if (isNaN(f_x)) {
        return false;
    }
    f_x = Math.round(f_x * 100) / 100000000000;
    return  Math.round(f_x * 100)/100 +" GB"

}

export function getDisk(text: any) {

    var f_x = parseInt(text);
    
    
    if (isNaN(f_x)) {
        return false;
    }
    console.log("🐱‍🏍 => file: common.ts => line 39 => getDisk => f_x", f_x)
    f_x = Math.round(f_x /1024/1024/1024);
    return  f_x  +" GB"

}