$(document).ready(function() {

	$("#formulario").change(nomApel);
	$("#nombre").keyup(validandoNombre);
	$("#apellido").keyup(validandoApellido);
	$("#email").keyup(validandoEmail);

	function nomApel (e) {
		var ascii = e.keyCode;
		if (ascii == 209 || ascii == 241 && (ascii >= 97 && ascii <= 122)) {
			return true;
		} else {
			return false;
		}
	}

	function validandoNombre (e) {
		var nombre = $(this).val();
		if(nombre.match('^[a-zA-Z]{3,16}$')) {
			alert(":D")			
		} else {
			alert(":c");
		}
	}

	function validandoApellido (e) {
		var apellido = $(this).val().length;
		if (apellido == 9) {
			$("#siguiente").attr("href", "signup-2.html");
		} else {
			$("#siguiente").removeAttr("href");
		}
	}

	function vaidandoEmail () {

	}
});