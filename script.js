function validateForm(event) {
  event.preventDefault(); // Impede a mudança de página até a validação
  const login = document.getElementById("floatingInput");
  const password = document.getElementById("floatingPassword");
  let valid = true;

  if (login.value.trim() === "") {
    login.classList.add("is-invalid");
    valid = false;
  } else {
    login.classList.remove("is-invalid");
  }

  if (password.value.trim() === "") {
    password.classList.add("is-invalid");
    valid = false;
  } else {
    password.classList.remove("is-invalid");
  }

  if (valid) {
    window.location.href = "./notificações/notificacoes.html";
  }
}

function tratarEsqueciSenha(event) {
  event.preventDefault();
  const campoEmail = document.getElementById("campoEmail");

  if (campoEmail.checkValidity()) {
    alert(
      "Instruções de recuperação de senha enviadas para o e-mail fornecido."
    );
    window.location.href = "../index.html";
  } else {
    campoEmail.classList.add("is-invalid");
  }
}
