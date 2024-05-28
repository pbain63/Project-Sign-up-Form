function validate_password() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    document.getElementById("wrong_pass_alert").style.color = "red";
    document.getElementById("wrong_pass_alert").style.fontSize = "10px";
    document.getElementById("wrong_pass_alert").textContent =
      "☒ Passwords are incorrect";

    document.getElementById("create").disabled = true;
    document.getElementById("create").style.opacity = 0.3;
  } else {
    document.getElementById("wrong_pass_alert").style.color = "green";
    document.getElementById("wrong_pass_alert").style.fontSize = "10px";
    document.getElementById("wrong_pass_alert").textContent =
      "✓ Password matched";

    document.getElementById("create").disabled = false;
    document.getElementById("create").style.opacity = 1;
  }
}
