import admin from 'firebase-admin' ;
import serviceAccount from '../../firebaseConfig.json' assert { type: 'json' };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount) , 
    databaseURL: process.env.DATABASE_URL
});

export default admin ;