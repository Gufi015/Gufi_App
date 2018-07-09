var Cloud = require('ti.cloud');

$.btnLogin.addEventListener('click', function(e){
	//alert('Bienvenido ' + $.txtUser.value);
	Cloud.Users.login({
		login: $.txtPass.value,
		password: $.txtPass.value,
		pretty_json: false,
	}, function(e){
		if (e.success){
			var user = Users[0];
			alert('Succes Login');
		}else{
			alert('Login Fail' + JSON.stringify(e));
		}
	});
});

$.btnSing.addEventListener('click',function(e){
	var sing = Alloy.createController('singUp').getView();
	sing.open();
	
	Ti.API.info('Presionaste el boton de Sing Up');
});


$.index.open();
