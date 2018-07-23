// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');

$.btnMain.addEventListener('click', function(e){
	//alert('Bienvendo');
	Cloud.Users.showMe(function(e){
		if(e.succes){
			var user = e.users[0];
			alert('SUCCES \N'+ user.id +'USER_ID');
		}else{
			alert('error');
		}	
	});
});
