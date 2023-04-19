const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

let max = 4;
let cont = 1;

btn_adelante2.addEventListener("click", function(e){
  e.preventDefault();
  var nombres = document.getElementById("nombres").value;
  var apellido = document.getElementById("apellido").value;
  var dni = document.getElementById("dni").value;

  if ( nombres=="" && apellido=="" && dni==""){
    document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("nombres").style.borderColor="#DA2A33"
    document.getElementById("apellido-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido").style.borderColor="#DA2A33"
    document.getElementById("dni-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("dni").style.borderColor="#DA2A33"
    
  }else if ( (nombres=="" || apellido=="" || dni=="") ||
             (nombres.length<2 || apellido.length<2 || dni.length!=8) ||
             (!verificarNombre(nombres) || !verificarNombre(apellido) || !verificardni(dni))
           ){
    
    if ( nombres=="" ){
      document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( nombres.length<2 ){
      document.getElementById("nombres-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(nombres) ){
      document.getElementById("nombres-error").innerHTML = "* Dato no válido."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("nombres-error").innerHTML = ""
      document.getElementById("nombres").style.borderColor="lightgrey"      
    }

    if ( apellido=="" ){
      document.getElementById("apellido-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else if ( apellido.length<2 ){
      document.getElementById("apellido-error").innerHTML = "* Debe tener 2 o más caractéres."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else if ( !verificarNombre(apellido) ){
      document.getElementById("apellido-error").innerHTML = "* Dato no válido."
      document.getElementById("apellido").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido-error").innerHTML = ""
      document.getElementById("apellido").style.borderColor="lightgrey"      
    }

    if ( dni=="" ){
      document.getElementById("dni-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("dni").style.borderColor="#DA2A33"      
    }else if ( dni.length!=8 ){
      document.getElementById("dni-error").innerHTML = "* Debe tener 8 digitos."
      document.getElementById("dni").style.borderColor="#DA2A33"      
    }else if ( !verificardni(dni) ){
      document.getElementById("dni-error").innerHTML = "* Debe ingresar solo números."
      document.getElementById("dni").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("dni-error").innerHTML = ""
      document.getElementById("dni").style.borderColor="lightgrey"      
    }
    
  } else {
    document.getElementById("nombres-error").innerHTML = ""
    document.getElementById("nombres").style.borderColor="lightgrey"
    document.getElementById("apellido-error").innerHTML = ""
    document.getElementById("apellido").style.borderColor="lightgrey"
    document.getElementById("dni-error").innerHTML = ""
    document.getElementById("dni").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
    }

  function verificarNombre($n){
    var ExpRegular_Nombre = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
    return ExpRegular_Nombre.test($n);
  }

  function verificardni($m){
    var ExpRegular_dni = /^[\d]+$/;
    return ExpRegular_dni.test($m);
  }
});


btn_adelante3.addEventListener("click", function(e){

    e.preventDefault();
    
    var correo = document.getElementById("correo").value;
    var numCel = document.getElementById("numCel").value;
    var direccion = document.getElementById("direccion").value;
  
    if ( correo=="" && numCel=="" && direccion==""){
  
      document.getElementById("correo-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("correo").style.borderColor="#DA2A33"
      document.getElementById("numCel-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("numCel").style.borderColor="#DA2A33"  
      document.getElementById("direccion-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("direccion").style.borderColor="#DA2A33" 
  
    }else if ( (correo=="" || numCel=="") || 
               (correo.length<6 || numCel.length!=9 || direccion<3) || 
               (!verificarCorreo(correo) || !verificarNumCel(numCel) || !verificardireccion(direccion))
             ){
      
      if ( correo=="" ){
        document.getElementById("correo-error").innerHTML = "* Este campo no puede quedar vacío."
        document.getElementById("correo").style.borderColor="#DA2A33"      
      }else if ( correo.length<6 ){
        document.getElementById("correo-error").innerHTML = "* Debe tener 6 o más caractéres."
        document.getElementById("correo").style.borderColor="#DA2A33"      
      }else if ( !verificarCorreo(correo) ){
        document.getElementById("correo-error").innerHTML = "* Ingreso de datos inválidos."
        document.getElementById("correo").style.borderColor="#DA2A33"      
      }else {
        document.getElementById("correo-error").innerHTML = ""
        document.getElementById("correo").style.borderColor="lightgrey"      
      }
  
      if ( numCel=="" ){
        document.getElementById("numCel-error").innerHTML = "* Este campo no puede quedar vacío."
        document.getElementById("numCel").style.borderColor="#DA2A33"      
      }else if ( numCel.length!=9 && !verificarNumCel(numCel) ){
        document.getElementById("numCel-error").innerHTML = "* Debe ingresar solo números."
        document.getElementById("numCel").style.borderColor="#DA2A33"      
      }else if ( numCel.length!=9 ){
        document.getElementById("numCel-error").innerHTML = "* Debe tener 9 dígitos."
        document.getElementById("numCel").style.borderColor="#DA2A33"      
      }else if ( !verificarNumCel(numCel) ){
        document.getElementById("numCel-error").innerHTML = "* Ingreso de datos inválidos."
        document.getElementById("numCel").style.borderColor="#DA2A33"      
      }else {
        document.getElementById("numCel-error").innerHTML = ""
        document.getElementById("numCel").style.borderColor="lightgrey"      
      }
      
      if ( direccion=="" ){
        document.getElementById("direccion-error").innerHTML = "* Este campo no puede quedar vacío."
        document.getElementById("direccion").style.borderColor="#DA2A33"      
      }else if ( direccion.length<3 && !verificardireccion(direccion) ){
        document.getElementById("direccion-error").innerHTML = "* asdasdasd."
        document.getElementById("direccion").style.borderColor="#DA2A33"      
      }else if ( direccion.length<3 ){
        document.getElementById("direccion-error").innerHTML = "* Debe tener 9 dígitos."
        document.getElementById("direccion").style.borderColor="#DA2A33"      
      }else if ( !verificardireccion(direccion) ){
        document.getElementById("direccion-error").innerHTML = "* Ingreso de datos inválidos."
        document.getElementById("direccion").style.borderColor="#DA2A33"      
      }else {
        document.getElementById("direccion-error").innerHTML = ""
        document.getElementById("direccion").style.borderColor="lightgrey"      
      }
    } else {
  
      document.getElementById("correo-error").innerHTML = ""
      document.getElementById("correo").style.borderColor="lightgrey"
      document.getElementById("numCel-error").innerHTML = ""
      document.getElementById("numCel").style.borderColor="lightgrey"
      document.getElementById("direccion-error").innerHTML = ""
      document.getElementById("direccion").style.borderColor="lightgrey" 

  
      movPag.style.marginLeft = "-50%";
      num[cont - 1].classList.add("active");
      progressText[cont - 1].classList.add("active");
      progressCheck[cont - 1].classList.add("active");
      cont += 1;
  
    }
  
    function verificarCorreo($n){
      var ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      return ExpRegular_Correo.test($n);
  
  /*     if ($n.match(ExpRegular_Correo)){
        return true
      }else{
        return false;
      } */
  
    }
  
    function verificarNumCel($m){
      var ExpRegular_Num = /^[\d]+$/;
      return ExpRegular_Num.test($m);
    }
    
    function verificardireccion($n){
        var ExpRegular_direccion = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+((?:[\s{1}][A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)+)?$/;
        return ExpRegular_direccion.test($n);
      }
  });





























btn_adelante4.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
});

btn_final.addEventListener("click", function(e){
    e.preventDefault();
    alert("Registro completado");
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
});

btn_atras1.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});

btn_atras3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    num[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    cont -= 1;
});