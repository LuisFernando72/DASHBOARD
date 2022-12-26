const btnPrueba = document.querySelector("#btn_pruebas");

btnPrueba.addEventListener("click", (e) => {
  let a = 0;
  //alert("Hola soy pruebas");
  if (a == 0) {


    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        iconColor: '#ff0e1d',
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
  
      Toast.fire({
        icon: "warning",
        title: "<h5 style='color:#8b0000; font-size:18px;'>correo o contraseña invalida</h5>",
      });
    
  }else{
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        iconColor: '#08bb40',
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
  
      Toast.fire({
        icon: "success",
        title: "<h5 style='color:#006400; font-size:18px;' >Inicio de sesión con exito</h5>",
      });
  }
  
});
