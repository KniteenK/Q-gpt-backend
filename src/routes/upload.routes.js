import express from 'express';
import {uploadFiles} from '../controllers/upload.controllers.js';
import upload from '../middleware/multer.middleware.js';

const router = express.Router();

router.post('/upload' , upload.single('file'), uploadFiles);


//http://localhost:3000/api/upload

export default router
