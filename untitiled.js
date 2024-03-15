// // 3 4 6 числа
// // 'string', 'string', 'string' строка
// // true / false boolean 

// const obj = {
//     name: 'Alex'
// } // объект

// const arr = [1,3,5,6] // массив

// - to string

// 1)
console.log(typeof(String(null)))
// 2)
console.log('ww' + 'err')
console.log('https://vk.com/catalog/' + 5)

// - to number

// 1)
console.log(typeof(Number('5')))
// 2)
console.log(typeof(+'5'))
// 3)
console.log(typeof(parseInt('15px', 10)))

let ans = +prompt('hello?', '')

// 0, '', null, undefined, NaN

let switcher = null

if(switcher) {
    console.log('Working..')
}

switcher = 1

if(switcher) {
    console.log('Working..')
}

//2)

console.log(typeof(!!'5'))