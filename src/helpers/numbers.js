export const parseFloatNumber = (number, afterPoint) => {
    const result = parseFloat(number).toFixed(afterPoint)
    return result === `Nan` ? "-" : result
}