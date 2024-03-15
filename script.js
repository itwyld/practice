var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null; // не существует
undefined; // сущесвует, но не имеет значения(оно еще не присвоено)
var obj = {};

// console.log(4 / 0);
// console.log('string' = 9);

let persone = {
    name: 'John',
    age: 25, 
    isMarried: false
} // пример написания объекта

// console.log(persone['name']) or console.log(persone.name) // два способа вывода элементов объекта

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'] 

// alert('Hello world')

// confirm('Are you here?')

let answer = prompt('Есть ли вам 18 лет?', 'Да')

console.log(typeof(answer))