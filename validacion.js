const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const numero = document.getElementById("numero");
const asunto = document.getElementById("asunto");
const texto = document.getElementById("texto");
const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  let messages = [];
  if (nombre.value === "" || nombre.value === null) {
    messages.push("Nombre");
  } 
   if (email.value === "" || email.value === null) {
    messages.push("Email");
  }

  if (numero.value === "" || numero.value === null) {
    messages.push("Número");
  }

    if (asunto.value === "" || asunto.value === null) {
    messages.push("Asunto");
  }
   if (texto.value === "" || texto.value === null) {
    messages.push("Mensaje");
    swal(
        "Los campos",
        `${messages} son obligatorios`,
        "error"
      );
  }
  else  {
        swal("Mensaje enviado", "Gracias por contactarnos", "success");
      }

});




