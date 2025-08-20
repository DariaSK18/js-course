const colorHEX = document.getElementById("colorSelector");
const bodyTag = document.querySelector("body");
console.log(colorHEX);

function setColor() {
  let color = this.value;
  saveColor(color);
  let count = parseInt(sessionStorage.getItem("count") ?? 0);
  count++;
  sessionStorage.setItem("count", count);
  document.getElementById("span").innerText = count;
}
function saveColor(color) {
  bodyTag.style.backgroundColor = color;
  localStorage.setItem("bkgColor", color);
}
colorHEX.addEventListener("input", setColor);

window.addEventListener("load", (e) => {
  let color = localStorage.getItem("bkgColor");
  if (color) saveColor(color);
});

// localStorage.clear()
