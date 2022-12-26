const modalUser = document.querySelector("#modalUser");
const txt_idUser = document.querySelector("#txt_idUser");
const txtNombres = document.querySelector("#txtNombres");
const txtApellidos = document.querySelector("#txtApellidos");
const txtCui = document.querySelector("#txtCui");
const txtCorreo = document.querySelector("#txtCorreo");
const txtRol = document.querySelector("#txtRol");
const txtFechai = document.querySelector("#txtFechai");
const btn_cancelarUs = document.querySelector("#btn_cancelarUs");
const btnAsignarPuesto = document.querySelector("#btnAsignarPuesto");
const btnEliminarU = document.querySelector("#btnEliminarU");
const btnAceptarR = document.querySelector("#btnAceptarR");

//REDES
const txtFace = document.querySelector("#txtFace");
const txtinsta = document.querySelector("#txtinsta");
const txtTw = document.querySelector("#txtTw");
$(document).ready(function () {
  $("#tblCustomer").DataTable({
    language: {
      url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json",
    },

    scrollY: 380,
    scrollX: true,
  });
});

$("#tblCustomer").on("click", "tr td", function (evt) {
  let image,
    target,
    id,
    Id_user,
    nombres,
    apellidos,
    cui,
    correo,
    rol,
    fecha_creacion;

  target = $(event.target);
  id = target.parent().data("id");
  // image = target.parent("tr").find("td").eq(1).html();
  Id_user = target.parent("tr").find("td").eq(2).html();
  nombres = target.parent("tr").find("td").eq(3).html();
  apellidos = target.parent("tr").find("td").eq(4).html();
  cui = target.parent("tr").find("td").eq(5).html();
  correo = target.parent("tr").find("td").eq(6).html();
  rol = target.parent("tr").find("td").eq(7).html();
  fecha_creacion = target.parent("tr").find("td").eq(8).html();
  let tres = {
    id,
    Id_user,
    nombres,
    apellidos,
    cui,
    correo,
    rol,
    fecha_creacion,
  };

  AbrirModal(tres);
});

function AbrirModal(tres) {
  modalUser.showModal();
  let data = tres;
  txt_idUser.value = data.id;
  txtNombres.value = data.nombres;
  txtApellidos.value = data.apellidos;
  txtCui.value = data.cui;
  txtCorreo.value = data.correo;
  txtFechai.value = data.fecha_creacion;
}

window.addEventListener("load", () => {
  readDonly();
});

function readDonly() {
  txtNombres.readOnly = true;
  txtApellidos.readOnly = true;
  txtCui.readOnly = true;
  txtCorreo.readOnly = true;
  txtFechai.readOnly = true;
  //document.getElementById("control_EMAIL").readOnly = true;
}

function Limpiar() {
  txtNombres.value = "";
  txtApellidos.value = "";
  txtCui.value = "";
  txtCorreo.value = "";
  txtFechai.value = "";
}

btn_cancelarUs.addEventListener("click", () => {
  Limpiar();
  modalUser.close();
});

btnAsignarPuesto.addEventListener("click", () => {
  Asignar(txt_idUser.value, txtNombres.value, txtApellidos.value);
});

function Asignar(id, nom, ape) {
  //console.log(id);
  Swal.fire({
    target: document.querySelector("#modalUser"),
    title: "Puesto",
    text: "¿Desea asignar a " + nom + " " + ape + "?",
    icon: "warning",
    confirmButtonColor: "#0072ff",
    cancelButtonColor: "#D2122E",
    showCancelButton: true,
    confirmButtonText: "Sí, asignar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      AsignarUsuario(id);
      //console.log("*se elimina la venta*");
    } else {
      //  console.log("*NO se elimina la venta*");
    }
  });
}

