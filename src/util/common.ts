export function getNum(text: string) {

    // console.log(parseFloat(text))
    var f_x = parseFloat(text);
    if (isNaN(f_x)) {
        return false;
    }
    f_x = Math.round(f_x * 100) / 100;
    // console.log(f_x)
    return f_x

}

export function getGhz(text: string) {

    var f_x = parseFloat(text);
    if (isNaN(f_x)) {
        return false;
    }
    f_x = f_x / 1000;
    return f_x + "GHz"

}