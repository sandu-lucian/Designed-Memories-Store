let emailInput = document.getElementById("email");
let passInput = document.getElementById("pass");
let loginBtn = document.getElementById("form-button");
let emailStatus = document.getElementById("email-status");
let passStatus = document.getElementById("pass-status");
let homepageBtn = document.getElementById("left-btn");
let form = document.querySelector("form");

let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10}/g;

/* homepageBtn.addEventListener("click", goToHomepage);
emailInput.addEventListener("keyup", validateEmail);
passInput.addEventListener("keyup", validatePass);
loginBtn.addEventListener("click", validateCredentials);

function goToHomepage() {
    window.location = "main.html"
}

function validateEmail() {
    if(emailInput.value.match(emailRegEx)) {
        emailStatus.classList.remove("invalid-credential");
        emailStatus.classList.add("valid-credential");
        emailStatus.innerText = "Adresa email este valida";
        return true;
    } else {
        emailStatus.classList.remove("valid-credential");
        emailStatus.classList.add("invalid-credential");
        emailStatus.innerText = "Adresa email nu este valida";
        return false;
    }
}

function validatePass() {
    if(passInput.value.match(passRegEx)) {
        passStatus.classList.remove("invalid-credential");
        passStatus.classList.add("valid-credential");
        passStatus.innerText = "Parola este valida";

    } else {
        passStatus.classList.remove("valid-credential");
        passStatus.classList.add("invalid-credential");
        passStatus.innerText = "Parola trebuie sa contina cel putin 10 caractere, o litera mare, o litera mica si o cifra.";
    }
}

function validateCredentials(event) {
    event.preventDefault();
    if(emailInput.value.match(emailRegEx) && passInput.value.match(passRegEx)) {
        window.location = "main.html"
    }
} */

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput.value,
        password: passInput.value,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        sessionStorage.setItem("token", r.token);
        window.location.assign("main.html");
      });
  });