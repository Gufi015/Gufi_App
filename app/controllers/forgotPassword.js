// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');
//var image;
$.btnPhoto.addEventListener('click', function (e) {
	var image;
    Titanium.Media.openPhotoGallery({
        success: function (e) {
            if (e.mediaType == Titanium.Media.MEDIA_TYPE_PHOTO) {
                image = e.media;
                //alert(image);
                
                Cloud.Photos.create({
                    photo: image
                }, function (e) {
                    if (e.success) {
                        var photo = e.photos[0];
                        alert('Success:\n' +
                            'ID:' + photo.id + '\n' +
                            'FILE_NAME' + photo.filename + '\n' +
                            'SIZE' + photo.size,
                            'UPDATE_AT:' + photo.updated_at
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
        },
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
});

$.btnGallery.addEventListener('click', function(e){
	Ti.Media.openPhotoGallery({
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO],
		success: function(e){
			alert('Media.width: ' + e.media.width 
			+'\n Media.height: ' + e.media.height
			+'\n Media.lenght: ' + e.media.lenght
			+'\n Media.mimeType: ' + e.media.mimeType
			+'\n Media.nativePath: ' + e.media.nativePath );
		},
		error: function(e){
			alert('Error:'+e);
		}
	});
});






