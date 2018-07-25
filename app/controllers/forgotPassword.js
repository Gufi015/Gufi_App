// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');
var image;

/*var permissions = ['android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE'];
Ti.Android.requestPermissions(permissions, function(e) {
    if (e.success) {
        Ti.API.info("SUCCESS");
    } else {
        Ti.API.info("ERROR: " + e.error);
    }
});
*/
$.btnViewPhoto.addEventListener('click', function(e){
	Cloud.Photos.query({
		page:1,
		per_page: 10,
		where:{
			
		}
	}, function(e){
		if(e.success){
			alert('Success: \n '+ 'Count: ' + e.photos.length);
			
			for(var i = 0; i < e.photos.length ; 1++){
				var photo = e.photos[i];
				alert('ID: ' + photo.id+ '\n'
				+'FILE_NAME: ' + photo.filename+ '\n'
				+'SIZE: '+ photo.size+ '\n'
				+ 'UPDATED_AT: ' + photo.updated_at);
			}
			
		}else{
			alert('Error: '+ ((e.error&& e.message)|| JSON.stringify(e)));
		}
	});
});

$.btnPhoto.addEventListener('click', function (e) {
    Titanium.Media.openPhotoGallery({
        success: function (e) {
            if (e.mediaType == Titanium.Media.MEDIA_TYPE_PHOTO) {
                image = e.media;
                Cloud.Photos.create({
                    photo: image
                }, function (e) {
                    if (e.success) {
                        var photo = e.photos[0];
                        alert('Success:\n' +
                            'ID: ' + photo.id + '\n' +
                            'FILE_NAME: ' + photo.filename + '\n' +
                            'SIZE: ' + photo.size,
                            'UPDATE_AT: ' + photo.updated_at
                        );
                    } else {
                        alert('Error:\n' +
                            (e.error && e.message) || JSON.stringify(e));
                    }
                });
            }
        },
        cancel: function (e) {
        },
        error: function(err){
        	alert('Error'+ err);
        }
    });
});

$.btnGallery.addEventListener('click', function(e){
	Ti.API.info('Presionaste Galery');
	Ti.Media.openPhotoGallery({
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO],
		success: function(e){
			alert('success'); 
		},
		error: function(e){
			alert('Error:'+ e);
		}
	});
});







