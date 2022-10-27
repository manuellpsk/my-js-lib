/**
 * 
 * @param {Date} dateA 
 * @param {Date} dateB 
 */
function differenceBetweenTwoDates(dateA, dateB) {
    if (!(dateA instanceof Date) || !(dateB instanceof Date)) {
        return
    }
    return Math.abs(dateA.getTime() - dateB.getTime())
}


/**
 * 
 * @param {number} number `
 * @param {number} digits 
 */
function round(num, digits) {
    return +(Math.round(num + `e+${digits}`) + `e-${digits}`);
}

export {
    differenceBetweenTwoDates,
    round
}