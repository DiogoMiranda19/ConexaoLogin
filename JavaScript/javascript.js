function login(event) {
  event.preventDefault();

  var campoEmail = document.getElementById("email");
  var campoSenha = document.getElementById("senha");
  var alertaEmail = document.getElementById("alertaEmail");
  var alertaSenha = document.getElementById("alertaSenha");
  var alertaAmbos = document.getElementById("alertaAmbos");

  alertaEmail.style.display = "none";
  alertaSenha.style.display = "none";
  alertaAmbos.style.display = "none";
  campoEmail.style.borderColor = "black";
  campoSenha.style.borderColor = "black";
  
  
  if (campoEmail.value === "" && campoSenha.value === "") {
    campoEmail.style.borderColor = "red";
    campoSenha.style.borderColor = "red";
    alertaAmbos.style.display = "block";
    return;
  }
  
  if (campoEmail.value === "") {
    campoEmail.style.borderColor = "red";
    alertaEmail.style.display = "block";
    return;
  }

  if (campoSenha.value === "") {
    campoSenha.style.borderColor = "red";
    alertaSenha.style.display = "block";
    return;
  }

 

}

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", login);
});

