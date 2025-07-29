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
};

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let res = '';

module.exports = function toReadable(number) {
  if (p[number]) {
    res = `${p[number]}`;
    return res;
  }
  if (number % 100 === 0) {
    res = `${p[number / 100]} hundred`;
    return res;
  }

  if (number < 1000 && number > 100) {
    a = number % 100;
    c = (number - a) / 100;
    d = a % 10;
    b = a - d;
    if (a % 10 === 0 || p[a]) {
      res = `${p[c]} hundred ${p[a]}`;
    } else {
      res = `${p[c]} hundred ${p[b]} ${p[d]}`;
    }
    // ? (res = `${p[c]} hundred ${p[a]}`)
    // : (res = `${p[c]} hundred ${p[b]} ${p[d]}`);
    return res;
  }
  if (number < 100 && number > 20) {
    a = number % 10;
    b = number - a;

    res = `${p[b]} ${p[a]}`;
    return res;
  }
  if (number <= 20 && number >= 0) {
    a = p[number];

    res = `${p[a]}`;
    return res;
  }
  return res;
};
//
// const div = document.querySelector('.div1')
//
//
// let res = '';
//
// function toReadable() {
//     let number = +document.querySelector('.text').value
//     console.log(number)
//     debugger
//     if (p[number]) {
//         res = `${p[number]}`
//         console.log(res)
//         return res
//     } else if (number % 100 === 0) {
//         res = `${p[(number / 100)]} hundred`
//         console.log(res)
//         return res
//     }
//
//     if (number < 1000 && number > 100) {
//         a = number % 100
//         c = (number - a) / 100
//         d = a % 10
//         b = a - d
//
//         a % 10 === 0 || p[a] ?
//             res = `${p[c]} hundred ${p[a]}`
//             :
//             res = `${p[c]} hundred ${p[b]} ${p[d]}`
//         console.log(res)
//         return res
//     } else if (number < 100 && number > 20) {
//         a = number % 10
//         b = number - a
//
//         res = `${p[b]} ${p[a]}`
//         console.log(res)
//         return res
//     } else if (number <= 20 && number >= 0) {
//         a = p[number]
//
//         res = `${p[a]}`
//         console.log(res)
//         return res
//     } else {
//         console.log('Введите число от 0 до 999')
//         res = 'Введите число от 0 до 999'
//         return res
//     }
//
//
//     // if (p[number]) {
//     //     console.log(p[number])
//     // } else if (number % 100 === 0 && number !== 100) {
//     //     console.log(`${p[(number / 100)]} hundred`)
//     // } else if (number === 100) {
//     //     console.log(`hundred`)
//     // }
//     //
//     // if (number < 1000 && number > 100) {
//     //     a = number % 100
//     //     c = (number - a) / 100
//     //     d = a % 10
//     //     b = a - d
//     //
//     //
//     //     console.log(a)
//     //     console.log(b)
//     //     console.log(c)
//     //     console.log(d)
//     //
//     //     a % 10 === 0 || p[a] ?
//     //         console.log(`${p[c]} hundred ${p[a]}`) : console.log(`${p[c]} hundred ${p[b]} ${p[d]}`)
//     //
//     // } else if (number < 100 && number > 20) {
//     //     a = number % 10
//     //     b = number - a
//     //
//     //     console.log(a)
//     //     console.log(b)
//     //     console.log(`${p[b]} ${p[a]}`)
//     // } else if (number <= 20 && number >= 0) {
//     //     a = p[number]
//     //     console.log(a)
//     //     console.log(`${p[a]}`)
//     // } else {
//     //     console.log('Введите число от 0 до 999')
//     // }
//
// //
// //     a = ('' + number).split('')
// //
// //     if (number % 100 === 0) {
// //         console.log(`${p[a[0]]} hundred`)
// //         return `${p[a[0]]} hundred`
// //
// //     } else if (number % 10 === 0) {
// //         console.log(`${p[a[0]]}ty`)
// //         return `${p[a[0]]}ty`
// //     }
// //     console.log(a)
// //
// //     if (a.length >= 2) {
// //         console.log(`${p[a[0]]} hundred ${p[a[1]]}ty ${p[a[2]]}`)
// //         b = `${p[a[0]]} hundred ${p[a[1]]}ty ${p[a[2]]}`
// //     } else if (a.length >= 1) {
// //         console.log(`${p[a[0]]}ty ${p[a[1]]}`)
// //         b = `${p[a[0]]}ty ${p[a[1]]}`
// //     } else {
// //         console.log(`${p[a[0]]}`)
// //         b = `${p[a[0]]}`
// //     }
// //     return b
// }
//
// document.querySelector('.button').onclick = toReadable
// div.innerHTML = res
//
//
