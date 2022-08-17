const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]')
const button = document.querySelector("button")
const form = document.querySelector(".login-form")

form.addEventListener(("submit"), () => {
 if (email.value.length === 0 || password.value.length === 0) {
  alert("All fields should be filled") }
})

const send = (event) => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
  };
   button.addEventListener("click", send);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    console.log(email.value, password.value);
    form.reset();
  });







