var codigoAlmacenado = []



$(document).ready(function() {

	$("#nombre").keyup(almacenar);

	function almacenar () {
		var codigo = $(this).val();
		if (codigoAlmacenado == codigoIngresado) {
			alert(":D");			
		} else if (codigoAlmacenado != codigoIngresado) {
			alert("Ingresa la clave correcta.");
		}
	}
});