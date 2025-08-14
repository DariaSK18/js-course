const icon = document.querySelector('.burger-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

const search = document.querySelector(".magnificier-icon");
search.addEventListener("click", function () {
  document.documentElement.classList.add("search-open");
});

const button = document.querySelector(".close");
const input = document.querySelector(".header__searching");
button.addEventListener("click", function () {
  document.documentElement.classList.remove("search-open");
  input.value = ``;
});