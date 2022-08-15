
const counterValue = document.querySelector("#value");

const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

decButton.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
  });

  incButton.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
  });