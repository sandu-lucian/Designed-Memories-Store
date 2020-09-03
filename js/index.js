let emailInput = document.getElementById("email");
let passInput = document.getElementById("pass");
let loginBtn = document.getElementById("form-button");
let homepageBtn = document.getElementById("left-btn");
let form = document.querySelector(".login-form");
let loginToSignupBtn = document.getElementById("login-to-signup-link");

let signup = document.querySelector(".signup-form");

let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10}/g;

function validateEmail() {
    return emailRegEx.test(emailInput.value);
}

function validatePass() {
    return passRegEx.test(passInput.value)
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let x = validateEmail();
    let y = validatePass();
  
    if(x && y) {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passInput.value,
      }),
    })
      .then((r) => r.json())
      .then((r) => {
        if(r.token) {
            sessionStorage.setItem("token", r.token);
            window.location = "main.html";
        };
})
    }
});

loginToSignupBtn.addEventListener("click", function(event) {
    form.classList.add("hidden");
    signup.classList.remove("hidden");
})