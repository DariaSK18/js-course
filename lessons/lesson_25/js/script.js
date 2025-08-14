// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body
console.log(bodyElement)

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

let list = document.createElement('ul')
bodyElement.insertAdjacentElement ("afterbegin", list)

function addLi(amount = 4) {
    for (let i = 0; i < amount; i++) {
        let item = list.insertAdjacentHTML ("afterbegin", '<li>Item</li>')
    }
}
addLi(7)

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

bodyElement.classList.add('loaded')
const bodyClass = document.querySelector('.loaded')
if(bodyElement.classList.contains('loaded')) {
    bodyClass.style.cssText = `
    color: green;`
}

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemsClass = document.querySelectorAll('.item')
console.log(itemsClass)

itemsClass.forEach(item => {
    item.classList.add('active')
    for (i = 0; i < itemsClass.length; i++) {
        itemsClass[i].textContent = `Елемент № ${i + 1}`
    }
})

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const button = document.querySelector('.button')

function scrollToButton (element) {
    element.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
}
scrollToButton(button)

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link')
function addAtribute(element, value) {
    link.setAttribute(element, value)
}
addAtribute('data-speed', 100)

const speed = parseFloat(link.dataset.speed)

    if(speed < 200) {
        link.style.cssText = `
        color: red`
    }
