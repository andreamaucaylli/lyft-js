var codigoAlmacenado = localStorage.getItem("codigo");
var celularIngresado = localStorage.getItem("celular");

$(document).ready(function() {

	// $(".countries").msDropdown();
	$("#pais").change(validandoPais);
	$("#inputNumero").keydown(validandoTeclas);
	$(".celular").keyup(validandoNumero);
	$("#celular").text(celularIngresado);
	$("#siguiente").click(codigoRandom);
	$(".codigo").keyup(maxLengthCode);
	$("#contra").click(verificacionCode);
	$("#reenviar").click(resentCode);
	$("#siguienteDatos").click(validandoDatos);
	$("#profile").click(abrirMenu);
	$("#cerrarMenu").click(cerrarMenu);

	function validandoPais () {
		var opcion = $(this).val();
		if(opcion == "Peru") {
			console.log(":D")			
		} else if ( opcion != "Peru") {
			console.log(":c");
		}
	}

	function validandoNumero () {
		var celular = $(this).val();
		celularIngresado = localStorage.setItem("celular", celular);
		var celularLong = celular.length;
		if (celularLong == 9) {
			$("#contra").attr("href", "signup-2.html");
		} else if(celularLong > 9 && celularLong !== 0) {
			$("#contra").removeAttr("href");
			swal("Oops...", "Son 9 dígitos", "error");
		}
	}

	function validandoTeclas (e) {
		var ascii = e.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;			
		}
	}

	function codigoRandom (e) {
		e.preventDefault();
		var codigo = Math.floor(Math.random()*900)+99;
		codigoAlmacenado = localStorage.setItem("codigo", codigo);
		var numTelef = $("#inputNumero").val().length;
		if(numTelef == 9) {
			alert("LAB - " + codigo);
			$("#siguiente").attr("href", "signup-3.html");
		}
	}

	function resentCode () {
		swal("Este es tu código:", codigoAlmacenado, "success");
	}

	function maxLengthCode (e) {
		var ascii = e.keyCode;
		var codigoIngresado = $(this).val();
      	if(codigoIngresado.length == $(this).attr("maxlength")){
      		$(this).next().focus();
      	} else if (ascii == 8) {
      		$(this).prev().focus();
      	}
  	}

	function verificacionCode () {
		var codigoIngresado = $(".codigo").eq(0).val() + $(".codigo").eq(1).val() + $(".codigo").eq(2).val();
		if (codigoAlmacenado == codigoIngresado) {
			$("#contra").attr("href", "signup-3.html");		
		} else if (codigoAlmacenado != codigoIngresado) {
			swal("Oops...", "Clave incorrecta", "error");
		}
	}

	function validandoDatos () {
		var check = $("#check");
  		if(validarDatosUsuario()){
  			$("#siguienteDatos").attr("href", "mapa.html");
  		}
	}

	function validarDatosUsuario(e) {
		var nombre = $("#nombre").val();
		var apellido = $("#apellido").val();
		var email = $("#email").val();
		var check = $("#check");
		var valor = true;

		var regexNombre = /^[a-zñáéíóúü]+$/gi;
        if (!regexNombre.test(nombre)) {
            alert("Ingresa un nombre válido.");
            valor = false;
        }

        var regexApellido = /^[a-zñáéíóúü]+$/gi;
        if (!regexApellido.test(apellido)) {
            alert("Ingresa un apellido válido.");
            valor = false;
        }
		
	  	var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regexEmail.test(email)){
			alert("Ingrese un correo válid.o");
			valor = false; 
		} 

		if(!check.is(":checked")){
  			alert("Acepta los términos.");
  			valor = false;
  		} 
		return valor;
	}

	function abrirMenu() {
	    $("#mySidenav").style.width = "100vw";
	}

	function cerrarMenu() {
	    $("#mySidenav").style.width = "0";
	}
});