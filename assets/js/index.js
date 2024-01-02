// Switch Between Signin & Registration Form
let regPageBtn = document.getElementById("reg-form");
let loginPageBtn = document.getElementById("login-form");
let switchBtn = document.querySelectorAll(".switchbtn");
let text = document.querySelectorAll(".text");

switchBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    text.forEach((txt) => {
      txt.classList.add("active");
    });
    this.parentElement.parentElement.parentElement.classList.remove("active");
  });
});

// Registration
const regBtn = document.getElementById("register");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let regPass = document.getElementById("reg-pass");
regBtn.addEventListener("click", function () {
  if (fullName.value.trim() == "") {
    alert("Name is required.");
  } else if (email.value.trim() == "") {
    alert("Email is required.");
  } else if (email.value.indexOf("@gmail.com") === -1) {
    alert("Email not valid.");
  } else if (regPass.value.trim() == "") {
    alert("Password is required.");
  } else {
    alert("Thank you for registering.");
    regEmptyField();
  }
});

// declaring a function to set fields empty.
function regEmptyField() {
  fullName.value = "";
  email.value = "";
  regPass.value = "";
}

// Sign In
const loginBtn = document.getElementById("login");
let userName = document.getElementById("username");
let logPass = document.getElementById("login-pass");
loginBtn.addEventListener("click", function () {
  if (userName.value.trim() == "") {
    alert("Username is required.");
  } else if (logPass.value.trim() == "") {
    alert("Password is required.");
  } else {
    alert("Welcome back user!");
    logEmptyField();
  }
});
// declaring a function to set fields empty.
function logEmptyField() {
  userName.value = "";
  logPass.value = "";
}
