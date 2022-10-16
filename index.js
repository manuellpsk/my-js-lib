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

export {
    differenceBetweenTwoDates
}