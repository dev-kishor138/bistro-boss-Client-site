import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";
// import axios from "axios";




export const AuthContext = createContext();


export const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // set and get token 
            const email = currentUser?.email;
            console.log(email)

            // get & set Token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }


        })

        return () => {
            return subscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInWithGoogle,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;