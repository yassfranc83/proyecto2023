window.onload = validacion;

function validacion(elemento){
	var form = document.getElementById('needs-validation');
	var nombres = document.getElementById('nombres').value;
	var telefono = document.getElementById('telefono').value;
	var municipio = document.getElementById('municipio').value;
	var correo = document.getElementById('correo').value;
	var cedula = document.getElementById('cedula').value;
	var escriba = document.getElementById('escriba').value;
	var seleccione = document.getElementById('seleccione').value;
    var opciones = document.getElementById('customRadioInline1');
    var opciones2 = document.getElementById( 'customRadioInline2');
    var opciones3 = document.getElementById('customRadioInline3');
    var error = document.querySelector('.error');
 
	if(nombres ==="" || telefono ==="" || municipio ==="" || cedula ===""){
		 
	 return false;
	}else if(/^\s+$/.test(nombres)){
		alert("Por favor escriba bien sus Nombres y Apellidos, no se permite poner espacios en blanco");
		  document.getElementById('nombres').focus();
		return false;
	}else if(!isNaN(nombres)){
		alert("Los datos ingresados en Nombres y Apellidos no son letras, por favor escriba correctamente");
			 document.getElementById('nombres').focus();	
		return false;
	}else if(nombres.length > 100){
		alert("Los nombres y Apellidos son muy largos");
		  document.getElementById('nombres').focus();
		return false;		
	}else if(isNaN(telefono)){
		alert("El dato ingresado en el campo teléfono no son números");
		  document.getElementById('telefono').focus();
		return false;
	}else if(/^\s+$/.test(telefono)){
		alert("por favor escriba correctamente su telefono, no se permite poner espacios en blanco.");
		 document.getElementById('telefono').focus();
		return false;
	}else if(telefono.length >8 ){
		alert("El número de telefono es muy largo");
		 document.getElementById('telefono').focus();
		return false;
	} else if(telefono.length <8){
		alert("El número de telefono es muy corto");
		 document.getElementById('telefono').focus();
		return false;
	}else if(/^\s+$/.test(municipio)){
		alert("Por favor escriba bien el Municipio, no se permite poner espacios en blanco");
		 document.getElementById('municipio').focus();
		return false;
	}else if(!isNaN(municipio)){
		alert("Los datos ingresados en Municipio no son letras, por favor escriba correctamente");
		 document.getElementById('municipio').focus();
		return false;
	}else if(municipio.length > 30){
		alert("El nombre del municipio es muy largo");
		 document.getElementById('municipio').focus();
		return false;
	}else if(/^\s+$/.test(cedula)){
		alert("Por favor escriba correctamente su Cédula, no se permite poner espacios en blanco");
		 document.getElementById('cedula').focus();
		return false;
	}else if(!opciones.checked & !opciones2.checked & !opciones3.checked) {
		alert("Seleccione el asunto por favor");
		 document.getElementById('customRadioInline1').focus();
		  return false;
	}else if(/^\s+$/.test(escriba)){
		alert("por favor escriba correctamente su queja, reclamo o sugerencia. Borre los espacios en blanco para enviar el correo correctamente");
		return false;
	}else if(escriba === "" & seleccione === ""){
		alert("falta escribir o seleccionar su queja, reclamo o sugerencia");
		 document.getElementById('escriba').focus();
		return false;
	}else if(correo != ""){
	  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([a-z])/.test(correo)) ) {
		alert("El correo no es valido, por favor escriba correctamente su correo");
		 document.getElementById('correo').focus();
	     return false;
	    }
    }

	alert("Su correo se envió correctamente");
	form.classList.add('was-validated');
}


