import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logOut = () => {
        setLoader(true)
        signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoader(false)
                console.log("form obeser", currentUser);
            }
            else {
                setLoader(false)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loader,
        signIn,
        createUser,
        signInWithGoogle,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;