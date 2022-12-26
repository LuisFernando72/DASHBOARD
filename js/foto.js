const btnAceptarImage = document.querySelector("#btnAceptarimg");
const btnCancelarImage = document.querySelector("#btnCancelarimg");
let txtImagenUsuario = document.querySelector("#txtImagenUsuario");
var archivoInput = document.querySelector("#txtFoto");

// btnAceptarImage.toggleAttribute("disabled", true);

let previsualizar = function (e) {
  var archivoRuta = archivoInput.value.toLowerCase();
  var extPermitidas = /(.png|.jpg)$/i;

  if (!extPermitidas.exec(archivoRuta)) {
    alert("Asegurese de haber seleccionado un PDF");
    archivoInput.value = "";
    txtImagenUsuario.src = "";
    return false;
  } else {
    // VISTA DEL LA IMAGEN
    if (archivoInput.files && archivoInput.files[0]) {
      var visor = new FileReader();
      visor.onload = function (e) {
        let image = archivoInput.files[0];
        txtImagenUsuario.src = e.target.result;
        btnAceptarImage.toggleAttribute("disabled", false);
      };
      visor.readAsDataURL(archivoInput.files[0]);
    }
  }
};

btnCancelarImage.addEventListener("click", () => {
  archivoInput.value = "";
  txtImagenUsuario.src = "";
});
