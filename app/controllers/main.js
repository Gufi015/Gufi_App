// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');

$.btnMain.addEventListener('click', function(e){
	Cloud.Users.query({
		page: 1,
		per_page: 20,
		where:{
	    }
	},function(e){
		if(e.success){
			alert('Consulta:\n'+ 'Count: ' + e.users.length);
			for (var i = 0;  i < e.users.length; i++){ 
				var user = users[i];
				alert('ID: ' + user.id + '\n' +
					'FIRST NAME: ' + user.first_name + '\n' +
					'LAST_NAME: ' + user.last_name);
			}
		}else{
			alert('Error \n' +((e.error && e.message)|| JSON.stringify(e)));
		}
	});
});
