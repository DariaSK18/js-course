// Задача №1
/*
Що потрапить в консоль?

let someVar = 0;
++someVar;

if (someVar) {
    console.log(someVar);
}
в консоль потрапить: 1
*/



// Задача №2
/*
for (i=1; i<=10; i++) {
    console.log('Пункт №'+ i)
}
*/



// Задача №3
/*
Що потрапить в консоль ?
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
    console.log('000');
}
if (40 <= 10 || 15 < 5 && 10 <= "10" || 20 === "20") {
    console.log('000');
}
if (false || false && true || false) {
    console.log('000');
}
if (false || false || false) {
    console.log('000');
}
консоль не буде виконано оскільки всі умови false
*/



// Задача №4
/*
Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
Функція не має повертати NaN, Infinite або помилку 
*/

function divideNum(a, b) {
    let result = parseFloat(a) / parseFloat(b)
        if (Boolean(a) === false || Boolean(b) === false || isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) {
            console.log('Функція повертаe NaN, Infinite або помилку')
        }
        else {
            console.log(`Результат ділення: ${result}`)
        }
}

divideNum(12, 4)


// Задача №5
/*
Створіть масив даних - 5 елементів, один з яких число 10
Обробіть масив за допомогою методу перебору
Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль
*/

let array = ['Daria', 2, NaN, 10, 9]
// console.log(array)
for (i=0; i<array.length; i++) {
    if (array[i] == 10) {
        console.log (array[i])
    }
}