const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const myframe = document.querySelector("#myFrame");
let txtUsuario = document.querySelector("#txtUsuario");
let id123 = document.querySelector("#fr12345");

const sidebar_toggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}
let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
  // modeToggle.classList.toggle("center-togle");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebar_toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

const profile = document.querySelector(".profile");
const imgProfile = profile.querySelector("img");
const dropdownProfile = profile.querySelector(".profile-link");

imgProfile.addEventListener("click", function () {
  dropdownProfile.classList.toggle("show");
});

window.onclick = function (event) {
  if (event.target != imgProfile) {
    dropdownProfile.classList.remove("show");
  }
};


let faceA = document.querySelector("#faceA");

window.addEventListener("load", function () {
  faceA.href= "https://www.facebook.com/luisfernando.paxel.3/";

  myframe.src = "estadistica.html";
});

// PARA FOTO Form
const btnAceptarImage = document.querySelector("#btnAceptarimg");
const btnCancelarImage = document.querySelector("#btnCancelarimg");
let txtImagenUsuario = document.querySelector("#txtImagenUsuario");
var archivoInput = document.querySelector("#txtFoto");
const btnCambiarFoto = document.querySelector("#btnCambiarFoto");
const modalCambiarFoto = document.querySelector("#modalCambiarFoto");

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

// btnCancelarImage.addEventListener("click", () => {
//   archivoInput.value = "";
//   txtImagenUsuario.src = "";
//   modalCambiarFoto.close();
// });

// btnCambiarFoto.addEventListener("click", () => {
//   modalCambiarFoto.showModal();
// });

//form cambiar contraseña

//PRIMER INPUT
const eye1 = document.querySelector("#eye-hide1");
const show1 = document.querySelector("#eye-show1");
const paswd_actual = document.querySelector("#paswd_actual");
// SEGUNDO INPUT
const eye2 = document.querySelector("#eye-hide2");
const show2 = document.querySelector("#eye-show2");
const passwd1 = document.querySelector("#passwd1");
const textError1 = document.querySelector("#textError1");
// TERCER INPUT
const eye3 = document.querySelector("#eye-hide3");
const show3 = document.querySelector("#eye-show3");
const passwd2 = document.querySelector("#passwd2");
const textError2 = document.querySelector("#textError2");
const btnAceptar = document.querySelector("#btnAceptar");
const btnCancelar = document.querySelector("#btnCancelar");
const modalCambiarPass = document.querySelector("#modalCambiarPasswd");
const AbrirModalPass = document.querySelector("#btnCambiarPass");

// show1.addEventListener("click", () => hidePass(eye1, paswd_actual, show1));
// eye1.addEventListener("click", () => hidePass(eye1, paswd_actual, show1));

// show2.addEventListener("click", () => hidePass(eye2, passwd1, show2));
// eye2.addEventListener("click", () => hidePass(eye2, passwd1, show2));

// show3.addEventListener("click", () => hidePass(eye3, passwd2, show3));
// eye3.addEventListener("click", () => hidePass(eye3, passwd2, show3));

const hidePass = (eye_show, inputField, eye_hide) => {
  if (inputField.type === "password") {
    inputField.type = "text";
    eye_show.classList.replace("show", "hide");
    eye_hide.classList.replace("hide", "show");
  }
  eye_hide.onclick = () => {
    if (inputField.type === "text") {
      inputField.type = "password";
      eye_show.classList.replace("hide", "show");
      eye_hide.classList.replace("show", "hide");
    }
  };
};
/////////

let TestingPassword = {
  passwd1: true,
  passwd2: true,
};

const validatefieldPass = (e, textError) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  const regex = new RegExp(
    "^(?!.*(.)\1{3})(?![@#$d]*$)(?!^[a-zA-Z]*$)^([a-zA-Z@#$0-9]{8,12})$"
  );

  if (fieldValue.trim().length === 0) {
    TestingPassword[field_id] = true;
    textError.innerHTML = "*Por favor llenar el campo";
  } else if (!regex.test(fieldValue)) {
    TestingPassword[field_id] = true;
    textError.innerHTML =
      "*La contraseña debe contener minimo 8 caracteres, incluye caracter especial, y números.";
  } else {
    TestingPassword[field_id] = false;
    textError.innerText = "";
  }
  submitController();
};

const ConfirmarPass = (e, textError, PassAnterior) => {
  const fieldValue = e.target.value;
  const field_id = e.target.id;
  const passAnterior = PassAnterior.value;

  if (fieldValue.trim().length === 0) {
    TestingPassword[field_id] = true;
    textError.innerHTML = "*Por favor llenar el campo";
  } else if (fieldValue != passAnterior) {
    TestingPassword[field_id] = true;
    textError.innerHTML = "*No conindicen las contraseñas";
  } else {
    TestingPassword[field_id] = false;
    textError.innerText = "";
  }
  submitController();
};

submitController = () => {
  if (TestingPassword.passwd1 || TestingPassword.passwd2) {
    btnAceptar.toggleAttribute("disabled", true);
    //console.log("fallado");
  } else {
    btnAceptar.toggleAttribute("disabled", false);
    console.log("verdadero");
  }
};

// passwd1.addEventListener("blur", (e) => validatefieldPass(e, textError1));
// passwd1.addEventListener("input", (e) => validatefieldPass(e, textError1));
// passwd2.addEventListener("blur", (e) => ConfirmarPass(e, textError2, passwd1));
// passwd2.addEventListener("input", (e) => ConfirmarPass(e, textError2, passwd1));

// AbrirModalPass.addEventListener("click", () => {
//   modalCambiarPass.showModal();
// });

// btnCancelar.addEventListener("click", (e) => {
//   e.preventDefault();
//   modalCambiarPass.close();
//   limpiarInputPass();
// });

function limpiarInputPass() {
  paswd_actual.value = "";
  passwd1.value = "";
  passwd2.value = "";
  textError1.innerHTML = "";
  textError2.innerHTML = "";
}

