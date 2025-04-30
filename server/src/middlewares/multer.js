import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
        const productName = req.body.name;
        const now = Date.now();
        const extension = file.originalname.split('.').pop(); // Obtiene la extensión del archivo
        cb(null, `${productName}-${now}.${extension}`);
    }
});

export const upload = multer({ storage: storage });