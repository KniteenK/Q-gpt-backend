import express from 'express';
import cors from 'cors';
import uploadRouter from '../routes/upload.routes.js';
import askRouter from '../routes/ask.routes.js'
import bodyParser from 'body-parser';
import authRouter from '../routes/auth.routes.js';

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Use CORS to allow requests from your frontend
app.use(cors());

// Use the upload route
app.use('/api',uploadRouter);
app.use('/auth' , authRouter) ;
app.use(askRouter);


export default app;
