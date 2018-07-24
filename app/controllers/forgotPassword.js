// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var Cloud = require('ti.cloud');

$.btnPhoto.addEventListener('click', function (e) {
    Cloud.Photos.create({
        photo: Titanium.Filesystem.getFile('/images/user.png'),
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
});
