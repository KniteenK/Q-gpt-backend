import admin from '../utils/firebase.js' ;
import axios from 'axios' ;

const login = async (req , res) => {
    const {email , password} = req.body ;

    try {
        const response = await axios.post (
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${WEBKEY_API}`,
            {
                email,
                password,
                returnSecureToken: true,
            }
        );
        const { localId } = response.data;

        // Generate a custom token using Firebase Admin SDK
        const customToken = await admin.auth().createCustomToken(localId);
        return res.status(200).json({ token: customToken });

      } catch (error) {
        return res.status(400).json({ message: error });
      }
} ;

const signup = async (req , res) => {
    const {email, password} = req.body ;
    try {
        const user = await admin.auth().createUser({
            email,
            password,
            displayName: email
        }) ;
    
        return res.status(201).json({message : "User created successfully" , uid : user.uid}) ;
    }
    catch (error) {
        return res.status(400).json({error : error.message}) ;
    }


}

export { login, signup };