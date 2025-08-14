
// const widthScreen = window.innerWidth ?????
const widthScreen = document.documentElement.clientWidth

const hoursIcon = document.querySelector('.top__hours')
// console.log(hoursIcon)

const infoBlock = document.querySelector('.top__info')
// console.log(infoBlock)

console.log(widthScreen)
if (widthScreen < 500) {
    infoBlock.insertAdjacentElement('beforeend', hoursIcon)
}


const iconLocation = document.querySelector('.top__address');
iconLocation.addEventListener('click', function () {
	document.documentElement.classList.toggle('icon-open-loc');
});
const iconMail = document.querySelector('.top__mail');
iconMail.addEventListener('click', function () {
	document.documentElement.classList.toggle('icon-open-mail');
});
const iconHours = document.querySelector('.top__hours');
iconHours.addEventListener('click', function () {
	document.documentElement.classList.toggle('icon-open-hours');
});


const icon = document.querySelector('.burger-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});


const button = document.querySelector('.bottom__button')
const list = document.querySelector('.bottom__list')
console.log(list)

if (widthScreen < 370) {
    list.insertAdjacentElement('afterbegin', button)
}

