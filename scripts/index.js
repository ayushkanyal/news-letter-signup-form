let subscribeButton = document.getElementById("subscribe_button");
let email = document.getElementById("email_address");
let signup_form = document.getElementById("landing_page");
let success_message = document.getElementById("thanks_message");
let dismissButton = document.getElementById("dismiss_button");
let error_label = document.getElementById("error_label");

function subscribed() {
  if (email.value.includes("@")) {
    signup_form.classList.add("hidden");
    success_message.classList.remove("hidden");
  } else {
    error_label.classList.remove("hidden");
    email.classList.add("error_state");
  }
}

function reset() {
  signup_form.classList.remove("hidden");
  success_message.classList.add("hidden");
  error_label.classList.add("hidden");
  email.classList.remove("error_state");
}

subscribeButton.addEventListener("click", subscribed);
dismissButton.addEventListener("click", reset);
