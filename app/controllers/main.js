// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');

$.btnMain.addEventListener('click', function(e){
	//alert('Bienvendo');
	/*Cloud.Users.showMe(function (e) {
		if (e.succes) {
			var user = e.users[0];
			alert('SUCCES \N' + user.id + 'USER_ID');
		} else {
			alert('error' + JSON.stringify(e));
		}
	});*/

	Cloud.Users.queryUsers({
		page: 1,
		per_page: 10,
		where:{}
	},function(e){
		if(e.succes){
			alert('Consulta:\n'+ 'Count: ' + e.users.length);
			for (var i = 0;  i < e.users.length; i++){ 
				var user = users[i];
				alert('ID: ' + user.id + '\n' +
					'FIRST NAME: ' + user.first_name + '\n' +
					'LAST_NAME: ' +user.last_name);
			}
		}else{
			alert('Error \n' +((e.error && e.message)|| JSON.stringify(e)));
		}
	});
});
