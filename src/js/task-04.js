
const counterValue = document.querySelector("#value");
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
counterValue.textContent = 0; //зробив присвоєння нуля на випадок 
                              // якщо верстальщик не пропише його у html файлі

incButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});

decButton.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
  });