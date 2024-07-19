const uploadFiles = (req, res) => {
    const files = req.files;
    if (!files) {
        return res.status(400).send('No files were uploaded.');
    }

    files.forEach(file => {
        console.log('Received file:', file.originalname);
        // Process file.buffer here
    });

    res.status(200).send('Files uploaded and processed successfully.');
};

export { uploadFiles };
