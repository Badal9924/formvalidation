const button = document.querySelector(".btn");
let mark = document.querySelectorAll(".mark");
let email = document.querySelector("#emailinput");
let password = document.querySelector("#password");
const myName = "😊";

let confirmpassword = document.getElementById("confirmpasswordinput");
let ConfirmpasswordError = document.querySelector("#ConfirmpasswordError");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkName() && checkEmail() && checkPassword() && confirmPassword()) {
    alert("Form sumitted sucessfully ");
  }
});

function checkName() {
  let name = document.querySelector("#name");
  let nameError = document.getElementById("nameError");
  if (name.value == "") {
    nameError.innerText = "Name is required";
    mark[0].classList.add("fa-xmark");
    return false;
  }
  if (!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = "Please write your full name ";
    mark[0].classList.add("fa-xmark");
    return false;
  }
  nameError.innerText = "";
  mark[0].classList.add("fa-check");
  return true;
}

function checkEmail() {
  let email = document.querySelector("#emailinput");
  let emailError = document.getElementById("emailError");
  if (email.value == "") {
    emailError.innerText = "Email is required";
    mark[1].classList.add("fa-xmark");
    return false;
  }
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerText = "Please write a valid email ";
    mark[1].classList.add("fa-xmark");
    return false;
  }
  emailError.innerText = "";
  mark[1].classList.add("fa-check");
  return true;
}

function checkPassword() {
  let passwordError = document.getElementById("passwordError");
  if (password.value == "") {
    passwordError.innerText = "Password is required";
    mark[2].classList.add("fa-xmark");
    return false;
  }
  if (
    !password.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passwordError.innerText = "Create a strong password";
    mark[2].classList.add("fa-xmark");
    return false;
  }
  passwordError.innerText = "";
  mark[2].classList.add("fa-check");
  return true;
}

function confirmPassword() {
  if (password.value === confirmpassword.value) {
    mark[3].classList.add("fa-check");
    return true;
  } else {
    ConfirmpasswordError.innerText = "Password not matched";
    mark[3].classList.add("fa-xmark");
    return false;
  }
}
