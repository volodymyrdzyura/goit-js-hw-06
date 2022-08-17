function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");
const button = document.querySelector(".change-color")
const body = document.querySelector("body")

button.addEventListener("click", () => {
  color.textContent = `${getRandomHexColor()}`
  body.style.backgroundColor = `${getRandomHexColor()}`
})

