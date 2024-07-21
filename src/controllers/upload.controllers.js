const uploadFiles = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }

    const file = req.file;

    console.log('Received file:', file);

    // Process file.buffer here

    res.status(200).send('File uploaded and processed successfully.');
};

export { uploadFiles };
