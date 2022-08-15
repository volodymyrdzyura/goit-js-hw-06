let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output")

input.addEventListener("input", () => {
 output.textContent = input.value
  });
