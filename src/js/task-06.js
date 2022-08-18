const input = document.querySelector("#validation-input");
 
 const lengthConst = document.querySelector(`input[data-length="6"]`)
 const constValue = Number(lengthConst.dataset.length)
 
 input.addEventListener("input", () => {
     let number = input.value.length
     if (number === constValue) {
input.classList = "valid";
  }
     else {
     input.classList = "invalid" 
     }
})
    
