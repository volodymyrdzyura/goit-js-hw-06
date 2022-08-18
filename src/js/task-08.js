const form = document.querySelector(".login-form")
const button = document.querySelector("button");

form.addEventListener(("submit"), handlesubmit);

function handlesubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields should be filled")
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

const send = (event) => {
    console.log("event: ", event);
    console.log("event type: ", event.type);
    console.log("currentTarget: ", event.currentTarget);
  };
   button.addEventListener("click", send);