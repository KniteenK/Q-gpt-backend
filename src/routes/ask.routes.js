import express from 'express' ;
import { ask } from '../controllers/ask.controllers.js';

const router = express.Router();
console.log("idhar");
router.post('/ask',ask);



export default router ;