let signupForm = document.querySelector(".signup-form");
let lastName = document.getElementById("lastname-input");
let firstName = document.getElementById("firstname-input");
let signupEmailInput = document.getElementById("signup-email");
let signupEmailVerifier = document.getElementById("email-verifier-input");
let signupPasswordInput = document.getElementById("signup-password");
let signupPasswordVerifier = document.getElementById("password-verifier-input");
let signupToLoginBtn = document.getElementById("signup-to-login-link");
let emailStatus = document.getElementById("email-status");
let passStatus = document.getElementById("pass-status");
let emailChecker = document.getElementById("email-check");
let passChecker = document.getElementById("password-check");

let loginForm = document.querySelector(".login-form");

let validEmail = false;
let validPass = false;

function signupEmailValidation(event) {
  if (
    emailRegEx.test(signupEmailInput.value) &&
    signupEmailInput.value === signupEmailVerifier.value
  ) {
    emailChecker.classList.remove(
      "fa-times",
      "invalid-credential",
      "invisible"
    );
    emailChecker.classList.add("fa-check", "valid-credential");
    emailStatus.innerText = "";
    validEmail = true;
  } else {
    emailChecker.classList.remove("fa-check", "invisible");
    emailChecker.classList.add("fa-times", "invalid-credential");
    emailStatus.classList.remove("valid-credential");
    emailStatus.classList.add("invalid-credential");
    emailStatus.innerText = "Adresele email nu corespund!";
    validEmail = false;
  }
}

function signupPasswordValidation(event) {
  if (passRegEx.test(signupPasswordInput.value)) {
    if (signupPasswordInput.value === signupPasswordVerifier.value) {
      passChecker.classList.remove(
        "fa-times",
        "invalid-credential",
        "invisible"
      );
      passChecker.classList.add("fa-check", "valid-credential");
      passStatus.innerText = "";
      validPass = true;
    } else {
      passChecker.classList.remove("fa-check", "invisible");
      passChecker.classList.add("fa-times", "invalid-credential");
      passStatus.classList.remove("valid-credential");
      passStatus.classList.add("invalid-credential");
      passStatus.innerText = "Parolele nu corespund!";
      validPass = false;
    }
  } else {
    passChecker.classList.remove("fa-check", "invisible");
    passChecker.classList.add("fa-times", "invalid-credential");
    passStatus.classList.remove("valid-credential");
    passStatus.classList.add("invalid-credential");
    passStatus.innerText =
      "Parola trebuie sa contina cel putin 10 caractere, o litera mare, o litera mica si o cifra.";
    validPass = false;
  }
}

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validEmail && validPass) {
    fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: signupEmailInput.value,
        password: signupPasswordInput.value,
      }),
    });
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } else {
    emailStatus.innerText = "Email sau parola invalide";
  }
});

signupToLoginBtn.addEventListener("click", function (event) {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

signupEmailVerifier.addEventListener("keyup", signupEmailValidation);
signupPasswordVerifier.addEventListener("keyup", signupPasswordValidation);
