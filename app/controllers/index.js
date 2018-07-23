var Cloud = require('ti.cloud');

$.btnLogin.addEventListener('click', function(e){
	//alert('Bienvenido ' + $.txtUser.value);
	Cloud.Users.login({
		login: $.txtUser.value,
		password: $.txtPass.value,
		pretty_json: true,
	}, function(e){
		if (e.success){
			//var user = users[0];
			//alert('Bienvenido Usuario:' + $.txtUser.value + '\n Con numero de session: ' + Cloud.sessionId);
			var main = Alloy.createController('main').getView();
			main.open();
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

$.btnFotgot.addEventListener('click', function(e){
	var forgot = Alloy.createController('forgotPassword').getView();
	forgot.open();
});

$.index.open();
