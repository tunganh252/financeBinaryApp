/**
 * 
 * @param {*number} num 100000
 * @param {*string} sign , . ;
 * @param {*string} unit VNĐ / đ / $
 * @returns string
 */
export const convertNumToMoney = (num = 0, sign = ".", unit = "đ", isUnitFirst = true) => {
    if (num === 0) return `0.0000000`;

    let val = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${sign}`)
    let res = ""
    if (isUnitFirst)
        res = `${unit}${val}`
    else
        res = `${val}${unit}`

    return res;
}


/**
 * 
 * @param {*number} timeout 
 * @returns func asynchronous
 */
export const wait_macroTask = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}