$(document).ready(function() {

	$("#pais").change(validandoPais);
	$("#inputNumero").keydown(validandoTeclas);
	$("#inputNumero").keyup(validandoNumero);
	$("#siguiente").click(codigoRandom);

	function validandoPais () {
		var opcion = $(this).val();
		if(opcion == "Peru") {
			console.log(":D")			
		} else if ( opcion != "Peru") {
			console.log(":c");
		}
	};

	function validandoNumero () {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#siguiente").attr("href", "signup-2.html");
		} else if(longitud > 9) {
			sweetAlert("Oops...", "Son 9 dígitos", "error");
			$("#siguiente").removeAttr("href");
		}
	};

	function validandoTeclas (e) {
		var ascii = e.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;			
		}
	}

	function codigoRandom () {
		var codigo = Math.floor(Math.random()*1000)-1;
		var numTelef = $("#inputNumero").val().length;
		if(numTelef == 9) {
			$("#siguiente").attr("href", "signup-2.html");
			alert("LAB-" + codigo);
		}

	}

});