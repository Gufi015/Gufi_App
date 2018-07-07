
$.btnLogin.addEventListener('click', function(e){
	//alert('Bienvenido ' + $.txtUser.value);
	if($.txtUser.value =="admin" && $.txtPass.value=="admin"){
		var main = Alloy.createController('main').getView();
		main.open();
	}else{
		var sing = Alloy.createController('sing').getView();
		sing.open();
	}
	Titanium.API.info('presionaste el boton');
});





$.index.open();
