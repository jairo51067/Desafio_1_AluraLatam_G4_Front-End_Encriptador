/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 
e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat
*/

function encriptar() {
  //nodeValue.toLowerCase, para que sin importar que coloquen el texto en mayúsculas o minúsculas, hagan caso omiso al mensaje//
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayúsculas como minúsculas --e E
  //g es para toda la linea o oración
  //m para que afecte multiplies lineas o párrafos
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  let mostrarTextoEncriptado = document.querySelector(".hidden");

  mostrarTextoEncriptado.classList.remove("hidden");

  document.getElementById("img-right").style.display = "none";
  document.getElementById("texto1").style.display = "none";

  document.getElementById("texto2").innerHTML = txtCifrado;

  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

  document.getElementById("inputTexto").style.opacity = "0.3";
  document.getElementById("texto2").style.fontWeight = "600";
  document.getElementById("texto2").style.backgroundColor = "#ffffff";
  document.getElementById("btn-encriptar").style.display = "none";
  document.getElementById("btn-desencriptar").style.display = "none";

  document.body.style.backgroundColor = "#a5a5a5";
  
}

function desencriptar() {
  //nodeValue.toLowerCase, para que sin importar que coloquen el texto en mayúsculas o minúsculas, hagan caso omiso al mensaje//
  var texto = document.getElementById("inputTexto").value.toLowerCase();
  //i es para que afecte tanto mayúsculas como minúsculas --e E
  //g es para toda la linea o oración
  //m para que afecte multiplies lineas o párrafos
  var txtCifrado = texto.replace(/enter/gim, "e");
  var txtCifrado = txtCifrado.replace(/ober/gim, "o");
  var txtCifrado = txtCifrado.replace(/imes/gim, "i");
  var txtCifrado = txtCifrado.replace(/ai/gim, "a");
  var txtCifrado = txtCifrado.replace(/ufat/gim, "u");

  let mostrarTextoEncriptado = document.querySelector(".hidden");

  mostrarTextoEncriptado.classList.remove("hidden");

  document.getElementById("img-right").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";

  document.getElementById("inputTexto").style.opacity = "0.3";
  document.getElementById("texto2").style.fontWeight = "600";
  document.getElementById("texto2").style.backgroundColor = "#ffffff";
  document.getElementById("btn-encriptar").style.display = "none";
  document.getElementById("btn-desencriptar").style.display = "none";

  document.body.style.backgroundColor = "#a5a5a5";
}

//   <!-- biblioteca de alertas Swal.fire -->
// function copiar() {
//   var contenido = document.querySelector("#texto2");
//   contenido.select();
//   document.execCommand("copy");
//   Swal.fire({
//     title: "¡ Se a copiado exitosamente !!!",
//     text: '"Tus datos no tienen precio. Protégelo ferozmente."',
//     confirmButtonText: "Aceptar",
// });
// }

//   <!-- biblioteca de alertas alertify -->
const TEXT_2_ID = "texto2";
function copiar() {
  const texto = document.getElementById(TEXT_2_ID).textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alertify.alert("Confirme si desea copiar su mensaje.", "Tus datos no tienen precio. Protégelo ferozmente.", function () {
      alertify.success("¡Se ha copiado exitosamente!");
    });
  });
}
