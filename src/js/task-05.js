let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output")

input.addEventListener("input", () => {
 output.textContent = input.value;

if (input.value.length === 0) {
    output.textContent = "Anonymous"
}

  });
