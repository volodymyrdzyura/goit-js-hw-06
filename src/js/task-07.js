const text = document.querySelector("#text")
const sizeControl = document.querySelector("#font-size-control");
text.style.fontSize = "34px"
sizeControl.addEventListener("input", () =>{
    text.style.fontSize = `${sizeControl.value}px`;
})
