// #2
//
// Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
// початкове значення лічильника - 0
// counterFactory.value() - повертає значення лічильника
// counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
// counterFactory.increment() - збільшує значення лічильника на 1
// counterFactory.decrement() - зменшує значення лічильника на 1

const myFactory = function() {
  let value = 0;

  const returnValue = (n) => {
    if (n) {
      value = n;
    }
    return value;
  };
  const increment = () => value++;
  const decrement = () => value--;

  return { increment, decrement, value: returnValue };
};

const counterFactory = myFactory();

console.log(counterFactory.value()); // 0
counterFactory.increment();
counterFactory.increment();
counterFactory.increment();
console.log(counterFactory.value()); // 3
counterFactory.decrement();
counterFactory.decrement();
console.log(counterFactory.value()); // 1
console.log(counterFactory.value(100)); // 100
counterFactory.decrement();
console.log(counterFactory.value()); // 99
console.log(counterFactory.value(200)); // 200
counterFactory.increment();
console.log(counterFactory.value()); // 201
