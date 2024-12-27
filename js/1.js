// #1
//
// Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
// функція може приймати число як аргумент counter(n)
// якщо число передано у функцію - лічба починається із зазначеного числа
// якщо ні - то лічба триває

function makeCounter() {
  let currentCount = 0;
  return function(n = currentCount) {
    currentCount = n;
    return currentCount++;
  };
}

const counter = makeCounter();

console.log(counter()) // 0
console.log(counter()) // 1
console.log(counter(100)) // 100
console.log(counter()) // 101
console.log(counter()) // 102
console.log(counter(500)) // 500
console.log(counter()) // 501
console.log(counter()) // 502
console.log(counter(0)) // 0
console.log(counter()) // 1
