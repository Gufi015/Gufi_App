// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');
//var image;
$.btnPhoto.addEventListener('click', function (e) {
	var image;
    Titanium.Media.openPhotoGallery({
        success: function (e) {
            if (e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                image = e.media;
                alert(image);
                Cloud.Photos.create({
                    photo: image,
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
