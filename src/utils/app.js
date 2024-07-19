import express from 'express';
import cors from 'cors';
import uploadRouter from '../routes/upload.routes.js';
import multer from 'multer';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use CORS to allow requests from your frontend
app.use(cors());

// Use the upload route
app.use('/api', uploadRouter);


export default app;
