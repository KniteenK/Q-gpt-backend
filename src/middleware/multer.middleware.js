import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
    fileFilter: (req, file, cb) => {
        const validTypes = ['application/json', 'text/csv'];
        if (validTypes.includes(file.mimetype)) {
            cb(null, true);
            console.log(file.mimetype) ;
        } else {
            cb(new Error('Invalid file type. Only JSON and CSV files are allowed.'));
        }
    }
});

export default upload;