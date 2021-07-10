/**
 * 
 * @param {*number} num 100000
 * @param {*string} sign , . ;
 * @param {*string} unit VNĐ / đ / $
 * @returns string
 */
export const convertNumToMoney = (num = 0, sign = ".", unit = "", isUnitFirst = false) => {
    if (num === 0) return `0.000`;

    if (Number(num) < 1000) {
        let result = "";
        if (isUnitFirst)
            result = `${unit}${num}`
        else
            result = `${num}${unit}`

        return result
    };

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

/**
 * 
 * @param {*number} length 
 * @returns string
 */
export const createCode = (length) => {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}