// #3
//
// Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
// - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
// - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
// - функція myPow() як значення, що повертається, приймає результат myPrint().
// Наприклад:
// console.log(myPow(3, 4, myPrint)); // 3^4=81
// console.log(myPow(2, 3, myPrint)); // 2^3=8
// console.log(myPow(2, 0, myPrint))  // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25

// const myPrint = () => {}
// const myPow = () => {}

// console.log(myPow(3, 4, myPrint)) // 3^4=81
// console.log(myPow(2, 3, myPrint)) // 2^3=8
// console.log(myPow(2, 0, myPrint)) // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
