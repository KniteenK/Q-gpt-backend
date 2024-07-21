import admin from 'firebase-admin' ;
import serviceAccount from '../../firebaseConfig.json' assert { type: 'json' };
import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.DATABASE_URL)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) , 
    databaseURL: process.env.DATABASE_URL
});

const db = admin.database();

export {admin , db} ;