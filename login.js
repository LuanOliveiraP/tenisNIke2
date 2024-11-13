const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.querySelector(".login-button");

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

emailInput.addEventListener("focus", () => {
  emailInput.style.borderColor = "#6C4ECF";
});
emailInput.addEventListener("blur", () => {
  emailInput.style.borderColor = "#ddd";
});

passwordInput.addEventListener("focus", () => {
  passwordInput.style.borderColor = "#6C4ECF";
});
passwordInput.addEventListener("blur", () => {
  passwordInput.style.borderColor = "#ddd";
});

loginButton.addEventListener("mouseover", () => {
  loginButton.style.backgroundColor = "#5a3bb5";
});
loginButton.addEventListener("mouseout", () => {
  loginButton.style.backgroundColor = "#6C4ECF";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, insira um endereço de email válido.");
    return;
  }

  loginButton.textContent = "Carregando...";
  loginButton.disabled = true;

  setTimeout(() => {
    loginButton.textContent = "Entrar";
    loginButton.disabled = false;
    alert("Login realizado com sucesso!");
  }, 2000);
});
