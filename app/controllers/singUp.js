// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');

$.btnDatos.addEventListener('click', function(e){
	Cloud.Users.create({
		username: $.txtUsername.value,
		email: $.txtEmail.value,
		first_name: $.txtName.value,
		last_name: $.txtLastName.value,
		password:  $.txtPassword.value,
		password_confirmation: $.txtPasswordConfirmation.value
	},function(e){
		if(e.success){
			alert('Datos agregados correctamente!');
		}else{
			alert('Error al guardar los datos \n' + JSON.stringify(e) );
		}	
	});
});





