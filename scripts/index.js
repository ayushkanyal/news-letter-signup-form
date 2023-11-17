let subscribeButton = document.getElementById("subscribe_button");
let email = document.getElementById("email_address");
let signup_form = document.getElementById("landing_page");
let success_message = document.getElementById("thanks_message");
let dismissButton = document.getElementById("dismiss_button");

function subscribed() {
  if (email.value.includes("@")) {
    signup_form.classList.add("hidden");
    success_message.classList.remove("hidden");
  } else {
    alert("Please enter a valid email");
  }
  console.log(signup_form.classList);
}

function reset() {
  signup_form.classList.remove("hidden");
  success_message.classList.add("hidden");
}

subscribeButton.addEventListener("click", subscribed);
dismissButton.addEventListener("click", reset);
