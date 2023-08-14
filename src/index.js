const p = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}

let a = 0
let b = 0
let c = 0
let d = 0
let res = ''

module.exports = function toReadable(number) {
    if (p[number]) {
        res = `${p[number]}`
        return res
    } else if (number % 100 === 0) {
        res = `${p[(number / 100)]} hundred`
        return res
    }

    if (number < 1000 && number > 100) {
        a = number % 100
        c = (number - a) / 100
        d = a % 10
        b = a - d

        a % 10 === 0 || p[a] ?
            res = `${p[c]} hundred ${p[a]}`
            :
            res = `${p[c]} hundred ${p[b]} ${p[d]}`
        return res
    } else if (number < 100 && number > 20) {
        a = number % 10
        b = number - a

        res = `${p[b]} ${p[a]}`
        return res
    } else if (number <= 20 && number >= 0) {
        a = p[number]

        res = `${p[a]}`
        return res
    } else {
        console.log('Введите число от 0 до 999')
        res = 'Введите число от 0 до 999'
        return res
    }
}
