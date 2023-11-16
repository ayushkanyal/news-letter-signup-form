let subscribeButton = document.getElementById("subscribe_button");
let email = document.getElementById("email_address");

function subscribed() {
  if (email.value.includes("@")) {
    alert("Subscribed Succesfully");
  } else {
    alert("Please enter a valid email");
  }
}

subscribeButton.addEventListener("click", subscribed);