function AsignarUsuario(id) {
  // console.log("id: " + id);
  let error = 1;
  if (error == 0 || error === null) {
    //   modalDatosGenerales.close();
    Swal.fire({
      target: document.querySelector("#modalUser"),
      title: "Error",
      text: "Vaya, algo ha ocurrido mal",
      icon: "error",
      confirmButtonColor: "#ff004c",
    }).then(function () {
      location.reload();
    });
  } else {
    //   modalDatosGenerales.close();
    Swal.fire({
      target: document.querySelector("#modalUser"),
      title: "Excelente!!",
      text: "Nuevo rol agregado correctamente!!",
      icon: "success",
      confirmButtonColor: "#008d49",
    }).then(function () {
      // traerDatos(error);
    });
  }
}

//PARA ELIMINAR UN USUARIO
btnEliminarU.addEventListener("click", () => {
  EliminarU(txt_idUser.value, txtNombres.value, txtApellidos.value);
});

function EliminarU(id, nom, ape) {
  // console.log(id);
  Swal.fire({
    target: document.querySelector("#modalUser"),
    title: "Eliminar Usuario",
    text: "¿Desea eliminar a " + nom + " " + ape + "?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#0072ff",
    cancelButtonColor: "#D2122E",
  }).then((resultado) => {
    if (resultado.value) {
      EliminarUsuario(id);
      // console.log("*se elimina la venta*");
    } else {
      // console.log("*NO se elimina la venta*");
    }
  });
}

function EliminarUsuario(id) {
  // console.log("id: " + id);
  let error = 1;
  if (error == 0 || error === null) {
    //   modalDatosGenerales.close();
    Swal.fire({
      target: document.querySelector("#modalUser"),
      title: "Error",
      text: "Vaya, algo ha ocurrido mal",
      icon: "error",
      confirmButtonColor: "#ff004c",
    }).then(function () {
      location.reload();
    });
  } else {
    //   modalDatosGenerales.close();
    Swal.fire({
      target: document.querySelector("#modalUser"),
      title: "Excelente!!",
      text: "Cliente eliminado correctamente",
      icon: "success",
      confirmButtonColor: "#008d49",
    }).then(function () {
      // traerDatos(error);
    });
  }
}

btnAceptarR.addEventListener("click", () => {
  ActualizarRedesS(txtFace.value, txtinsta.value, txtTw.value);
});

function ActualizarRedesS(facebook, instagram, twitter) {
  console.log(facebook);
  Swal.fire({
    title: "Eliminar Usuario",
    text: "¿Desea eliminar actualizar sus redes sociales?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, actualizar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#0072ff",
    cancelButtonColor: "#D2122E",
  }).then((resultado) => {
    if (resultado.value) {
      ActualizarRedesF(facebook, instagram, twitter);
    } else {
      // console.log("*NO se elimina la venta*");
    }
  });
}

function ActualizarRedesF(f, i, t) {
  console.log("f" + f);
  let error2 = 1;
  if (error2 == 0 || error2 === null) {
    //   modalDatosGenerales.close();
    Swal.fire({
      title: "Error",
      text: "Vaya, algo ha ocurrido mal",
      icon: "error",
      confirmButtonColor: "#ff004c",
    }).then(function () {
      location.reload();
    });
  } else {
    //   modalDatosGenerales.close();
    Swal.fire({
      title: "Excelente!!",
      text: "Cliente eliminado correctamente",
      icon: "success",
      confirmButtonColor: "#008d49",
    }).then(function () {
      // traerDatos(error);
    });
  }
}
//FRASE
const btnActualizarFrase = document.querySelector("#btnActualizarFrase");
let txtFrase = document.querySelector("#txtFrase");
let txtAutor = document.querySelector("#txtAutor");
btnActualizarFrase.addEventListener("click", () => {
  ActualizarFraseA(txtFrase.value, txtAutor.value);
});

function ActualizarFraseA(frase, autor) {
  Swal.fire({
    title: "Actualizar frase inicio",
    text: "¿Desea  actualizar frase inicio?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, actualizar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#0072ff",
    cancelButtonColor: "#D2122E",
  }).then((resultado) => {
    if (resultado.value) {
      ActualizarFrase(frase, autor);
    } else {
      // console.log("*NO se elimina la venta*");
    }
  });
}

function ActualizarFrase(frase, autor) {
  console.log(frase);
}
