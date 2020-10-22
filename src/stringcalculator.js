module.exports = (input) => {
    const data = checkDelimeter(input)
    
    const numbersArr = data.inputString.split(data.delimeter)
    const negatives = []
    const res = calculate(numbersArr)
    if (res.negatives.length > 0) {
        const err = "negatives not allowed: "+res.negatives.join(", ")
        return err
    }
    return res.total
}

const checkDelimeter = (input) => {
    let delimeter = /,|\n/
    let inputString = input
    if (input.substring(0,2) == "//") {
        const dataString = input.split("\n")
        inputString = dataString[1]
        delimeter = dataString[0].substring(2, dataString[0].length)
    }

    return {delimeter, inputString}
}

const calculate = (numbersArr) => {
    const negatives = []
    let total = 0
    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] == "") {
            continue
        }
        const number = parseInt(numbersArr[i])
        if (number < 0) {
            negatives.push(number)
            continue
        }

        if (number > 1000) {
            continue
        }

        total = total + number
    }
    return {negatives, total}
}