const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../config/s3");

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "electromart-images-bhuvanes27-01",
        acl: "private",
        key: function (req, file, cb) {
            cb(null, Date.now() + "-" + file.originalname);
        }
    })
});

module.exports = upload;
