// =================================================
// Задача 1. Дано клас PhoneNumber. Створити функцію перетворення до string, при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

// class PhoneNumber {
//   constructor(number, provider) {
//     this.number = number;
//     this.provider = provider;
//   }
//   [Symbol.toPrimitive](hint) {
//     // console.log(hint);
//     return `${this.number} - ${this.provider}`;
//   }
// }

// const myPhoneNumber = new PhoneNumber("+380991633018", "MTC");
// // console.log(myPhoneNumber);
// document.body.innerHTML += `<p>${myPhoneNumber}</p>`;

// =================================================
// Задача 2. Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна, кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні для кожного елемента виводився рядок «товар-загальна вартість»

// class Product {
//   constructor(title, price = 0, amount = 0) {
//     this.title = title;
//     this.price = price;
//     this.amount = amount;
//   }
//   totalPrice() {
//     return this.price * this.amount;
//   }
//   [Symbol.toPrimitive](hint) {
//     return `${this.title} - ${this.totalPrice()} total price for all in stock`;
//     // let res;
//     // switch (hint) {
//     //   case "string":
//     //     res = `${this.title} - ${this.price} $`;
//     //     break;
//     //   case "number":
//     //     res = this.totalPrice();
//     //     break;
//     //   default:
//     //     res = `${this.title} - ${this.totalPrice()} total price for all in stock`;
//     //     break;
//     // }
//     // return res;
//   }
// }

// class Shop {
//   constructor(name, productList) {
//     this.name = name;
//     this.productList = productList;
//   }
//   [Symbol.iterator]() {
//     this.currentIndex = 0;
//     return this;
//   }
//   next() {
//     if (this.currentIndex < this.productList.length) {
//       return {
//         done: false,
//         value: String(this.productList[this.currentIndex++]),
//       };
//     } else return { done: true };
//   }
// }

// const productList = [
//   new Product("Tea", 3, 7),
//   new Product("Water", 1.5, 13),
//   new Product("Coffee", 5, 18),
//   new Product("Vine", 10, 5),
// ];
// const shop1 = new Shop("Y Dashki", productList);
// for (const element of shop1) {
//   console.log(element);
//   document.body.innerHTML += `<p>${element}</p>`;
// }

// console.log(shop1);

// =================================================
// Задача 3. Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

// function* getRandomEvenNums(amountOfNums) {
//   for (let i = 0; i < amountOfNums; i++) {
//     yield Math.floor(Math.random() * 25) * 2
//     // let num = Math.floor(Math.random() * 100);
//     // if (num % 2 === 0) {
//     //   yield num;
//     //   i++;
//     // }
//   }
// }

// for (const element of getRandomEvenNums(5)) {
//   console.log(element);
// }
